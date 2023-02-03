import React from 'react'

const Question = ({question}) => {
  return (
    <div className='display-ans-container'>
        <div className='display-votes-ans'>
            <p>{question.votes}</p>
            <p>votes</p>

        </div>

    </div>
  )
}

export default Question