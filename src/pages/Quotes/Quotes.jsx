/* eslint-disable react/jsx-wrap-multilines */
import React from 'react';
import Grid from '@material-ui/core/Grid';
import Blockquote from '../../components/Blockquote';
import useAuthentication from '../../hooks/useAuthentication';
// import { getAllQuotes, getQuoteLikes, likeQuote } from '../../services/quotes';
import { ContentWrapper } from './styles';

const Quotes = () => {
  const [quotes, setQuotes] = React.useState([]);
  const { user } = useAuthentication();

  React.useEffect(() => {
    // TODO: implementar
  }, [user.uid]);

  const handleLikeClick = async (quoteId) => {
    // TODO: implementar
  };

  return (
    <ContentWrapper>
      <Grid container spacing={3}>
        {quotes.map((quote) => (
          <Grid item key={quote.id}>
            <Blockquote data={quote} onClickLike={() => handleLikeClick(quote.id)} />
          </Grid>
        ))}
      </Grid>
    </ContentWrapper>
  );
};

export default Quotes;
