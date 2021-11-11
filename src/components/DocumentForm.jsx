import { Form, Button, Row, Col } from 'react-bootstrap';

const DocumentForm = () => {
  return (
    <>
      <Form>
        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Nombre</Form.Label>
              <Form.Control type="text" />
            </Form.Group>
          </Col>
          <Col>
            <Form.Label>Tipo de documento</Form.Label>
            <Form.Select aria-label="Default select example" className="mb-3">
              <option>Seleccione el tipo de documento...</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Col>
        </Row>

        <Row>
          <Col>
            <Form.Group className="mb-3">
              <Form.Label>Descripción</Form.Label>
              <Form.Control as="textarea" rows={1} />
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
            <Button variant="primary" type="submit" size="md">
              Agregar
            </Button>
          </Col>
        </Row>
      </Form>
    </>
  );
};

export default DocumentForm;
