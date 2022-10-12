import { Message } from 'components/GlobalStyle';
import { Helmet } from 'react-helmet';

export default function ReferenceBooks() {
  return (
    <main>
      <Helmet>
        <title>Довідники</title>
      </Helmet>
          <Message>Тут буде зібрана інформація про всі довідники системи</Message>
          <h2>Список можливих довідників</h2>
          <ul>
              <li>Організації</li>
              <li>Контрагенти</li>
              <li>Номенклатура</li>
          </ul>
    </main>
  );
}