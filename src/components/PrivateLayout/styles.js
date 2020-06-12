import styled from 'styled-components';
import MaterialAppBar from '@material-ui/core/AppBar';
import MaterialToolbar from '@material-ui/core/Toolbar';
import MaterialAvatar from '@material-ui/core/Avatar';

export const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 96px 24px 0;
`;

export const PageContent = styled.div`
  width: 100%;
  max-width: 1140px;
`;

export const AppBar = styled(MaterialAppBar)`
  background: ${({ theme }) => theme.palette.background.level1};
`;

export const Toolbar = styled(MaterialToolbar)`
  & svg {
    font-size: 32px;
  }

  & h5 {
    flex: 1;
    padding: 0 12px;
  }
`;

export const Avatar = styled(MaterialAvatar)`
  width: 36px;
  height: 36px;
`;
