/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import FavoriteIcon from '@material-ui/icons/Favorite';
import DeleteIcon from '@material-ui/icons/Delete';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import IconButton from '@material-ui/core/IconButton';
import Snackbar from '@material-ui/core/Snackbar';
import Slide from '@material-ui/core/Slide';
import useAuthentication from '../../hooks/useAuthentication';
// import { createNewQuote, deleteQuote, getQuotesByUserId } from '../../services/quotes';
import { ContentWrapper, ListItemText } from './styles';

const MyQuotes = () => {
  const quoteRef = React.useRef(null);
  const [quotes, setQuotes] = React.useState([]);
  const [snackbar, setSnackbar] = React.useState({ message: '', open: false });
  const { user } = useAuthentication();

  React.useEffect(() => {
    // TODO: implementar
  }, [user.uid]);

  const handleOnSubmit = async (event) => {
    event.preventDefault();

    if (!quoteRef.current.value) return;

    // TODO: implementar
    const success = false;
    const message = 'Implementar criacao de quote';

    setSnackbar({
      open: true,
      message,
    });

    if (success) {
      quoteRef.current.value = '';
      quoteRef.current.focus();
    }
  };

  const handleDelete = async (quoteId) => {
    // TODO: implementar
    const message = 'Implementar metodo para deletar';

    setSnackbar({
      open: true,
      message,
    });
  };

  const handleSnackbarClose = () => {
    setSnackbar({ message: '', open: false });
  };

  return (
    <ContentWrapper>
      <form onSubmit={handleOnSubmit}>
        <TextField
          placeholder="Write your fantastic quote here..."
          variant="outlined"
          inputRef={quoteRef}
        />
      </form>

      {quotes.length > 0 && (
        <List>
          {quotes.map((quote, quoteIndex) => (
            <ListItem key={quote.id} divider={quoteIndex < quotes.length - 1}>
              <ListItemText
                classes={{ secondary: 'secondary--text' }}
                primary={quote.text}
                secondary={
                  quote.likes > 0 ? (
                    <>
                      <FavoriteIcon fontSize="small" />
                      <span>{`${quote.likes} ${quote.likes === 1 ? 'like' : 'likes'}`}</span>
                    </>
                  ) : null
                }
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDelete(quote.id)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      )}
      <Snackbar
        autoHideDuration={5000}
        TransitionComponent={(props) => <Slide {...props} direction="down" />}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        open={snackbar.open}
        onClose={handleSnackbarClose}
        message={snackbar.message}
      />
    </ContentWrapper>
  );
};

export default MyQuotes;
