import { Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import { useDeleteBookmark } from '../../../redux';

import {
  CardContainer,
  CardImage,
  ContainerCheckbox,
  MiddleText,
  TitleCardText
} from '../../../styles';
import CustomizedCheckbox from '../../checkboxes';
import CardMenu from '../Menu';

interface ICardProps {
  bookmark: {
    createdAt?: string;
    deletedAt?: string;
    description?: string;
    id?: string;
    imageUrl?: string;
    isFavorite?: boolean;
    name?: string;
    updatedAt?: string;
    url?: string;
  };
}
export const Card: FunctionComponent<ICardProps> = ({ bookmark }) => {
  const [deleteBookmark] = useDeleteBookmark();
  let name = bookmark.name || bookmark.url;
  if (name) name = name.length > 10 ? name.substring(0, 10) + '...' : name;

  let description = bookmark.description || 'No description';
  if (description)
    description =
      description.length > 40
        ? description.substring(0, 40) + '...'
        : description;

  return (
    <CardContainer>
      <ContainerCheckbox>
        <CustomizedCheckbox like={'check'} />
        <CustomizedCheckbox like={'fav'} />
      </ContainerCheckbox>
      <a href={bookmark.url!} target={'_blank'} rel="noreferrer">
        <CardImage
          src={
            bookmark.imageUrl
              ? bookmark.imageUrl
              : '/assets/images/TitleCard.png'
          }
          alt="titleCard"
        />
      </a>
      <MiddleText>
        <TitleCardText variant="h6">{name}</TitleCardText>
        <CardMenu
          options={[
            {
              value: 'delete',
              handleClick: () => {
                console.log('delete', bookmark.id);
                deleteBookmark(bookmark.id!);
              }
            }
          ]}
        />
      </MiddleText>
      <div>
        <Typography className="bookmark-card-bottom-text">
          {description}
        </Typography>
      </div>
    </CardContainer>
  );
};
