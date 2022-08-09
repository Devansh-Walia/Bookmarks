import { styled } from '@mui/material'
import { Form } from 'formik'

export const Form2 = styled(Form)({
    display: 'flex',
    position: 'relative',
    marginTop: '20%',
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'fit-content'
})

export const BookMarkFormStyled = styled(Form)({
    display: 'flex',
    flexDirection: 'column',
    height: 'fit-content',
    flex: 1,
    marginLeft: 40,
    marginTop: 20,
    padding: 10
})
