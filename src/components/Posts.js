import React from "react"; // Importing React library
import TimerBanner from "./TimerBanner"; // Importing TimerBanner component

import { Container, Row, Col } from "react-bootstrap"; // Importing Container, Row, and Col components from react-bootstrap
import MainPost from "./MainPost"; // Importing MainPost component
import SidePost from "./SidePost"; // Importing SidePost component

const Posts = () => {
  return (
    <Container>
      <Row className="justify-content-between">
        <Col md={12} className="mb-4 mt-4">
          <TimerBanner /> {/* Rendering TimerBanner component */}
        </Col>
        <Col md={8} className="mb-4">
          <MainPost /> {/* Rendering MainPost component */}
        </Col>
        <Col md={4} className="float-right">
          <SidePost /> {/* Rendering SidePost component */}
        </Col>
      </Row>
    </Container>
  );
};

export default Posts; // Exporting Posts component as default
