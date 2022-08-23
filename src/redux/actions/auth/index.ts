
import { authConstants, authFailureConstants, authSuccessConstants } from '../../../constants';
import { loginProps } from '../../../constants/types';


interface LOGIN { type: authConstants.LOGIN, payload: loginProps }
interface LOGIN_SUCCESS { type: authSuccessConstants.LOGIN, payload: loginProps }
interface LOGIN_FAILURE { type: authFailureConstants.LOGIN, payload: loginProps }

interface LOGOUT { type: authConstants.LOGOUT }
interface LOGOUT_SUCCESS { type: authSuccessConstants.LOGOUT }
interface LOGOUT_FAILURE { type: authFailureConstants.LOGOUT }

interface SIGNUP { type: authConstants.SIGNUP, payload: object }
interface SIGNUP_SUCCESS { type: authSuccessConstants.SIGNUP, payload: { email: string } }
interface SIGNUP_FAILURE { type: authFailureConstants.SIGNUP, payload: object }

interface GETME { type: authConstants.GETME, payload: object }
interface GETME_SUCCESS { type: authSuccessConstants.GETME, payload: object }
interface GETME_FAILURE { type: authFailureConstants.GETME, payload: object }




export type authActions = LOGIN | LOGOUT | SIGNUP | GETME
    | LOGIN_FAILURE | LOGIN_SUCCESS
    | LOGOUT_FAILURE | LOGOUT_SUCCESS
    | SIGNUP_FAILURE | SIGNUP_SUCCESS
    | GETME_FAILURE | GETME_SUCCESS;
