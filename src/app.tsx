import React from "react";
import { Layout } from "src/components/Layout";

import './styles/base.css';
import './styles/variables.css';


type iProps = {}

const App = ({}: iProps) => {
    return (
        <Layout>
            <p>Hello world!</p>
        </Layout>
    );
};

export { App }