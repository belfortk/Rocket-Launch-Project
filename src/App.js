import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import RocketCardComponent from "./RocketCardComponent";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      launches: []
    };

    this.sortByName = this.sortByName.bind(this);
    this.sortByNumAgency = this.sortByNumAgency.bind(this);
  }

  componentWillMount() {
    axios
      .get("https://launchlibrary.net/1.2/rocket?mode=verbose")
      .then(res => this.setState({ launches: res.data.rockets }));
  }

  sortByName() {
    var copy = this.state.launches;

    copy.sort(function(a, b) {
      var aUpper = a.name.toUpperCase();
      var bUpper = b.name.toUpperCase();
      if (aUpper < bUpper) {
        return -1;
      }
      if (aUpper > bUpper) {
        return 1;
      }
      return 0;
    });

    this.setState({
      launches: copy
    });
  }

  sortByNumAgency() {
    var copy = this.state.launches;

    copy.sort(function(a, b) {
      var aUpper = a.family.agencies.toUpperCase();
      var bUpper = b.family.agencies.toUpperCase();
      if (aUpper < bUpper) {
        return -1;
      }
      if (aUpper > bUpper) {
        return 1;
      }
      return 0;
    });

    this.setState({
      launches: copy
    });
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img id="svg" src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Rocket Launches</h1>
        </header>

        <div id="sortSection">
          <div class="btn-group">
            <button 
              type="button"
              class="btn btn-primary sort-button"
            onClick = { this.sortByName } >
              Sort by Name
            </button>
            <button 
              type="button"
              class="btn btn-primary sort-button"
            onClick = { this.sortByNumAgency } >
              Sort by Num of Agencies
            </button>
          </div>
        </div>

        <div className="container card-columns">
          {this.state.launches.map(launch => (
            <RocketCardComponent
              config={launch.configuration}
              image={launch.imageURL}
              id={launch.id}
              name={launch.name}
              wikiURL={launch.wikiURL}
              defaultPad={launch.defaultPads}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
