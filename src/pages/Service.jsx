import { Message } from 'components/GlobalStyle';
import { Helmet } from 'react-helmet';

export default function Service() {
  return (
    <main>
      <Helmet>
        <title>Сервіс</title>
      </Helmet>
          <Message>Все що зв’язано з настройками та сервісом</Message>
          <h2>Список можливих пунктів</h2>
          <ul>
              <li>Імпорт та експорт</li>
              <li>Налаштуваання</li>
              <li>Ввід початкових даних</li>
          </ul>
    </main>
  );
}