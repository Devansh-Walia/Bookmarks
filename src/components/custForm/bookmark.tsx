import { Typography } from '@mui/material';
import { Field, Formik } from 'formik';
import { FunctionComponent, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { object, string } from 'yup';
import { IRootState } from '../../redux/reducers';

import {
  bookmarkSelector,
  folderSelector
} from '../../services/SelectorFunctions';
import {
  BookMarkFormStyled,
  ErrorDiv,
  FlexDiv2,
  FormButton,
  ModalButton
} from '../../styles';
import { InputFieldAddForm } from '../inputField';
import { Loader } from '../Loader';

const BookmarkValidation = object().shape({
  url: string().required('Valid email required')
});

interface BookmarkValues {
  url: string;
  folder: string;
}

interface BookmarkProps {
  onSubmit: (values: BookmarkValues) => void;
}

export const BookmarkForm: FunctionComponent<BookmarkProps> = ({
  onSubmit
}) => {
  const [error, setError] = useState(false);
  const bookmark: IRootState['bookmark'] = useSelector(bookmarkSelector);
  const { folders } = useSelector(folderSelector);

  useEffect(() => {
    if (bookmark.error) {
      setError(bookmark.error);
    }
    return () => setError(false);
  }, [bookmark.error]);

  if (error) {
    setTimeout(() => {
      setError(false);
    }, 3000);
  }

  return (
    <Formik
      initialValues={{ url: '', folder: '/' }}
      onSubmit={(values, { resetForm }) => {
        onSubmit(values);
        resetForm();
      }}
      validationSchema={BookmarkValidation}>
      {({ values }) => (
        <BookMarkFormStyled>
          <Typography sx={{ color: 'white' }} variant="h4">
            Add Quick Link
          </Typography>
          <Typography sx={{ color: 'white', fontSize: 10 }}>URL</Typography>
          <Field
            name="url"
            placeholder="URL"
            type="text"
            required={true}
            component={InputFieldAddForm}
          />
          <Typography sx={{ color: 'white', fontSize: 10 }}>Folder</Typography>
          <FlexDiv2>
            <ModalButton variant="contained">
              {bookmark.currentFolder === 'root' ? (
                'Root'
              ) : folders[bookmark.currentFolder] ? (
                folders[bookmark.currentFolder].name
              ) : (
                <Link style={{ textDecoration: 'none' }} to="/dash">
                  No Such Folder Yet, Go Back to root
                </Link>
              )}
            </ModalButton>
            <FormButton
              variant="contained"
              type="submit"
              disabled={bookmark.isAdding === 'IN_PROGRESS'}>
              {bookmark.isAdding === 'IN_PROGRESS' ? (
                <Loader size={20} />
              ) : (
                'Save'
              )}
            </FormButton>
          </FlexDiv2>
          {error && <ErrorDiv>invalid link</ErrorDiv>}
        </BookMarkFormStyled>
      )}
    </Formik>
  );
};
