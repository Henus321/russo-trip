import { useState, useRef, useEffect } from 'react';
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

  const { city, name, type, address, price, discountPercent, image } = formData;

  const auth = getAuth();
  const navigate = useNavigate();
  const isMounted = useRef(true);

  // НЕ ДАСТ ЗАЙТИ ЕСЛИ НЕ ЗАЛОГИНЕН!
  useEffect(() => {
    if (isMounted) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          setFormData({ ...formData, userRef: user.uid });
        } else {
          navigate('/sign-in');
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
      console.log('Only 1 image allowed!');
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
      console.log('data not found!');
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
                console.log('Upload is running');
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
      console.log('Images not uploaded!');
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
    // navigate(`/${formDataCopy.city}/${formDataCopy.type}/${docRef.id}`);
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
    <main className="createPath">
      <h2 className="createPath__title">Create a Pathway</h2>
      <form className="createPath__form" onSubmit={onSubmit}>
        <label className="createPath__formLabel">City</label>
        <select
          className="createPath__formInputCity"
          id="city"
          value={city}
          onChange={onMutate}
          required
        >
          <option value="moscow">Moscow</option>
          <option value="vladivostok">Vladivostok</option>
          <option value="kazan">Kazan</option>
        </select>

        <label className="createPath__formLabel">Type</label>
        <select
          className="createPath__formInputType"
          id="type"
          value={type}
          onChange={onMutate}
          required
        >
          <option value="observer">observer</option>
          <option value="active">active</option>
          <option value="extreme">extreme</option>
        </select>

        <label className="createPath__formLabel">Name</label>
        <input
          className="createPath__formInputName"
          type="text"
          id="name"
          value={name}
          onChange={onMutate}
          maxLength="32"
          minLength="4"
          required
        />

        <label className="createPath__formLabel">Start Point Address</label>
        <textarea
          className="createPath__formInputAddress"
          type="text"
          id="address"
          value={address}
          onChange={onMutate}
          required
        />

        <label className="createPath__formLabel">Price</label>
        <input
          className="createPath__formInputPrice"
          type="number"
          id="price"
          value={price}
          onChange={onMutate}
          min="1"
          max="5000000"
          required
        />

        <label className="createPath__formLabel">Discount Percent</label>
        <input
          className="createPath__formInputDiscount"
          type="number"
          id="discountPercent"
          value={discountPercent}
          onChange={onMutate}
          min="0"
          max="100"
          required
        />

        <label className="createPath__formLabel">Image</label>
        <p>One Image Allowed</p>
        <input
          className="createPath__formInputfile"
          type="file"
          id="image"
          onChange={onMutate}
          max="6"
          accept=".jpg,.png,.jpeg"
          required
        />

        <button type="submit" className="createPath__button">
          Create Path
        </button>
      </form>
    </main>
  );
};

export default CreatePathway;
