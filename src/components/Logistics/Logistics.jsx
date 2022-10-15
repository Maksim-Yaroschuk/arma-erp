import { Form, Label } from 'components/GlobalStyle';
import readXlsxFile from 'read-excel-file';

export const Logistics = () => {
  const handleFiles = e => {
    const file = e.target.files[0];
    console.log(file);
    readXlsxFile(file).then((rows) => {
      console.log(rows);
    });
    return file;
  };

  return (
    <div>
      <h3>Розділ логістика</h3>

      <Form>
        <Label>
          Оберіть файл для імпорту
          <input type="file" onChange={handleFiles}></input>
        </Label>
      </Form>
    </div>
  );
};
