import styled from 'styled-components';
import MaterialCard from '@material-ui/core/Card';
import MaterialCardContent from '@material-ui/core/CardContent';
import MaterialFavoriteIcon from '@material-ui/icons/Favorite';
import MaterialFormatQuoteIcon from '@material-ui/icons/FormatQuoteRounded';

export const Container = styled.blockquote`
  overflow: hidden;
  border-radius: 17px;
  background-color: ${({ theme }) => theme.palette.secondary.main};
  color: white;
  width: 325px;
  box-shadow: 2px 2px 2px 2px #e0e0e0;
  border-left: none;
  padding: 10px 20px;
  font-size: 17.5px;
`;

export const Card = styled(MaterialCard)`
  min-height: 227px;
  width: 325px;
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.secondary.dark};

  & .author--text {
    flex: 1;
    padding-right: 8px;
  }
`;

export const CardContent = styled(MaterialCardContent)`
  flex: 1;
`;

export const FavoriteIcon = styled(MaterialFavoriteIcon)`
  fill: none;
  stroke: ${({ theme }) => theme.palette.text.primary};
  stroke-width: 2;

  &.selected {
    stroke: none;
    fill: ${({ theme }) => theme.palette.primary.main};
  }
`;

export const FormatQuoteIcon = styled(MaterialFormatQuoteIcon)`
  transform: rotate(180deg);
  margin-bottom: 8px;
`;
