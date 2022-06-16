import React, { useEffect } from "react";
import { getRandomWord } from "src/utils";
import styles from './layout.module.css';


type iProps = {
    children: JSX.Element[]
}

const Layout = ({children}: iProps) => {
    return <div className={styles.main}>{children}</div>;
};

export { Layout }