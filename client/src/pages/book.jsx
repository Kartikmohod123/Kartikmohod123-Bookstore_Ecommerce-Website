import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import "../css/book.css"
const BooksPage = () => {
  const payment = () => {
    window.location.href = 'https://rzp.io/i/A5I10xmb';
  };

  return (
    <Container className="py-4">
      <Row>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQxeSOkelobm9VLY3W6HG86cgdc0j0HjqFBw&s" />
            <Card.Body>
              <Card.Title>THE CALCULATING STARS</Card.Title>
              <Card.Text>
                BY: MARY ROBINATE KOWAL
              </Card.Text>
              <Button variant="primary" onClick={payment}>Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/A1eIQStYUHL._AC_UF1000,1000_QL80_.jpg" />
            <Card.Body>
              <Card.Title>THE BIG BOOK OF SCIENCE FICTION</Card.Title>
              <Card.Text>
                BY: ANNE VARENDEER
              </Card.Text>
              <Button variant="primary" onClick={payment}>Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61PnKAhuoaL._AC_UF1000,1000_QL80_.jpg" />
            <Card.Body>
              <Card.Title>THE MOTIVATIONAL BOOK</Card.Title>
              <Card.Text>
              BY: DIRGH RAVAL
              </Card.Text>
              <Button variant="primary" onClick={payment}>Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/517MT5F7NOL.jpg" />
            <Card.Body>
              <Card.Title>MOTIVATIONAL QUOTES BOOK</Card.Title>
              <Card.Text>
                BY: MARY ROBINATE KOWAL
              </Card.Text>
              <Button variant="primary" onClick={payment}>Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTFDHaDas_btianXw-cPRf-6tnONNxGPPn4_A&s" />
            <Card.Body>
              <Card.Title>THE NON FICTINAL BOOK</Card.Title>
              <Card.Text>
                BY: ANN & JEFF VANDERMEER
              </Card.Text>
              <Button variant="primary" onClick={payment}>Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/51GcCcx0WHL._AC_UF1000,1000_QL80_.jpg" />
            <Card.Body>
              <Card.Title>THE 100 BEST NON FICTION BOOK</Card.Title>
              <Card.Text>
            BY: AVINASH & DIRGH RAVAL
              </Card.Text>
              <Button variant="primary" onClick={payment}>Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61e05dJiEqL._AC_UF350,350_QL80_.jpg" />
            <Card.Body>
              <Card.Title>BENJAMIN FRANKLIN AUTOBIOGRAPHY</Card.Title>
              <Card.Text>
                BY: BENJAMIN FRANKLIN
              </Card.Text>
              <Button variant="primary" onClick={payment}>Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card className="mb-4">
            <Card.Img variant="top" src="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1560816565i/48855._UX160_.jpg" />
            <Card.Body>
              <Card.Title>THE DIARY OF YOUNG GIRL</Card.Title>
              <Card.Text>
                BY: ELEANCER ROOSTER
              </Card.Text>
              <Button variant="primary" onClick={payment}>Buy Now</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default BooksPage;