
import { authConstants, authFailureConstants, authSuccessConstants } from '../../../constants';

export interface loginProps { email: string; password: string; }

interface LOGIN { type: authConstants.LOGIN, payload: loginProps }
interface LOGIN_SUCCESS { type: authSuccessConstants.LOGIN, payload: loginProps }
interface LOGIN_FAILURE { type: authFailureConstants.LOGIN, payload: loginProps }

interface LOGOUT { type: authConstants.LOGOUT }
interface LOGOUT_SUCCESS { type: authSuccessConstants.LOGOUT }
interface LOGOUT_FAILURE { type: authFailureConstants.LOGOUT }

interface SIGNIN { type: authConstants.SIGNIN, payload: object }
interface SIGNIN_SUCCESS { type: authSuccessConstants.SIGNIN, payload: object }
interface SIGNIN_FAILURE { type: authFailureConstants.SIGNIN, payload: object }

interface GETME { type: authConstants.GETME, payload: object }
interface GETME_SUCCESS { type: authSuccessConstants.GETME, payload: object }
interface GETME_FAILURE { type: authFailureConstants.GETME, payload: object }




export type authActions = LOGIN | LOGOUT | SIGNIN | GETME
    | LOGIN_FAILURE | LOGIN_SUCCESS
    | LOGOUT_FAILURE | LOGOUT_SUCCESS
    | SIGNIN_FAILURE | SIGNIN_SUCCESS
    | GETME_FAILURE | GETME_SUCCESS;
