import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import styles from './test.module.css';

const App = () => {
  return <p className={styles.main}>Hello world!</p>;
};

const container = document.getElementById('root');
const root = ReactDOM.createRoot(container);

root.render(<App />);
