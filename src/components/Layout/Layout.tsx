import React, { useEffect } from "react";
import { getRandomWord } from "src/utils";

type iProps = {
    children: JSX.Element[]
}

const Layout = ({children}: iProps) => {
    
    useEffect( () => {
        const word = getRandomWord();
        console.log(word);
    }, [])

    return <div>{children}</div>;
};

export { Layout }