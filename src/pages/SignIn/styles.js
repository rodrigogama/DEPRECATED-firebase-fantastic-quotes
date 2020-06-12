import styled from 'styled-components';
import MaterialCard from '@material-ui/core/Card';
import MaterialCardContent from '@material-ui/core/CardContent';
import MaterialTextField from '@material-ui/core/TextField';

export const PageWrapper = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
`;

export const PageContent = styled.div`
  width: 100%;
  max-width: 1140px;
  margin: auto;
`;

export const Card = styled(MaterialCard)`
  margin: 0 auto;
  max-width: 400px;
  min-height: 414px;
`;

export const CardContent = styled(MaterialCardContent)`
  & form {
    display: flex;
    flex-direction: column;
  }

  & h1 {
    font-size: 24px;
    text-align: center;
    padding: 12px 0 36px;
    color: ${({ theme }) => theme.palette.primary.main};
  }

  & button {
    margin: 12px 0 24px;
  }

  & a {
    text-align: center;
    display: block;
    color: ${({ theme }) => theme.palette.secondary.main};
  }
`;

export const TextField = styled(MaterialTextField)`
  margin-bottom: 24px;
`;
