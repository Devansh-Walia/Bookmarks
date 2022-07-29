
import { authConstants, authFaliureConstants, authSucessConstants } from '../../../constants';
export interface loginProps { email: string; password: string; }

interface LOGIN { type: authConstants.LOGIN, payload: loginProps }
interface LOGOUT { type: authConstants.LOGOUT }
interface SIGNIN { type: authConstants.SIGNIN, payload: object }
interface GETME { type: authConstants.GETME, payload: object }

interface LOGIN_SUCCESS { type: authSucessConstants.LOGIN, payload: loginProps }
interface LOGOUT_SUCCESS { type: authSucessConstants.LOGOUT }
interface SIGNIN_SUCCESS { type: authSucessConstants.SIGNIN, payload: object }
interface GETME_SUCCESS { type: authSucessConstants.GETME, payload: object }

interface LOGIN_FALIURE { type: authFaliureConstants.LOGIN, payload: loginProps }
interface LOGOUT_FALIURE { type: authFaliureConstants.LOGOUT }
interface SIGNIN_FALIURE { type: authFaliureConstants.SIGNIN, payload: object }
interface GETME_FALIURE { type: authFaliureConstants.GETME, payload: object }


export type authActions = LOGIN | LOGOUT | SIGNIN | GETME
    | LOGIN_FALIURE | LOGIN_SUCCESS
    | LOGOUT_FALIURE | LOGOUT_SUCCESS
    | SIGNIN_FALIURE | SIGNIN_SUCCESS
    | GETME_FALIURE | GETME_SUCCESS;
