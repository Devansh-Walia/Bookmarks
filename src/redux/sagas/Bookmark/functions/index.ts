import { bookmarkFailureConstants, bookmarkSuccessConstants } from '../../../../constants';
import { call, put } from 'redux-saga/effects'
import { changeDetailsBookmark, createBookmark, DeleteBookmark, getBookmark, patchBookmark, toggleFavBookmark } from '../../../../services';
import { CHANGE_DETAILS, CREATE, DELETE, PATCH, READ, TOGGLE } from '../../../actions/bookmark'
import { bookamrksType, bookmarkType } from '../../../../constants/types';

export function* CreateBookmarkWatcherFunction(action: CREATE): Generator<any> {
    try {
        const response: any = yield call(createBookmark, action.payload);
        yield put({ type: bookmarkSuccessConstants.CREATE, payload: { bookmark: response.data } });
    }
    catch (e) {
        yield put({ type: bookmarkFailureConstants.CREATE })
    }
}
export function* DeleteBookmarkWatcherFunction(action: DELETE): Generator<any> {
    try {
        const response: any = yield call(DeleteBookmark, { bookmarkId: action.payload.bookmarkId });

        yield put({ type: bookmarkSuccessConstants.DELETE, payload: { ...response.data, id: action.payload.bookmarkId } });
    }
    catch (e) {
        yield put({ type: bookmarkFailureConstants.DELETE })
    }
}
export function* GetBookmarkWatcherFunction(action: READ): Generator<any> {
    try {
        const response: any = yield call(getBookmark, { folderId: action.payload.folderId });
        const bookmarks: bookamrksType = {};
        const rootBookmarkIds: string[] = [];
        response.data.forEach((element: bookmarkType) => {
            rootBookmarkIds.push(element.id);
            bookmarks[element.id] = element;
        });
        yield put({ type: bookmarkSuccessConstants.READ, payload: { bookmarks, rootBookmarkIds, currentFolder: action.payload.folderId || "root" } });
    }
    catch (e) {
        yield put({ type: bookmarkFailureConstants.READ })
    }
}
export function* patchBookmarkWatcherFunction(action: PATCH): Generator<any> {
    try {
        console.log(action)
        const response: any = yield call(patchBookmark, { bookmarkId: action.payload.bookmarkId, folderId: action.payload.folderId });
        console.log(response);

        yield put({ type: bookmarkSuccessConstants.PATCH });
    }
    catch (e) {
        yield put({ type: bookmarkFailureConstants.PATCH })
    }
}
export function* ToggleFavBookmarkWatcherFunction(action: TOGGLE): Generator<any> {
    try {
        console.log(action)
        const response: any = yield call(toggleFavBookmark, { bookmarkId: action.payload.bookmarkId });
        console.log(response);

        yield put({ type: bookmarkSuccessConstants.TOGGLE });
    }
    catch (e) {
        yield put({ type: bookmarkFailureConstants.TOGGLE })
    }
}
export function* changeDetailsBookmarkWatcherFunction(action: CHANGE_DETAILS): Generator<any> {
    try {
        console.log(action)
        const response: any = yield call(changeDetailsBookmark, { bookmarkId: action.payload.bookmarkId, name: action.payload.name, url: action.payload.url });
        console.log(response);

        yield put({ type: bookmarkSuccessConstants.CHANGE_DETAILS });
    }
    catch (e) {
        yield put({ type: bookmarkFailureConstants.CHANGE_DETAILS })
    }
}

