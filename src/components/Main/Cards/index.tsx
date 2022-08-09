import { IconButton, Typography } from '@mui/material';
import { FunctionComponent } from 'react';
import { CardContainer, CardImage, ContainerCheckbox, MiddleText } from '../../../styles';
import CustomizedCheckbox from '../../checkboxes';

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
    let name = bookmark.name || bookmark.url;
    if (name) name = name.length > 10 ? name.substring(0, 10) + '...' : name;
    let description = bookmark.description || 'No description';
    if (description) description = description.length > 30 ? description.substring(0, 30) + '...' : description;
    return (
        <CardContainer>
            <ContainerCheckbox>
                <CustomizedCheckbox like={'check'} />
                <CustomizedCheckbox like={'fav'} />
            </ContainerCheckbox>
            <CardImage src={'assets/images/TitleCard.png'} alt="titleCard" />
            <MiddleText>
                <Typography variant="h6">{name}</Typography>
                <IconButton aria-label="moreVertical">
                    <img src={'assets/icons/3dot.png'} alt="" />
                </IconButton>
            </MiddleText>
            <div>
                <Typography className="bookmark-card-bottom-text">{description}</Typography>
            </div>
        </CardContainer>
    );
};
