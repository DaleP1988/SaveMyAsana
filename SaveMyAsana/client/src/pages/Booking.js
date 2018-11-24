import React, { Component } from "react";
import { Col, Row, Container } from "../components/Grid";
import InstructorCard from "../components/InstructorCard";
import { Card, Input, Icon, Button, Modal } from "react-materialize";
import background from "../images/floor2.jpg";
import InstructorSchedule from "../components/InstructorSchedule";
import API from "../utils/API";
import { PromiseProvider } from "mongoose";

class Booking extends Component {
  state = {
    Instructor: "Johnny Salke",
    City: "",
    InstructorSchedules: [],
    Day: "",
    Time: "",
    Modal: []
  };

  //when component mounts, get instructor from session storage, load to this.state.instructorSchedule

  componentDidMount() {
    this.getInstructorName();
    this.findSchedules();
  }

  //function to get the instructor name from session storage

  getInstructorName = () => {
    var instructorName = sessionStorage.getItem("key");
    // save the data from the other page
    this.setState({ Instructor: instructorName });
  };

  //function to search with the name

  // findSchedule = () => {
  //   API.getClasses(this.state.Instructor)
  //     .then(res => {
  //       var responseArray =
  //         typeof res.data.response.docs !== "undefined"
  //           ? res.data.response.docs
  //           : [];
  //       if (responseArray) {
  //         classList = responseArray.Classes.class;
  //       }
  //       this.setState({ InstructorSchedules: classList });
  //     })
  //     .catch(err => console.log(err));
  // };

  //method for rendering one instructor schedule div

  // renderInstructorSchedule = () => {
  //   return this.state.InstructorSchedules.map(schedule => (
  //     <InstructorSchedule>
  //       -id={schedule._id}
  //       key={schedule._id}
  //       className = {classList.ClassDescription.SessionType.Name}
  //       level = {classList.ClassDescription.Level.Name}
  //       description = {classList.ClassDescription.Description}
  //       location = {classList.Location.City}
  //       date = {classList.StartDateTime}
  //       time = {classList.StartDateTime}
  //       studio = {classList.Location.City.Name}
  //       spots = {classList.IsAvailable}
  //       cancellation = {classList.IsCanceled}
  //       registration = {classList.ClassDescription.Program.ScheduleType}
  //       address = {classList.Location.Address}
  //     </InstructorSchedule>
  //   ));
  // };
  //not sure if above will return the right result

  //method for getting the date input

  handleDateChange = event => {
    this.setState({ Time: event.target.value });
  };

  //method for getting the time input

  handleTimeInput = event => {
    this.setState({ Day: event.target.value });
  };

  render() {
    return (
      <div>
        <div className="parallax-container">
          <Container>
            <div
              style={{ marginTop: "20px" }}
              id="booking-section"
              className="white responsive"
            >
              <Row>
                <div className="center" id="search-heading">
                  <h2 className="center" id="search-title">
                    <Icon className="medium">event</Icon>
                    CLASS SCHEDULER
                  </h2>
                </div>
              </Row>
              <Row>
                <Col size="6">
                  <InstructorCard />
                </Col>
                <Col size="6">
                  <Card title="Request an Introductory Session">
                    <Row>
                      <div className="input-field col m12">
                        <input
                          placeholder="Date"
                          id="datePick"
                          type="text"
                          class="datepicker"
                          // onChange={props.handleDateChange}
                        />
                        <label for="datePick">Select a date</label>
                      </div>
                    </Row>
                    <Row>
                      <div className="input-field col m12">
                        <input
                          placeholder="Time"
                          id="timePick"
                          type="text"
                          class="timepicker"
                          // onChange={props.handleTimeInput}
                        />
                        <label for="timePick">Select a time</label>
                      </div>
                    </Row>
                    <Modal
                      header="Thanks for booking!"
                      className=" waves-effect waves-light"
                      trigger={
                        <Button
                          className="waves-effect waves-light btn-small"
                          type="submit"
                        >
                          Submit
                        </Button>
                      }
                    >
                      <p>
                        {/* Your request for a session on {props.Day} at{" "}
                        {props.Time} has been submitted. {props.Instructor} will
                        contact you directly. */}
                      </p>
                    </Modal>
                  </Card>
                </Col>
              </Row>
            </div>
          </Container>
          <div className="parallax">
            <img
              className="background-img"
              src={background}
              alt="Unsplashed background img 1"
            />
          </div>
        </div>
        <div className="section-white">
          <Container style={{ height: "400px" }}>
            <h2 className="center">RESULTS</h2>
            <Row>
              <Col size="12">
                <div style={{}} className="" id="booking-results">
                  <InstructorSchedule />
                  {/* <InstructorSchedule /> */}
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    );
  }
}

export default Booking;
