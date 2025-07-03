import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Carousel, Container, Row, Col, Card } from 'react-bootstrap';
import '../css/home.css';

const HomePage = () => {
    const [books, setBooks] = useState([]);
    const [carouselItems, setCarouselItems] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:5500/books')
            .then(response => {
                setBooks(response.data);
            })
            .catch(error => console.error('Error fetching books:', error));
        // Mock data for the carousel
        setCarouselItems([
            {
                src: 'https://hips.hearstapps.com/hmg-prod/images/poetry-books-1617290191.jpg?crop=1.00xw:1.00xh;0,0&resize=1200:*',
                caption: 'Poetry Books',
                description: 'Collections of love, death, grief, and oppression'
            },
            {
                src: 'https://ca-times.brightspotcdn.com/dims4/default/2df84ee/2147483647/strip/true/crop/890x615+0+0/resize/1200x829!/format/webp/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ffc%2F3e%2F3f21d11d4144af212743f1ff16dd%2Fbooks.jpg',
                caption: 'Sport Books',
                description: 'There is no more exciting sport than flying, for if you lose, you die.'
            },
            {
                src: 'https://i0.wp.com/thenerddaily.com/wp-content/uploads/2020/12/2021-Anticipated-Fantasy-and-Sci-Fi-Book-Releases.jpg?w=1000&ssl=1',
                caption: 'Fiction Books',
                description: 'Fiction is the truth inside the lie.'
            }
        ]);
    }, []);

    return (
        <div className="home-page">
            
            
            <Carousel>
                {carouselItems.map((item, index) => (
                    <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={item.src}
                            alt={item.caption}
                        />
                        <Carousel.Caption>
                            <h5>{item.caption}</h5>
                            <p>{item.description}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                ))}
            </Carousel>
            <Container>
               
                <Row>
                    {books.map((book, index) => (
                        <Col md={4} key={index} className="mb-4">
                            <Card>
                                <Card.Img variant="top" src={book.imageUrl} />
                                <Card.Body>
                                    <Card.Title>{book.title}</Card.Title>
                                    <Card.Text>{book.description}</Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default HomePage;