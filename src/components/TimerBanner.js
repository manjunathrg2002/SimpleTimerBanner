// TimerBanner.js

import React, { useEffect, useState } from "react"; // Importing React library and necessary hooks
import { Card } from "react-bootstrap"; // Importing Card component from react-bootstrap

const TimerBanner = () => {
  const [timer, setTimer] = useState(60 * 60); // State for timer (1 hour in seconds)
  const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768); // State to track desktop view

  // Effect to update isDesktop state on window resize
  useEffect(() => {
    const handleResize = () => setIsDesktop(window.innerWidth >= 768);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Effect to update timer every second
  useEffect(() => {
    const countdown = setInterval(() => {
      setTimer((prevTimer) => prevTimer - 1);
    }, 1000);

    return () => clearInterval(countdown);
  }, []);

  // Function to format remaining time into hours, minutes, and seconds
  const formatTime = (time) => {
    const hours = Math.floor(time / 3600);
    const minutes = Math.floor((time % 3600) / 60);
    const seconds = time % 60;
    return `${hours.toString().padStart(2, "0")}:${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <>
      {isDesktop ? (
        // Desktop view banner
        <div>
          <h2 style={{ fontWeight: "700" }}>Secure One-Step Checkout</h2>
          <h3 style={{ color: "#2B8AEB" }}>
            Your Product Will Become Available Immediately After Purchase
          </h3>
          <div
            className="banner"
            style={{
              backgroundColor: "#FFA500",
              padding: ".5rem",
              borderRadius: "5rem",
              display: "flex",
              alignItems: "center",
            }}
          >
            <img
              src="./chronometer.png"
              height="40"
              alt=""
              loading="lazy"
              style={{ marginRight: "1rem" }}
            />
            <a
              href="https://www.exam-labs.com/checkout"
              className="banner-link"
              style={{
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                flexWrap: "nowrap",
                width: "100%",
              }}
            >
              <p
                className="offer-text"
                style={{
                  fontWeight: "550",
                  fontSize: "20px",
                  margin: "0 1rem 0 0",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                LIMITED TIME OFFER!
              </p>
              <div
                className="timer"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  margin: "0 1rem",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                <span
                  style={{
                    fontWeight: "400",
                    marginRight: "0.5rem",
                    fontSize: "20px",
                  }}
                >
                  Ends In:
                </span>
                {formatTime(timer)}
              </div>
              <p
                className="offer-text"
                style={{
                  fontWeight: "600",
                  fontSize: "20px",
                  margin: "0 1rem 0 1rem",
                  fontFamily: "'Nunito', sans-serif",
                }}
              >
                GET 10% OFF!
                <span style={{ fontWeight: "400", marginLeft: "1rem" }}>
                  Use Code:
                </span>
                EXAMSTART
              </p>
            </a>
          </div>
        </div>
      ) : (
        // Mobile view banner
        <div>
          <h4 style={{ color: "#2B8AEB" }}>
            Your Product Will Become Available Immediately After Purchase
          </h4>
          <Card style={{ backgroundColor: "#FAD5A5", height: "180px", border: "2px solid #FFBF00" }}>
            <Card.Body>
              <Card.Title style={{ display: "flex", justifyContent: "center", flexDirection: "column" }}>
                <div style={{ display: "flex", flexDirection: "row", justifyContent: "center" }}>
                  <img
                    src="./chronometer.png"
                    height="40"
                    alt=""
                    loading="lazy"
                    style={{ marginRight: "1rem" }}
                  />
                  <div style={{ fontFamily: "'Nunito', sans-serif", fontWeight: "600" }}>
                    Limited Time Offer
                    <hr />
                  </div>
                </div>
                <div
                  className="timer"
                  style={{
                    fontWeight: "600",
                    fontSize: "20px",
                    margin: "0 1rem",
                    fontFamily: "'Nunito', sans-serif",
                    display: "flex",
                    justifyContent: "center"
                  }}
                >
                  <span
                    style={{
                      fontWeight: "400",
                      marginRight: "0.5rem",
                      fontSize: "20px",
                    }}
                  >
                    Ends in:
                  </span>
                  {formatTime(timer)}
                </div>
              </Card.Title>
              <p
                className="offer-text"
                style={{
                  fontWeight: "600",
                  fontSize: "17px",
                  fontFamily: "'Nunito', sans-serif",
                  margin: 0,
                  textAlign: "center",
                  width: "110%",
                  marginLeft: "-1rem",
                  backgroundColor: "#FFBF00",
                  padding: "5px"
                }}
              >
                GET 10% OFF!
                <span style={{ fontWeight: "400" }}>
                  Use Code:
                </span>
                EXAMSTART
              </p>
            </Card.Body>
          </Card>
        </div>
      )}
    </>
  );
};

export default TimerBanner;
