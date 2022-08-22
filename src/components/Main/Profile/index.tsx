import { Button, Typography } from '@mui/material';
import { FunctionComponent } from 'react';

import { Profile, ProfileContainer, ProfileIcon } from '../../../styles';

interface IpropsProfile {
  user: {
    email?: string;
    name?: string;
  };
}

export const ProfileSection: FunctionComponent<IpropsProfile> = ({ user }) => {
  return (
    <ProfileContainer>
      <Profile>
        <img src={'/assets/images/profile.png'} alt="" />
        <div>
          <Typography>{user ? user.email : 'Email'}</Typography>
          <Typography>{user ? user.name : 'Name'}</Typography>
        </div>
      </Profile>
      <Button>
        <ProfileIcon src={'/assets/icons/ArrowHead.png'} alt="" />
      </Button>
    </ProfileContainer>
  );
};
