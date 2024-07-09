import React from "react"; // Importing React library
import { Card } from "react-bootstrap"; // Importing Card component from react-bootstrap

function SidePost() {
  return (
    <div>
      {/* Card component for Satisfaction Guaranteed */}
      <Card style={{ backgroundColor: "#eaffea", height: "280px" }}>
        <Card.Body style={{ padding: "1.5rem" }}>
          <Card.Title style={{ display: "flex", alignItems: "center" }}>
            <img
              src="./correct.png"
              height="40"
              alt=""
              loading="lazy"
              style={{ marginRight: "1rem" }} // Added margin for spacing
            />
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div
                style={{ color: "green", fontFamily: "'Nunito', sans-serif" }}
              >
                Satisfaction Guaranteed
              </div>
              <div style={{ fontFamily: "'Nunito', sans-serif" }}>
                98.4% Pass Rate
              </div>
            </div>
          </Card.Title>
          <div>
            Our team works hard to provide students with high exam practice test
            questions and compelling learning experiences. We're confident of
            the quality level of the products we offer and provide no hassle
            satisfaction guarantee.
          </div>
        </Card.Body>
      </Card>

      {/* Card component for Why Choose Exam-Labs */}
      <Card style={{ height: "280px", marginTop: "1rem" }}>
        <Card.Body style={{ padding: "1.5rem" }}>
          <Card.Title
            style={{
              display: "flex",
              alignItems: "center",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <div>Why Choose Exam-Labs?</div>
            <div>
              Over <span style={{ color: "green" }}>503,150</span>
            </div>
          </Card.Title>
          <div>
            Our team works hard to provide students with high exam practice test
            questions and compelling learning experiences. We're confident of
            the quality level of the products we offer and provide no hassle
            satisfaction guarantee.
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default SidePost;
