import { Form, Label } from 'components/GlobalStyle';
import { useState } from 'react';
import readXlsxFile from 'read-excel-file';

export const Logistics = () => {
  const [head, setHead] = useState([]);
  const [data, setData] = useState([]);
  const handleFiles = e => {
    const file = e.target.files[0];
    // console.log(file);
    readXlsxFile(file).then(rows => {
      // console.log(rows);
      setHead(rows[0]);
      setData(rows.slice(1));
    });
  };

  console.log(data);

  return (
    <div>
      <h3>Розділ логістика</h3>

      <Form>
        <Label>
          Оберіть файл для імпорту
          <input type="file" onChange={handleFiles}></input>
        </Label>
      </Form>

      {head.length && (
        <table border="2" bordercolor="black">
          <caption>Продажі</caption>
          <thead>
            <tr>
              {head.map(row => {
                return <td>{row}</td>;
              })}
            </tr>
          </thead>
          <tbody>
            {data.map(rows => {
              return (
                <tr>
                  {rows.map(row => {
                    return <td>{row}</td>;
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      )}
    </div>
  );
};
