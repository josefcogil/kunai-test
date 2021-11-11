import { Form, Button, Row, Col, Alert } from 'react-bootstrap';
import { useState } from 'react';

const DocumentForm = ({ items, setItems, id }) => {
  let defaultInfo = {
    id,
    name: '',
    type: '',
    description: '',
    active: true,
  };

  const [itemInfo, setItemInfo] = useState(defaultInfo);
  const [error, setError] = useState({ error: false, message: '' });

  const handleChange = (e) => {
    setItemInfo({
      ...itemInfo,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      itemInfo.name === '' ||
      itemInfo.type === '' ||
      itemInfo.description === ''
    ) {
      return setError({
        error: true,
        message: '¡Todos los campos son requeridos!',
      });
    }

    setItems([...items, itemInfo]);
    defaultInfo.id++;
    setItemInfo(defaultInfo);
  };

  return (
    <>
      {error.error ? (
        <Alert
          className="text-center"
          variant="danger"
          onClose={() => setError({ error: false, message: '' })}
          dismissible
        >
          <h6>{error.message}</h6>
        </Alert>
      ) : null}

      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                name="name"
                type="text"
                value={itemInfo.name}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>Tipo de documento</Form.Label>
            <Form.Select
              name="type"
              aria-label="Default select example"
              className="mb-3"
              value={itemInfo.type}
              onChange={handleChange}
            >
              <option value="">Seleccione el tipo de documento...</option>
              <option value="Anexo">Anexo</option>
              <option value="PDF">PDF</option>
              <option value="Excel">Excel</option>
            </Form.Select>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control
                name="description"
                as="textarea"
                rows={1}
                value={itemInfo.description}
                onChange={handleChange}
              />
            </Form.Group>
          </Col>

          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Adjuntar documento</Form.Label>
              <Form.Control type="file" />
            </Form.Group>
          </Col>
        </Row>

        <Row>
          <Col style={{ textAlign: 'right' }}>
            <Button
              variant="primary"
              type="submit"
              size="md"
              onClick={handleSubmit}
            >
              Agregar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default DocumentForm;
