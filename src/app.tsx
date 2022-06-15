import React from "react";
import { Layout } from "src/components/Layout";
import { Navbar } from "src/components/Navbar";
import { Main } from "src/components/Main";

import './styles/base.css';
import './styles/variables.css';


type iProps = {}

const App = ({}: iProps): JSX.Element => {
    return (
        <Layout>
            <Navbar />
            <Main />
        </Layout>
    );
};

export { App }