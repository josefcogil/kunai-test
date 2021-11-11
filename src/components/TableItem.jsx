import { Form, Row, Col } from 'react-bootstrap';

const TableItem = (props) => {
  const { item, statusChange, view, edit } = props;

  return (
    <>
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
                checked={item.active ? true : false}
                onChange={() => statusChange(item.id, true)}
                type="radio"
              />
            </Col>
            <Col>
              <Form.Check
                inline
                label="No"
                checked={item.active ? false : true}
                onChange={() => statusChange(item.id, false)}
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
                onClick={() => view(item.id)}
              >
                v
              </i>
            </Col>
            <Col>
              <i
                className="fa fa-pencil fa-sm text-primary"
                style={{ cursor: 'pointer' }}
                onClick={() => edit(item.id)}
              >
                e
              </i>
            </Col>
            <Col>
              <i
                className="fa fa-trash fa-sm text-danger"
                style={{ cursor: 'pointer' }}
              >
                d
              </i>
            </Col>
          </Row>
        </td>
      </tr>
    </>
  );
};

export default TableItem;
