import { FunctionComponent } from 'react'
import { CustForm } from '../components'
import AuthContainer from '../containers/AuthContainer'
import { signInRequest } from '../services'
import { WelcomeMessage, Headding, HeaddingBold, CustomBoxWhiteSmall, CustomBox, Saly } from '../styles'

type Props = {}

interface onSubmitValues {
    Name: string;
    email: string;
    password: string;
}
interface onSubmitProps {
    onSubmit: (values: onSubmitValues) => Promise<boolean>;
}

const onSubmit: onSubmitProps['onSubmit'] = ({ Name, email, password }) => {
    return signInRequest({ Name, email, password });
}

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
                <CustForm onSubmit={onSubmit} />
            </CustomBoxWhiteSmall>
        </AuthContainer>
    )
}

export { Signin }


