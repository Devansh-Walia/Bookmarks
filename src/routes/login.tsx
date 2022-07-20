import { FunctionComponent } from 'react'
import { CustForm2 } from '../components'
import AuthContainer from '../containers/AuthContainer'
import { logInRequest } from '../services'
import { WelcomeMessage, Headding, HeaddingBold, CustomBoxWhiteSmall, CustomBox, Saly } from '../styles'

type Props = {}

interface onSubmitValues {
  email: string;
  password: string;
}
interface onSubmitProps {
  onSubmit: (values: onSubmitValues) => Promise<boolean>;
}

const onSubmit: onSubmitProps['onSubmit'] = ({ email, password }) => {
  return logInRequest({ email, password });
}
const Login: FunctionComponent<Props> = (props) => {
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


