import { FunctionComponent } from 'react'
import { CustForm2 } from '../components'
import AuthContainer from '../containers/AuthContainer'
import { WelcomeMessage, Headding, HeaddingBold, CustomBoxWhiteSmall, CustomBox, Saly } from '../styles'

type Props = {}

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
        <CustForm2 onSubmit={({ email, password }) => {
          console.log("submit");
        }} />
      </CustomBoxWhiteSmall>
    </AuthContainer>
  )
}

export { Login }


