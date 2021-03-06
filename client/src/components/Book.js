import React from "react";
import { ListGroupItem } from "react-bootstrap";
import { Row, Col } from "react-bootstrap";

function Book({ title, subtitle, link, authors, description, Button, image }) {
  return (
    <ListGroupItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{title}</h3>
          {subtitle && <h5 className="font-italic">{subtitle}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a
              className="btn btn-light"
              target="_blank"
              rel="noopener noreferral"
              href={link}
            >
              View
            </a>
            <Button />
          </div>
        </Col>
      </Row>
      <Row>
        <Col size="md-6">
          <p className="font-italic small">Written by {authors}</p>
        </Col>
      </Row>
      <Row>
        <Col size="sm-4 md-2">
          <img
            className="img-thumbnail img-fluid"
            src={image}
            alt={title}
          ></img>
        </Col>
        <Col size="sm-8 md-10">
          <p>{description}</p>
        </Col>
      </Row>
    </ListGroupItem>
  );
}

export default Book;
