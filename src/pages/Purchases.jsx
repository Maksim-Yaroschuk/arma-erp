import { Message } from 'components/GlobalStyle';
import { Helmet } from 'react-helmet';

export default function Purchases() {
  return (
    <main>
      <Helmet>
        <title>Закупки</title>
      </Helmet>
          <Message>Все що зв’язано з закупівлями</Message>
          <h2>Список можливих пунктів</h2>
          <ul>
              <li>Надходження товарів</li>
              <li>Ціноутворення</li>
              <li>Обробка для замовлення постачальників</li>
          </ul>
    </main>
  );
}