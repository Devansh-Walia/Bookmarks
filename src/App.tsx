import { FunctionComponent } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Dash, Login, Signin } from './routes'

interface IAppProps {

}

const App: FunctionComponent<IAppProps> = (props) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Dash />} />
                <Route path='login' element={<Login />} />
                <Route path='signin' element={<Signin />} />
            </Routes>
        </BrowserRouter>
    )
}

export default App
