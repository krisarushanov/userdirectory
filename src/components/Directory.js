import React, { Component } from "react";
import Table from "./Table";
import Container from "./Container";
import search from "../api";
import test from "../test.json";
import Jumbotron from "react-bootstrap/Jumbotron";



class Directory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
      results: [],
      filteredResults: []
    };
  }

  loadDirectory = () => {
    search()
      .then(res => {
        return res.data.results ? (this.setState({ results: res.data.results })) : (this.setState({ results: test }))
      })
  };

  componentDidMount() {
    this.loadDirectory();
  }

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    }, () => {
      let latestState = this.state.results;
      let filterList = latestState.filter((item) => {
        var wholeName = item.name.first + item.name.last;
        console.log(this.state.search);
        return wholeName.toLowerCase().includes(this.state.search)
      })
      this.setState({
        filteredResults: filterList
      }, () => {
        console.log(this.state.filteredResults)
      })
    });

  };

  handleFormSubmit = event => {
    event.preventDefault();

  };

  render() {
    return (
        < Container >
         <Jumbotron fluid>
         <h1>USER DIRECTORY</h1>
           <div handleInputChange={this.handleInputChange}
            handleFormSubmit={this.handleFormSubmit} />
            
          <Table 
            results={this.state.search ? this.state.filteredResults : this.state.results}
          />
          </Jumbotron>
        </ Container>

    );
  }
}
export default Directory;