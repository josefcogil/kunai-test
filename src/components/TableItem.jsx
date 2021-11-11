import { Form, Row, Col } from 'react-bootstrap';

const TableItem = ({ item }) => (
  <tr>
    <td>{item.id}</td>
    <td>{item.type}</td>
    <td>{item.name}</td>
    <td>{item.description}</td>
    <td>
      <Row>
        <Col>
          <Form.Check
            inline
            label="Si"
            disabled
            checked={item.active ? true : false}
            type="radio"
          />
        </Col>
        <Col>
          <Form.Check
            inline
            label="No"
            disabled
            checked={item.active ? false : true}
            type="radio"
          />
        </Col>
      </Row>
    </td>
    <td>
      <Row>
        <Col>
          <i
            className="fa fa-eye fa-sm text-secondary"
            style={{ cursor: 'pointer' }}
          ></i>
        </Col>
        <Col>
          <i
            className="fa fa-pencil fa-sm text-primary"
            style={{ cursor: 'pointer' }}
          ></i>
        </Col>
        <Col>
          <i
            className="fa fa-trash fa-sm text-danger"
            style={{ cursor: 'pointer' }}
          ></i>
        </Col>
      </Row>
    </td>
  </tr>
);

export default TableItem;
