import { Container, Card, Row, Col } from 'react-bootstrap';
import DocumentForm from './components/DocumentForm';
import DocumentTable from './components/DocumentTable';
import { useState } from 'react';

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

  return (
    <Container className="py-4">
      <Card>
        <Card.Header>
          <h5>
            <b>Documentación general convocatoria</b>
          </h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <DocumentForm />
            </Col>
          </Row>
          <Row>
            <Col>
              <Card.Subtitle>
                <h5>Documentación generales asociados</h5>
              </Card.Subtitle>
              <DocumentTable items={items} />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
