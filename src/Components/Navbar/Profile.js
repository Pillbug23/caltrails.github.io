import React from 'react';
import Information from './Information';
import { useAuth0 } from '@auth0/auth0-react';
import PleaseLogin from './PleaseLogin';

const Profile = () => {
  const { user } = useAuth0();
  
return (user ? <Information/> : <PleaseLogin />);

};

export default Profile;