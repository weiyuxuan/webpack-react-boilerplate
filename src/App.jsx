import React, { Component } from "react";

import styles from "./app.module.scss";

class App extends Component {
  render() {
    return (
      <div className={styles.app}>
        React Boilerplate for developers that use webpack, babel, mobx, sass, with a hot dev server
        and an optimized production build.
      </div>
    );
  }
}

export default App;
