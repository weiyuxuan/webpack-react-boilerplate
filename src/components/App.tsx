import React from 'react'
import logo from '@assets/logo.svg'
import { REACT_SITE_URL } from '@constants/common'

import styles from './app.m.scss'

const App = () => {
  return (
    <div className={styles.app}>
      <header className={styles.appHeader}>
        <img src={logo} className={styles.appLogo} alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className={styles.appLink}
          href={REACT_SITE_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  )
}

export default App
