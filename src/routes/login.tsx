import { FunctionComponent } from 'react'
import { CustForm2 } from '../components'
import AuthContainer from '../containers/AuthContainer'
import { useLogin } from '../redux/hooks/AuthHooks'
import { WelcomeMessage, Headding, HeaddingBold, CustomBoxWhiteSmall, CustomBox, Saly } from '../styles'

type Props = {}

interface onSubmitValues {
  email: string;
  password: string;
}


const Login: FunctionComponent<Props> = (props) => {
  const [loggingIn] = useLogin();
  const onSubmit = ({ email, password }: onSubmitValues) => {
    loggingIn({ email, password });
  }
  return (
    <AuthContainer>
      <CustomBox>
        <WelcomeMessage >
          <Headding>Welcome,</Headding>
          <HeaddingBold>Get Started</HeaddingBold>
        </WelcomeMessage>
        <Saly src={require('../assets/images/Saly.png')} alt="saly" />
      </CustomBox>
      <CustomBoxWhiteSmall>
        <CustForm2 onSubmit={onSubmit} />
      </CustomBoxWhiteSmall>
    </AuthContainer>
  )
}

export { Login }


