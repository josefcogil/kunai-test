import { Form, Row, Col } from 'react-bootstrap';

const TableItem = ({ item }) => (
  <tr>
    <td></td>
    <td></td>
    <td></td>
    <td></td>
    <td>
      <Row>
        <Col>
          <Form.Check
            inline
            label="Si"
            name="active"
            checked={null}
            type="radio"
          />
        </Col>
        <Col>
          <Form.Check
            inline
            label="No"
            name="active"
            checked={null}
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
