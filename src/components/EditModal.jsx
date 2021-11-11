import { Modal, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { useState } from 'react';

const EditModal = ({ setEditModal, updateItem, items, setItems }) => {
  const [itemInfo, setItemInfo] = useState(updateItem);
  const [error, setError] = useState({ error: false, message: '' });

  const handleClose = () => {
    setEditModal(false);
  };

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

    console.log(updateItem);

    let update = items.map((item) =>
      item.id !== updateItem.id ? item : { ...item, ...itemInfo }
    );
    setItems(update);
    setEditModal(false);
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
      <Modal show={true} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Información del documento</Modal.Title>
        </Modal.Header>
        <Modal.Body>
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
            </Row>

            <Row>
              <Col style={{ textAlign: 'right' }}>
                <Button
                  variant="primary"
                  type="submit"
                  size="md"
                  onClick={handleSubmit}
                >
                  Guardar
                </Button>
              </Col>
            </Row>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default EditModal;
