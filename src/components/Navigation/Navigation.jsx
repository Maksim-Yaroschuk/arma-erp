import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from 'redux/auth/selectors';
import { NavigationLink } from 'components/GlobalStyle';

export const Navigation = () => {
  const isLogIn = useSelector(selectIsLoggedIn);
  return (
    <nav>
      <NavigationLink to="/" end>
        Home
      </NavigationLink>
      <NavigationLink to="/reference-books">Довідники</NavigationLink>
      <NavigationLink to="/sales">Продажі</NavigationLink>
      <NavigationLink to="/purchases">Закупки</NavigationLink>
      <NavigationLink to="/reports">Звіти</NavigationLink>
      <NavigationLink to="/service">Сервіс</NavigationLink>
      {isLogIn && (
        <NavigationLink to="/contacts">
          Contacts
        </NavigationLink>
      )}
    </nav>
  );
};
