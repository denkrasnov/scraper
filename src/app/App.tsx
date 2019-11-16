import { hot } from "react-hot-loader/root";
import React from "react";

import Home from "./pages/Home";
import ProductsProvider from "./services/fetchProducts";

const App = () => (
  <ProductsProvider>
    <Home />
  </ProductsProvider>
);

// TODO: Move the commented logic below to components

// import Box from "../components/Box";
// import styles from "./App.css";
/* class App extends Component {
  static defaultProps = {};

  // state = {
  //   value: "",
  //   loading: false,
  //   response: null
  // };

  // handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   this.setState({ value: e.target.value });
  // };

  // handleSubmit = (e: FormEvent) => {
  //   e.preventDefault();

  //   const { value } = this.state;
  //   this.setState({ loading: true });

  //   fetch("http://localhost:9001/search", {
  //     method: "POST",
  //     headers: {
  //       "Content-Type": "application/json"
  //     },
  //     body: JSON.stringify({ value })
  //   })
  //     .then(response => {
  //       return response.json();
  //     })
  //     .then(myJson => {
  //       this.setState({ response: JSON.stringify(myJson), loading: false });
  //     });
  // };

  render() {
    // const { value, loading, response } = this.state;
    // if (loading) {
    //   return <p>Loading...</p>;
    // }
    return (
      <Home />
      // <main className={styles.main}>
      //   <div className={styles.underline} />
      //   <Box>Heyy</Box>
      //   <div className={styles.formContainer}>
      //     {loading ? (
      //       <p>Loading...</p>
      //     ) : (
      //       <form method="post" onSubmit={this.handleSubmit}>
      //         <input
      //           type="text"
      //           name="search"
      //           value={value}
      //           onChange={this.handleChange}
      //         />
      //         <button type="submit" value="onSubmit">
      //           Button
      //         </button>
      //       </form>
      //     )}
      //   </div>
      // </main>
    );
  }
} */

export default hot(App);
