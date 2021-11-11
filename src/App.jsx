import { Container, Card, Row, Col } from 'react-bootstrap';
import DocumentForm from './components/DocumentForm';
import DocumentTable from './components/DocumentTable';

const App = () => {
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
              <DocumentTable />
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default App;
