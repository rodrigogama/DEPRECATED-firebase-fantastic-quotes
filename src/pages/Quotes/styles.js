import styled from 'styled-components';
import MaterialListItemText from '@material-ui/core/ListItemText';

export const ContentWrapper = styled.div``;

export const ListItemText = styled(MaterialListItemText)`
  & .secondary--text {
    padding-top: 8px;
    font-size: 12px;
    display: flex;
    align-items: center;

    & span {
      padding-top: 2px;
      padding-left: 8px;
    }
  }
`;
