import { FunctionComponent } from 'react'
import { CustForm } from '../components'
import AuthContainer from '../containers/AuthContainer'
import { WelcomeMessage, Headding, HeaddingBold, CustomBoxWhiteSmall, CustomBox } from '../styles'

type Props = {}

const Signin: FunctionComponent<Props> = (props) => {
    return (
        <AuthContainer>
            <CustomBox>
                <WelcomeMessage >
                    <Headding>Welcome,</Headding>
                    <HeaddingBold>Get Started</HeaddingBold>
                </WelcomeMessage>
                <img src={require('../assets/images/Saly.png')} alt="saly" style={{ height: '42vw', minHeight: '300px', position: 'absolute', top: '5%', left: '11%' }} />
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


