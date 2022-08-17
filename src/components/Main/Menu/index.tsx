import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const ITEM_HEIGHT = 48;

interface IMenuProps {
    id?: string;
    options?: { value: string; handleClick: () => void }[];
}

const DropDownMenu: React.FunctionComponent<IMenuProps> = ({
    options = [
        {
            value: 'delete',
            handleClick: () => {
                console.log('delete');
            }
        }
    ]
}: IMenuProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton aria-label="more" id="long-button" aria-controls={open ? 'long-menu' : undefined} aria-expanded={open ? 'true' : undefined} aria-haspopup="true" onClick={handleClick}>
                <MoreVertIcon />
            </IconButton>
            <Menu
                id="long-menu"
                MenuListProps={{
                    'aria-labelledby': 'long-button'
                }}
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                PaperProps={{
                    style: {
                        maxHeight: ITEM_HEIGHT * 3,
                        width: '15ch',
                        borderRadius: 20
                    }
                }}>
                {options.map((option) => (
                    <MenuItem
                        key={option.value}
                        onClick={() => {
                            option.handleClick();
                            handleClose();
                        }}>
                        {option.value}
                    </MenuItem>
                ))}
            </Menu>
        </div>
    );
};

export default DropDownMenu;
