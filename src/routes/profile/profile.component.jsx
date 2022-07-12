import { useContext } from 'react';
import { UserContext } from '../../contexts/user.context';

import './profile.styles.scss';

const Profile = () => {
  const { currentUser } = useContext(UserContext);

  // need useeffect
  console.log(currentUser);
  return (
    <main className="profile">
      {currentUser && (
        <div className="profile__container">
          <img
            className="profile__photo"
            src={currentUser.photoURL}
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
