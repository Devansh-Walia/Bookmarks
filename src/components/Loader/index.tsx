import { CircularProgress, LinearProgress } from '@mui/material';
import { FunctionComponent } from 'react';

interface LoaderProps {
  size?: number;
}
export const Loader: FunctionComponent<LoaderProps> = ({
  size = undefined
}) => (
  <div style={{ margin: 'auto' }}>
    <CircularProgress size={size} />
  </div>
);

export const LinearLoader: FunctionComponent = () => (
  <div style={{ margin: 'auto' }}>
    <LinearProgress />
  </div>
);
