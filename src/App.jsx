import { Container, Card, Row, Col } from 'react-bootstrap';
import DocumentForm from './components/DocumentForm';
import DocumentTable from './components/DocumentTable';
import { useState } from 'react';
import ViewModal from './components/ViewModal';
import EditModal from './components/EditModal';

const App = () => {
  let defaultItems = [
    {
      id: 1,
      name: 'Anexo 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'Anexo',
      active: true,
    },
    {
      id: 2,
      name: 'PDF 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'PDF',
      active: true,
    },
    {
      id: 3,
      name: 'Excel 1',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      type: 'Excel',
      active: false,
    },
  ];

  const [items, setItems] = useState(defaultItems);
  const [viewModal, setViewModal] = useState({ active: false, item: {} });
  const [editModal, setEditModal] = useState({ active: false, item: {} });
  const [editItem, setEditItem] = useState({ active: false, item: {} });

  const statusChange = (id, val) => {
    let update = items.map((item) =>
      item.id !== id ? item : { ...item, active: val }
    );
    setItems(update);
  };

  const enableView = (item) => {
    setViewModal({ active: true, item });
  };

  const enableEdit = (item) => {
    setEditItem({ active: true, item });
    setEditModal({ active: true, item });
  };

  return (
    <Container className="py-4">
      {viewModal.active ? (
        <ViewModal setViewModal={setViewModal} item={viewModal.item} />
      ) : null}

      {editModal.active ? (
        <EditModal
          setEditModal={setEditModal}
          setItems={setItems}
          items={items}
          updateItem={editItem.item}
        />
      ) : null}

      <Card>
        <Card.Header>
          <h5>
            <b>Documentación general convocatoria</b>
          </h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <DocumentForm
                items={items}
                setItems={setItems}
                id={items.length + 1}
              />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Subtitle>
                <h5>Documentación generales asociados</h5>
              </Card.Subtitle>
              <DocumentTable
                items={items}
                statusChange={statusChange}
                enableView={enableView}
                enableEdit={enableEdit}
              />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
