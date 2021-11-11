import { Table } from 'react-bootstrap';
import TableItem from './TableItem';

const DocumentTable = ({ items }) => {
  let key = 0;

  return (
    <>
      <Table striped bordered hover className="mt-3">
        <thead className="text-center">
          <tr>
            {/*<th>No.</th>*/}
            <th>Tipo de documento</th>
            <th>Nombre</th>
            <th>Descripción</th>
            <th>¿Activo?</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <TableItem key={key++} item={item} />
          ))}
        </tbody>
      </Table>
    </>
  );
};

export default DocumentTable;
