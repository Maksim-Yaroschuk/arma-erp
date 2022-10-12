import { Message } from 'components/GlobalStyle';
import { Helmet } from 'react-helmet';

export default function Reports() {
  return (
    <main>
      <Helmet>
        <title>Звіти</title>
      </Helmet>
          <Message>Звіти різного роду</Message>
          <h2>Список можливих пунктів</h2>
          <ul>
              <li>Звіти з продажу</li>
              <li>План-фактний аналіз</li>
              <li>Звіти по закупівлям</li>
              <li>Аналіз дебіторської та кредиторської заборгованості</li>
              <li>Залишки</li>
          </ul>
    </main>
  );
}