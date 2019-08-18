import { hot } from "react-hot-loader";
import React, { Component } from "react";

import styles from "./App.css";

class App extends Component {
  static defaultProps = {};

  state = {
    value: "",
    loading: false,
    response: null
  };

  handleChange = event => {
    this.setState({ value: event.target.value });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { value } = this.state;
    this.setState({ loading: true });

    fetch("http://localhost:9001/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ value })
    })
      .then(response => {
        return response.json();
      })
      .then(myJson => {
        this.setState({ response: JSON.stringify(myJson), loading: false });
      });
  };

  render() {
    const { value, loading, response } = this.state;
    console.log(response);
    return (
      <main className={styles.main}>
        <header className={styles.header}>
          <h1>Compara tehnica</h1>
        </header>
        <div className={styles.underline} />
        <div className={styles.formContainer}>
          {loading ? (
            <p>Loadin...</p>
          ) : (
            <form method="post" onSubmit={this.handleSubmit}>
              <input
                type="text"
                name="search"
                value={value}
                onChange={this.handleChange}
              />
              <button type="submit" value="onSubmit">
                Button
              </button>
            </form>
          )}
        </div>
      </main>
    );
  }
}

export default hot(module)(App);
