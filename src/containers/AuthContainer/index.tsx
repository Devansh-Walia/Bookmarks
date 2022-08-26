import { FunctionComponent } from 'react';
import { CustomBoxBlue } from '../../styles';

type Props = {
  children: JSX.Element | JSX.Element[];
};
const AuthContainer: FunctionComponent<Props> = ({ children }) => {
  return <CustomBoxBlue>{children}</CustomBoxBlue>;
};

export default AuthContainer;
