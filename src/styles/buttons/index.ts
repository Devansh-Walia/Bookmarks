import { Button, styled } from "@mui/material";


export const StyledButton = styled(Button)({
    width: '30vw'
})
export const SigninWithGoogle = styled(Button)({
    backgroundColor: 'white',
    width: '30vw',
    color: "black",
    flex: 1,
    flexDirection: "row",
    flexWrap: 'wrap',
    border: 1,
    borderWidth: 1,
    borderColor: '#eee'
})

export const StyledButton2 = styled(Button)({
    color: 'grey',
    width: 'inherit',
})
export const StyledButtonGiant = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    width: '90%',
    height: 100,

}))
export const AddLinkStyle = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
}))
export const FormButton = styled(Button)(({ theme }) => ({
    color: theme.palette.primary.main,
    backgroundColor: 'white',
    borderRadius: 10,
    width: 100
}))
export const ModalButton = styled(Button)(({ theme }) => ({
    backgroundColor: theme.palette.primary.dark,
    borderRadius: 10,
    padding: 12,
    flex: 1
}))


interface toggleProps {
    checked?: boolean;
}
export const ToggleButton = styled(Button)<toggleProps>(({ theme, checked }) => ({
    backgroundColor: !checked ? theme.palette.primary.main : "#dbd4d4",
    padding: '5px',
    width: 'fit-content',
    minWidth: checked ? '0px' : 'initial',
    height: checked ? 37 : 'initial',
    top: checked ? -2 : 'initial',
    borcerRadius: checked ? '10px' : 'initial',
    "&:hover": {
        backgroundColor: !checked ? theme.palette.primary.main : "#dbd4d4",
    }
}))
