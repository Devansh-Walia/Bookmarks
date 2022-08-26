import { Box, IconButton, Radio, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import CopyAllIcon from '@mui/icons-material/CopyAll';
import BorderColorIcon from '@mui/icons-material/BorderColor';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

import { ICardProps } from '../../../constants/types';

export const Card_table: FunctionComponent<ICardProps> = ({ bookmark }) => {
  const MAX_LENGTH = 60;
  //console.log(props.bookmark_name)
  return (
    <Box>
      <Box>
        <Radio
          value="a"
          name="radio-buttons"
          inputProps={{ 'aria-label': 'A' }}
        />
      </Box>

      <Box>
        <img
          src={
            bookmark.imageUrl
              ? bookmark.imageUrl
              : '/assets/images/TitleCard.png'
          }
          alt="titleCard"></img>
      </Box>
      <Box>
        <Typography variant="h6">{bookmark.name}</Typography>
        <Typography>{`${
          bookmark.description && bookmark.description.substring(0, MAX_LENGTH)
        }...`}</Typography>
      </Box>
      <Box>
        <Typography>Title Lorem Ipsum</Typography>
      </Box>
      <Box>
        <IconButton aria-label="bt-moreVertical">
          <FavoriteBorderIcon />
        </IconButton>
        <IconButton aria-label="bt-moreVertical">
          <CopyAllIcon />
        </IconButton>

        <IconButton aria-label="bt-moreVertical">
          <BorderColorIcon />
        </IconButton>
        <IconButton aria-label="bt-moreVertical">
          <DeleteOutlineIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default Card_table;
