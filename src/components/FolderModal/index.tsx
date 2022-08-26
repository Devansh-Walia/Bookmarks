import { FunctionComponent, useState } from 'react';
import { useFormik } from 'formik';
import { Modal, Button, styled } from '@mui/material';
import { StyledButton2 } from '../../styles';
import { AddCircleOutline, CloseOutlined } from '@mui/icons-material';
import { useAddFolder } from '../../redux';

export const ModalFolderForm = styled('form')({
  height: 250,
  width: 200,
  display: 'flex',
  flexDirection: 'column',
  backgroundColor: 'white',
  justifyContent: 'center',
  borderRadius: 20,
  padding: 20
});

export const ModalFolder = styled(Modal)({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  positioon: 'relative'
});

interface RootModalProps {
  parentId?: string;
}
export const RootModal: FunctionComponent<RootModalProps> = ({ parentId }) => {
  const [show, setShow] = useState(false);
  const [addFolder] = useAddFolder();
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const formik = useFormik({
    initialValues: {
      name: '',
      parentId: parentId
    },
    onSubmit: async (values) => {
      console.log(values);
      addFolder(values);
    }
  });

  return (
    <>
      <StyledButton2 onClick={handleShow}>
        <AddCircleOutline /> Folder
      </StyledButton2>
      <ModalFolder open={show} onClose={handleClose}>
        <ModalFolderForm onSubmit={formik.handleSubmit}>
          <label className="m-4 font-weight-bolder" htmlFor="name">
            Folder Name
          </label>
          <input
            id="name"
            name="name"
            type="string"
            className="border border-dark rounded-top w-75"
            onChange={formik.handleChange}
            value={formik.values.name}
            style={{
              border: '0.5px grey solid',
              borderRadius: 16,
              padding: 10,
              margin: 10
            }}
          />
          <Button
            style={{
              position: 'relative',
              right: '-165px',
              top: '-120px',
              width: 'min-content'
            }}
            onClick={handleClose}>
            <CloseOutlined />
          </Button>
          <Button type={'submit'}> Add folder</Button>
        </ModalFolderForm>
      </ModalFolder>
    </>
  );
};
