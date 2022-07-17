import { useState, useRef, useEffect, useContext } from 'react';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from 'firebase/storage';
import { addDoc, serverTimestamp, collection } from 'firebase/firestore';
import { db } from '../../utils/firebase/firebase.utils';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { CompanyContext } from '../../contexts/company.context';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Button from '../../components/button/button.component';
import './create-pathway.styles.scss';

const YANDEX_API_KEY = process.env.REACT_APP_YANDEX_API_KEY;

const CreatePathway = () => {
  const [formData, setFormData] = useState({
    city: 'moscow',
    name: '',
    type: 'observer',
    address: '',
    price: 0,
    discountPercent: 0,
    image: '',
  });

  const { admin } = useContext(CompanyContext);

  const { city, name, type, address, price, discountPercent, image } = formData;

  const auth = getAuth();
  const navigate = useNavigate();
  const isMounted = useRef(true);

  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user && user.uid === admin.uid) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate('/');
        }
      });
    }

    return () => {
      isMounted.current = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isMounted]);

  const onSubmit = async (e) => {
    e.preventDefault();

    if (image.length > 1) {
      toast.error('Only 1 image allowed!');
      return;
    }

    let geolocation = {};

    const responce = await fetch(
      `https://geocode-maps.yandex.ru/1.x/?apikey=${YANDEX_API_KEY}&format=json&geocode=${address}`
    );
    const data = await responce.json();
    const dataNotFound =
      data.response.GeoObjectCollection.metaDataProperty
        .GeocoderResponseMetaData.found === '0';
    if (dataNotFound) {
      toast.error('data not found!');
      return;
    } else {
      const [lng, lat] =
        data.response.GeoObjectCollection.featureMember[0].GeoObject.Point.pos.split(
          ' '
        );

      geolocation.lat = lat ?? 0;
      geolocation.lng = lng ?? 0;
    }

    const storeImage = async (image) => {
      return new Promise((resolve, reject) => {
        const storage = getStorage();
        const fileName = `${auth.currentUser.uid}-${image.name}-${uuidv4()}`;
        const storageRef = ref(storage, 'images/' + fileName);
        const uploadTask = uploadBytesResumable(storageRef, image);

        uploadTask.on(
          'state_changed',
          (snapshot) => {
            const progress =
              (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            console.log('Upload is ' + progress + '% done');
            switch (snapshot.state) {
              case 'paused':
                console.log('Upload is paused');
                break;
              case 'running':
                toast.error('Upload is running');
                break;
              default:
                break;
            }
          },
          (error) => {
            reject(error);
          },
          () => {
            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
              resolve(downloadURL);
            });
          }
        );
      });
    };

    const imgUrls = await Promise.all(
      [...image].map((image) => storeImage(image))
    ).catch(() => {
      toast.error('Image not uploaded!');
      return;
    });

    const formDataCopy = {
      ...formData,
      imgUrls,
      geolocation,
      timestamp: serverTimestamp(),
    };

    formDataCopy.location = address;
    delete formDataCopy.image;
    delete formDataCopy.address;

    console.log(formDataCopy);

    const docRef = await addDoc(collection(db, 'pathways'), formDataCopy);
    console.log(`/${formDataCopy.city}/${docRef.id}`);
  };

  const onMutate = (e) => {
    let boolean = null;

    if (e.target.value === 'true') {
      boolean = true;
    }
    if (e.target.value === 'false') {
      boolean = false;
    }

    if (e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        image: e.target.files,
      }));
    }

    if (!e.target.files) {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: boolean ?? e.target.value,
      }));
    }
  };

  return (
    <main className="create-pathway">
      <div className="create-pathway__container">
        <h2 className="create-pathway__title">Create a Pathway</h2>
        <form className="create-pathway__form" onSubmit={onSubmit}>
          <label className="create-pathway__label">City</label>
          <select
            className="create-pathway__input"
            id="city"
            value={city}
            onChange={onMutate}
            required
          >
            <option value="moscow">Moscow</option>
            <option value="saint-petersburg">Saint Petersburg</option>
            <option value="altai-krai">Altai Krai</option>
            <option value="kazan">Kazan</option>
            <option value="vladivostok">Vladivostok</option>
          </select>

          <label className="create-pathway__label">Type</label>
          <select
            className="create-pathway__input"
            id="type"
            value={type}
            onChange={onMutate}
            required
          >
            <option value="Observing">Observing</option>
            <option value="Active">Active</option>
            <option value="Extreme">Extreme</option>
          </select>

          <label className="create-pathway__label">Name</label>
          <input
            className="create-pathway__input"
            type="text"
            id="name"
            value={name}
            onChange={onMutate}
            maxLength="32"
            minLength="4"
            required
          />

          <label className="create-pathway__label">Start Point Address</label>
          <textarea
            className="create-pathway__input create-pathway__text-area"
            type="text"
            id="address"
            value={address}
            onChange={onMutate}
            required
          />

          <label className="create-pathway__label">Price</label>
          <input
            className="create-pathway__input"
            type="number"
            id="price"
            value={price}
            onChange={onMutate}
            min="1"
            max="5000000"
            required
          />

          <label className="create-pathway__label">Discount Percent</label>
          <input
            className="create-pathway__input"
            type="number"
            id="discountPercent"
            value={discountPercent}
            onChange={onMutate}
            min="0"
            max="100"
            required
          />

          <label className="create-pathway__label">One Image Allowed</label>
          <input
            className="create-pathway__input create-pathway__choose-file"
            type="file"
            id="image"
            onChange={onMutate}
            max="6"
            accept=".jpg,.png,.jpeg"
            required
          />
          <Button
            buttonType={'btn__secondary-inverted'}
            buttonText={'Create Pathway'}
            type="submit"
          />
        </form>
      </div>
      <ToastContainer />
    </main>
  );
};

export default CreatePathway;
