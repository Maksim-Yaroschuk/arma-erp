import { Form, Label } from 'components/GlobalStyle';
import { scryRenderedComponentsWithType } from 'react-dom/test-utils';
import { useDispatch, useSelector } from 'react-redux';
import readXlsxFile from 'read-excel-file';
import { setFileData } from 'redux/importData/salesSlice';
import { selectData } from 'redux/importData/selectors';

export const Logistics = () => {
  const dispatch = useDispatch();
  const handleFiles = e => {
    dispatch(setFileData(e.target.files[0]));
    // const file = e.target.files[0];
    // console.log(file);
    // readXlsxFile(file).then((rows) => {
    //   console.log(rows);
    // });
    // return file;
  };
  const data = useSelector(selectData);

  return (
    <div>
      <h3>Розділ логістика</h3>

      <Form>
        <Label>
          Оберіть файл для імпорту
          <input type="file" onChange={handleFiles}></input>
        </Label>
      </Form>
      {data && <table>
        <caption>Продажі</caption>
        <thead>
          <tr>
            {data.map(rows => {
              return rows[0].map(row => {
                return <td>{row}</td>;
              });
            })}
          </tr>
        </thead>
      </table>}
    </div>
  );
};
