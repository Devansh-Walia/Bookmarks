import { FunctionComponent } from 'react'
import { CustForm } from '../components'
import AuthContainer from '../containers/AuthContainer'
import { WelcomeMessage, Headding, HeaddingBold, CustomBoxWhiteSmall, CustomBox, Saly } from '../styles'

type Props = {}

const Signin: FunctionComponent<Props> = (props) => {
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
                <CustForm onSubmit={({ Name, email, password }) => {
                    console.log("submit");
                }} />
            </CustomBoxWhiteSmall>
        </AuthContainer>
    )
}

export { Signin }


