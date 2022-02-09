import React, { Component } from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import '../App.css';
import DisplayImages from './DisplayImages.js';

class SearchBox extends Component {

  constructor() {
    super();
    this.state = {
      items: [],
      value: ''
    };

    this.handleChange = this.handleChange.bind(this);
  }

  fetchResults(props) {
    console.log(this.state.value);
    fetch(`https://api.giphy.com/v1/gifs/search?api_key=0d05b586e3ff4884b6dc9837d9601726&limit=20&offset=0&rating=G&lang=fr&q=` + this.state.value)
      .then(result => result.json())
      .then(res => {
        this.setState({ items: res.data })
      }
      )
  }


  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  render() {

    return (
      <div className="parent">

        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="2">

            </Col>
            <Col md="auto">


              <div className="input-group">
                <input type="text" placeholder="Search Here" id="search" value={this.state.value} onChange={this.handleChange} className="form-input text-center" />

                <Button
                  type="submit"
                  value="Submit"
                  onClick={() => { this.fetchResults(this.state.searchQuery) }}
                  variant="outline-success"
                  className="form-button"
                >
                  Submit
         </Button>
              </div>
            </Col>
            <Col xs lg="2">
            </Col>
          </Row>
        </Container>

        <br></br>

        <DisplayImages items={this.state.items} />


      </div>
    );
  }
}

export default SearchBox;