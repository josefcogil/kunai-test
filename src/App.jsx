import { Container, Card, Row, Col } from 'react-bootstrap';
import DocumentForm from './components/DocumentForm';

const App = () => {
  return (
    <Container className="py-4">
      <Card>
        <Card.Header>
          <h5>Documentación general convocatoria</h5>
        </Card.Header>
        <Card.Body>
          <Row>
            <Col>
              <DocumentForm />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
