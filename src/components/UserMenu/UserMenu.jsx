import { useDispatch, useSelector } from 'react-redux';
import { authSelectors } from 'redux/auth/authSelectors';
import { Button } from 'components/Button/Button';
import { userLogout } from 'redux/auth/authOperations';
import { UserMenuStyled } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(authSelectors.selectUserEmail);
  const userName = useSelector(authSelectors.selectUserName);

  return (
    <UserMenuStyled>
      <p>{userEmail}</p>
      <Button name="darkMode" onClick={() => dispatch(userLogout(userName))}>
        Logout
      </Button>
    </UserMenuStyled>
  );
};
