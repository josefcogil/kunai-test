import { Table } from 'react-bootstrap';
import TableItem from './TableItem';

const DocumentTable = (props) => {
  const { items, statusChange, enableView, enableEdit } = props;

  const view = (id) => {
    let item = items.filter((item) => item.id === id);
    enableView(item[0]);
  };

  const edit = (id) => {
    let item = items.filter((item) => item.id === id);
    enableEdit(item[0]);
  };

  return (
    <>
      <Table striped bordered hover className="mt-3">
        <thead className="text-center">
          <tr>
            {<th>No.</th>}
            <th>Tipo de documento</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>¿Activo?</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <TableItem
              key={item.id}
              item={item}
              statusChange={statusChange}
              view={view}
              edit={edit}
            />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default DocumentTable;
