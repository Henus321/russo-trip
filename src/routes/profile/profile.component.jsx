import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  onSignOut,
  onNameChangeSubmit,
} from '../../utils/firebase/firebase.utils';
import { UserContext } from '../../contexts/user.context';

import Button from '../../components/button/button.component';
import defaultAvatar from '../../assets/avatar.png';
import { FaPen } from 'react-icons/fa';
import { FaCheck } from 'react-icons/fa';

import './profile.styles.scss';

const Profile = () => {
  const [changeDetails, setChangeDetails] = useState(false);
  const { currentUser } = useContext(UserContext);
  const [formData, setFormData] = useState({
    name: currentUser.displayName,
  });

  const navigate = useNavigate();
  const { name } = formData;

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.id]: e.target.value,
    }));
  };

  const onSignOutHandler = () => {
    onSignOut();
    navigate('/');
  };

  console.log(currentUser);

  return (
    <main className="profile">
      <div className="profile__container">
        <h2 className="profile__item profile__title">My Profile</h2>
        {currentUser && (
          <>
            <img
              className="profile__item profile__photo"
              src={currentUser.photoURL ? currentUser.photoURL : defaultAvatar}
              alt={currentUser.displayName}
            />
            <span className="profile__item">{currentUser.email}</span>
            <div className="profile__item">
              <input
                type="text"
                id="name"
                className={
                  !changeDetails ? 'profile__input' : 'profile__input-active'
                }
                disabled={!changeDetails}
                value={name}
                onChange={onChange}
              />
              <span
                className={
                  changeDetails
                    ? 'profile__change-details-active'
                    : 'profile__change-details'
                }
                onClick={() => {
                  changeDetails && onNameChangeSubmit(currentUser, name);
                  setChangeDetails((prevState) => !prevState);
                }}
              >
                {changeDetails ? <FaCheck /> : <FaPen />}
              </span>
            </div>
            <div className="profile__item">
              <Button
                buttonType="btn__primary"
                buttonText="Log Out"
                handler={() => onSignOutHandler()}
              >
                Log Out
              </Button>
            </div>
          </>
        )}
      </div>
    </main>
  );
};

export default Profile;
