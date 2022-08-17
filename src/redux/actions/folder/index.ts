
import { folderConstants, folderFailureConstants, folderSuccessConstants } from '../../../constants';

interface CREATE { type: folderConstants.CREATE, payload: object }
interface READ { type: folderConstants.READ, payload: object }
interface READ_CHILDREN { type: folderConstants.READ_CHILDREN, payload: object }
interface DELETE { type: folderConstants.DELETE, payload: object }
interface UPDATE { type: folderConstants.UPDATE, payload: object }

interface CREATE_SUCCESS { type: folderSuccessConstants.CREATE, payload: object }
interface READ_SUCCESS { type: folderSuccessConstants.READ, payload: object }
interface READ_CHILDREN_SUCCESS { type: folderSuccessConstants.READ_CHILDREN, payload: object }
interface DELETE_SUCCESS { type: folderSuccessConstants.DELETE, payload: object }
interface UPDATE_SUCCESS { type: folderSuccessConstants.UPDATE, payload: object }

interface CREATE_FAILURE { type: folderFailureConstants.CREATE, payload: object }
interface READ_FAILURE { type: folderFailureConstants.READ, payload: object }
interface READ_CHILDREN_FAILURE { type: folderFailureConstants.READ_CHILDREN, payload: object }
interface DELETE_FAILURE { type: folderFailureConstants.DELETE, payload: object }
interface UPDATE_FAILURE { type: folderFailureConstants.UPDATE, payload: object }


export type folderActions = CREATE | READ | READ_CHILDREN | DELETE | UPDATE
    | CREATE_FAILURE | CREATE_SUCCESS
    | READ_FAILURE | READ_SUCCESS
    | READ_CHILDREN_FAILURE | READ_CHILDREN_SUCCESS
    | DELETE_FAILURE | DELETE_SUCCESS
    | UPDATE_FAILURE | UPDATE_SUCCESS;
