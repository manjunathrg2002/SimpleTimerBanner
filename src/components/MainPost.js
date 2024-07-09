import React from "react"; // Importing React library
import { Card } from "react-bootstrap"; // Importing Card component from react-bootstrap
import Table from "react-bootstrap/Table"; // Importing Table component from react-bootstrap

const MainPost = () => {
  return (
    <Card style={{ backgroundColor: "#f7f7f9", borderRadius: "1rem" }}>
      <Card.Body>
        <div style={{ fontWeight: "600", padding: "2px" }}>
          Review Your Order
        </div>
        <div style={{ padding: "5px" }}>
          the following items have been added to your shopping cart.
        </div>
        <Table bordered style={{ borderRadius: "10px", overflow: "hidden" }}>
          <thead>
            <tr>
              <th>#</th>
              <th>Product Description</th>
              <th>Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td style={{ color: "#3399FF", fontWeight: "700" }}>
                Microsoft 62-193 Premium Bundle
              </td>
              <td style={{ fontWeight: "700" }}>$49.49</td>
              <td style={{ display: "flex", justifyContent: "center" }}>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#f7f7f9", color: "black" }}
                >
                  Remove
                </a>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td style={{ color: "#3399FF", fontWeight: "700" }}>
                Microsoft 92-183 Normal Bundle
              </td>
              <td style={{ fontWeight: "700" }}>$59.59</td>
              <td style={{ display: "flex", justifyContent: "center" }}>
                <a
                  href="#"
                  className="btn btn-primary"
                  style={{ backgroundColor: "#f7f7f9", color: "black" }}
                >
                  Remove
                </a>
              </td>
            </tr>
          </tbody>
        </Table>
      </Card.Body>
    </Card>
  );
};

export default MainPost; // Exporting MainPost component as default
