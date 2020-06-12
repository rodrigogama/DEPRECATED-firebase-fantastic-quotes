import styled from 'styled-components';
import MaterialListItemText from '@material-ui/core/ListItemText';

export const ContentWrapper = styled.div`
  & form div {
    width: 100%;
  }

  & ul {
    margin-top: 32px;
    background-color: ${({ theme }) => theme.palette.background.level1};
  }
`;

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
