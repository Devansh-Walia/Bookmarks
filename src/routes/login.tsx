import { FunctionComponent } from 'react'
import AuthContainer from '../containers/AuthContainer'
// import { CustForm } from '../components'
import { WelcomeMessage, Headding, HeaddingBold } from '../styles'

type Props = {}

const Login: FunctionComponent<Props> = (props) => {
  return (
    <AuthContainer>
      <WelcomeMessage >
        <Headding>Welcome,</Headding>
        <HeaddingBold>Get Started</HeaddingBold>
      </WelcomeMessage>
    </AuthContainer>
  )
}

export { Login }


      // <CustForm onSubmit={({ email, firstName, lastName }) => {
      //   console.log("submit", email, firstName, lastName);
      // }} />