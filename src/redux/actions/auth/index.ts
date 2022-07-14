import { authConstants } from '../../../constants';
interface LOGIN {type:authConstants.LOGIN_REDUX   ,payload : object}
interface LOGOUT {type:authConstants.LOGOUT_REDUX   }
interface SIGNIN {type:authConstants.SIGNIN_REDUX  ,payload: object}
interface GETME {type:authConstants.GETME_REDUX   , payload : object}

export type authActions = LOGIN | LOGOUT | SIGNIN | GETME;
