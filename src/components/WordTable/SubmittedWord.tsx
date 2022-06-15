import React from "react"

interface iProps {
    word: string,
}

const SubmittedWord = ({word}: iProps): JSX.Element => {
  return (
    <div>
    {
        Array.from(word).map( (i, index) => {
            return <span key={index}>{i}</span>
        })
    }
    </div>
  )
};

export { SubmittedWord }
