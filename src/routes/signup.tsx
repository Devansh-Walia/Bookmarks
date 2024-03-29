import { FunctionComponent } from 'react';
import { useSelector } from 'react-redux';
import { Navigate } from 'react-router-dom';

import { CustForm } from '../components';
import AuthContainer from '../containers/AuthContainer';
import { useSignin } from '../redux/hooks/AuthHooks';
import {
  getDataFromLocalStorage,
  removeDataFromLocalStorage
} from '../services';
import { authSelector } from '../services/SelectorFunctions';
import {
  CustomBox,
  CustomBoxWhiteSmall,
  Headding,
  HeaddingBold,
  Saly,
  WelcomeMessage
} from '../styles';

interface onSubmitValues {
  Name: string;
  email: string;
  password: string;
}

const SignUp: FunctionComponent = () => {
  const [signingIn] = useSignin();

  const onSubmit = ({ Name, email, password }: onSubmitValues) => {
    signingIn({ userName: Name, email: email, password: password });
  };
  const auth = useSelector(authSelector);

  if (auth.isSignedin && getDataFromLocalStorage({ key: '@Canlogin' })) {
    setTimeout(() => removeDataFromLocalStorage({ key: '@Canlogin' }), 2000);
    return <Navigate replace to="/login" />;
  }
  return (
    <AuthContainer>
      <CustomBox>
        <WelcomeMessage>
          <Headding>Welcome,</Headding>
          <HeaddingBold>Get Started</HeaddingBold>
        </WelcomeMessage>
        <Saly src={'/assets/images/Saly.png'} alt="saly" />
      </CustomBox>
      <CustomBoxWhiteSmall>
        <CustForm onSubmit={onSubmit} />
      </CustomBoxWhiteSmall>
    </AuthContainer>
  );
};

export { SignUp };
