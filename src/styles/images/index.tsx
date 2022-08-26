import { styled } from '@mui/material';

export const LoadingGif = styled('img')({
  display: 'block',
  margin: 'auto',
  width: '50%'
});

export const Saly = styled('img')({
  height: '42vw',
  minHeight: '300px',
  position: 'absolute',
  top: '5%',
  left: '11%'
});

export const GoogleIcon = styled('img')({
  height: 20
});

export const Logo = styled('img')({
  height: '57.82px',
  width: '57.84px',
  marginLeft: 16,
  marginTop: 16
});

export const Icon = styled('img')({
  margin: 10
});

export const FormImage = styled('img')({
  marginLeft: 100,
  marginRight: 120,
  marginBottom: 10,
  height: '250px'
});

export const CardImage = styled('img')({
  width: 255,
  minHeight: 170,
  maxHeight: 170,
  filter:
    'drop-shadow(0px 4px 8px rgba(0, 0, 0, 0.04)) drop-shadow(0px 0px 2px rgba(0, 0, 0, 0.06)) drop-shadow(0px 0px 1px rgba(0, 0, 0, 0.04))',
  borderRadius: 16
});

export const ProfileIcon = styled(Icon)({ transform: 'rotate(90deg)' });
