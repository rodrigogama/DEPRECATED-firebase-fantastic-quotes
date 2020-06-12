import React from 'react';
import clsx from 'clsx';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import CardActions from '@material-ui/core/CardActions';
import IconButton from '@material-ui/core/IconButton';
import Chip from '@material-ui/core/Chip';
import { Card, CardContent, FavoriteIcon, FormatQuoteIcon } from './styles';

const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const Blockquote = ({ data, onClickLike }) => {
  return (
    <Card raised>
      <CardContent>
        <FormatQuoteIcon fontSize="large" />
        <Typography variant="subtitle1" component="p">
          {data.text}
        </Typography>
      </CardContent>
      <Divider />
      <CardActions disableSpacing>
        <Typography variant="body2" component="p" className="author--text">
          {capitalizeFirstLetter(data.authorName)}
        </Typography>
        {data.likes > 0 && (
          <Chip label={`${data.likes} ${data.likes === 1 ? 'like' : 'likes'}`} variant="outlined" />
        )}
        <IconButton onClick={onClickLike}>
          <FavoriteIcon className={clsx({ selected: data.liked })} />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Blockquote;
