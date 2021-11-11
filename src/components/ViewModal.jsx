import { Modal, Row, Col } from 'react-bootstrap';

const ViewModal = ({ setViewModal, item }) => {
  const handleClose = () => {
    setViewModal(false);
  };

  return (
    <Modal show={true} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Información del documento</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Row className="p-2">
          <Col>
            <b>Nombre: </b> {item.name}
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
            <b>Tipo de documento: </b> {item.type}
          </Col>
        </Row>
        <Row className="p-2">
          <Col>
            <b>Descripción: </b> {item.description}
          </Col>
        </Row>
        <Row className="p-5">
          <Col>
            <h4 className="text-center">Vista Previa...</h4>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
};

export default ViewModal;
