import { styled } from '@mui/material/styles';
import Checkbox, { CheckboxProps } from '@mui/material/Checkbox';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import Favorite from '@mui/icons-material/Favorite';
import CircleChecked from '@mui/icons-material/CheckCircleOutline';
import CircleCheckedFilled from '@mui/icons-material/CheckCircle';
const CheckedIcon = styled(Checkbox)(({ theme }) => ({
    borderRadius: 20,
    width: 16,
    height: 16,
    'input:hover ~ &': {
        backgroundColor: '#30404d'
    }
}));

// Inspired by blueprintjs
function BpCheckbox(props: CheckboxProps & Props) {
    return (
        <CheckedIcon
            sx={{
                borderRadius: 20,
                backgroundColor: 'white',
                padding: props.like === 'fav' ? 2 : 0,
                top: props.like === 'fav' ? 20 : -10,
                left: props.like === 'fav' ? 0 : -10,
                fill: props.like === 'fav' ? '#E01A1A' : 'primary'
            }}
            disableRipple
            checkedIcon={props.like === 'fav' ? <Favorite color="error" /> : <CircleCheckedFilled />}
            icon={props.like === 'fav' ? <FavoriteBorder /> : <CircleChecked />}
            inputProps={{ 'aria-label': 'Checkbox demo' }}
            {...props}
        />
    );
}
export const Div = styled('div')({
    width: 'fit-content',
    padding: 7
});
interface Props {
    like: string;
}
export default function CustomizedCheckbox(props: Props) {
    return (
        <Div>
            <BpCheckbox {...props} />
        </Div>
    );
}
