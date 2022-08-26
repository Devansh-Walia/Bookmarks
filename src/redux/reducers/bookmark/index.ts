import { bookmarkActions } from '../../actions';
import {
  bookmarkConstants,
  bookmarkFailureConstants,
  bookmarkSuccessConstants
} from '../../../constants';

const initialState = {
  error: '',
  isLoading: false,
  rootBookmarkIds: [],
  bookmarks: {},
  currentFolder: 'root',
  isAdding: 'NO'
};

const reducer = (state: any = initialState, action: bookmarkActions) => {
  let newBookmarks, newRootBookmarkIds;
  switch (action.type) {
    case bookmarkConstants.CREATE:
      return { ...state, isAdding: 'IN_PROGRESS' };

    case bookmarkSuccessConstants.CREATE:
      newBookmarks = state.bookmarks;
      newBookmarks[action.payload.bookmark.id] = action.payload.bookmark;
      return {
        ...state,
        error: '',
        bookmarks: { ...newBookmarks },
        rootBookmarkIds:
          state.currentFolder === 'root'
            ? [...state.rootBookmarkIds, action.payload.bookmark.id]
            : [...state.rootBookmarkIds],
        isAdding: 'NO'
      };

    case bookmarkFailureConstants.CREATE:
      return { ...state, error: 'failed to create bookmark', isAdding: 'NO' };

    case bookmarkSuccessConstants.DELETE:
      newBookmarks = state.bookmarks;
      delete newBookmarks[action.payload.id];
      newRootBookmarkIds = state.rootBookmarkIds.filter(
        (id: string) => id !== action.payload.id
      );
      return {
        ...state,
        error: '',
        bookmarks: { ...newBookmarks },
        rootBookmarkIds: [...newRootBookmarkIds]
      };

    case bookmarkFailureConstants.DELETE:
      return { ...state, error: 'failed to delete bookmark' };

    case bookmarkConstants.READ:
      return { ...state, isLoading: true };

    case bookmarkSuccessConstants.READ:
      return {
        ...state,
        error: '',
        bookmarks: { ...state.bookmarks, ...action.payload.bookmarks },
        rootBookmarkIds:
          action.payload.currentFolder === 'root'
            ? action.payload.rootBookmarkIds
            : state.rootBookmarkIds,
        currentFolder: action.payload.currentFolder,
        isLoading: false
      };

    case bookmarkFailureConstants.READ:
      return { ...state, error: 'failed to read bookmarks', isLoading: false };

    case bookmarkSuccessConstants.PATCH:
      return { ...state, error: '', bookmarks: action.payload };

    case bookmarkFailureConstants.PATCH:
      return { ...state, error: 'failed to.PATCH bookmarks' };

    case bookmarkSuccessConstants.TOGGLE:
      return { ...state, error: '', bookmarks: action.payload };

    case bookmarkFailureConstants.TOGGLE:
      return { ...state, error: 'failed to.TOGGLE bookmarks' };

    case bookmarkSuccessConstants.CHANGE_DETAILS:
      return { ...state, error: '', bookmarks: action.payload };

    case bookmarkFailureConstants.CHANGE_DETAILS:
      return { ...state, error: 'failed to.CHANGE_DETAILS bookmarks' };

    default:
      return { ...state, error: null };
  }
};

export default reducer;
