import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

import defaultAvatar from '../../assets/avatar.png';

import './profile.styles.scss';

const Profile = () => {
  const { currentUser } = useContext(UserContext);

  console.log(currentUser);
  return (
    <main className="profile">
      {currentUser && (
        <div className="profile__container">
          <img
            className="profile__photo"
            src={currentUser.photoURL ? currentUser.photoURL : defaultAvatar}
            alt={currentUser.displayName}
          />
          <span>{currentUser.displayName}</span>
          <span>{currentUser.email}</span>
        </div>
      )}
    </main>
  );
};

export default Profile;
