import { InputAdornment } from '@mui/material';
import { FunctionComponent } from "react";
import { StyledTextField } from '../../styles';

interface StyledSearchProps {
    width: string;
    bgcolor: string;
}


export const SearchBox: FunctionComponent<StyledSearchProps> = (props) => {
    return (<>
        <StyledTextField
            id="input-with-icon-textfield"
            placeholder='Search'
            InputProps={{
                startAdornment: (
                    <InputAdornment position="start">
                        <img src={require('../../assets/icons/search.png')} alt="search" />
                    </InputAdornment>
                ),
            }}
            variant="outlined"
            {...props}
        /></>
    )
}