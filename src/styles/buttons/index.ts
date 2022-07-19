import { Button,styled  } from "@mui/material";


export const  StyledButton = styled(Button)({
    width: '30vw'
})
export const  SigninWithGoogle = styled(Button)({
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
