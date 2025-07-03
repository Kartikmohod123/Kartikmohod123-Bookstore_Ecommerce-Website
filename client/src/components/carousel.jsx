import React from 'react';
import { Carousel } from 'react-bootstrap';

const CarouselComponent = () => {
  return (
    <Carousel className="custom-carousel">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.google.com/imgres?q=poetry%20book&imgurl=https%3A%2F%2Fassets.penguinrandomhouse.com%2Fwp-content%2Fuploads%2F2018%2F03%2F08090727%2F1200x628_-Backlist_Poetry.jpg&imgrefurl=https%3A%2F%2Fwww.penguinrandomhouse.com%2Fthe-read-down%2Fbest-books-poetry%2F&docid=IJ-Vv9-QFEJ_8M&tbnid=Lt2iXAvo_qx4xM&vet=12ahUKEwiMhbKUrZSHAxXc2DgGHR5BBOoQM3oECBoQAA..i&w=1200&h=628&hcb=2&ved=2ahUKEwiMhbKUrZSHAxXc2DgGHR5BBOoQM3oECBoQAA"
          alt="Poetry Books"
        />
        <Carousel.Caption>
          <h3>Poetry Books</h3>
          <p>Collections of love, death, grief, and oppression</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Favnishanand-49235.medium.com%2Fwhy-do-i-love-sports-so-much-63c37b519cb5&psig=AOvVaw11Mld2e_N-9lPyuOdLuhbA&ust=1720424123075000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCJj54rm1lIcDFQAAAAAdAAAAABAJ"
          alt="Sport Books"
        />
        <Carousel.Caption>
          <h3>Sport Books</h3>
          <p>There is no more exciting sport than flying, for if you lose, you die.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.google.com/url?sa=i&url=https%3A%2F%2Ftime.com%2F6341840%2Fbest-fiction-books-2023%2F&psig=AOvVaw0junjLDewlajIpdk_2GZSr&ust=1720424234800000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCND-t_O1lIcDFQAAAAAdAAAAABAE"
          alt="Fiction Books"
        />
        <Carousel.Caption>
          <h3>Fiction Books</h3>
          <p>Fiction is the truth inside the lie.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default CarouselComponent;