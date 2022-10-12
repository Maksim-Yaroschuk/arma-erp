import { Message, NavigationLink } from 'components/GlobalStyle';
import { Helmet } from 'react-helmet';
import { Outlet } from 'react-router-dom';

export default function Sales() {
  return (
    <main>
      <Helmet>
        <title>Продажі</title>
      </Helmet>
      <NavigationLink to="logistics">Логістика</NavigationLink>
      <Message>Все що зв’язано з продажами</Message>
      <Outlet />
    </main>
  );
}
