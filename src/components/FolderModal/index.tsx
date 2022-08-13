import { useState } from 'react';
import { useFormik } from 'formik';
import { Modal, Button, styled } from '@mui/material';
import { ModalButton } from '../../styles';

export const ModalFolderForm = styled('form')({
    height: 250,
    width: 200,
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 20
});

export const ModalFolder = styled(Modal)({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
});

export const RootModal = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const formik = useFormik({
        initialValues: {
            categoryName: '',
            imageUrl: '',
            products: []
        },
        onSubmit: async (values) => {
            console.log(values);
        }
    });

    return (
        <>
            <ModalButton variant="contained" onClick={handleShow}>
                ROOT
            </ModalButton>
            <ModalFolder open={show} onClose={handleClose}>
                <ModalFolderForm onSubmit={formik.handleSubmit}>
                    <label className="m-4 font-weight-bolder" htmlFor="categoryName">
                        Categories Name
                    </label>
                    <input id="categoryName" name="categoryName" type="string" className="border border-dark rounded-top w-75" onChange={formik.handleChange} value={formik.values.categoryName} />
                    <br></br>
                    <label className="m-4 font-weight-bolder" htmlFor="imageUrl">
                        Categories Image
                    </label>
                    <input id="imageUrl" name="imageUrl" type="string" className="border border-dark rounded-top w-75" onChange={formik.handleChange} value={formik.values.imageUrl} />
                    <Button onClick={handleClose} />
                    <Button onClick={handleClose} />
                </ModalFolderForm>
            </ModalFolder>
        </>
    );
};
