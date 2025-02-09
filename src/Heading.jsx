import React from 'react'

function Heading({h, p}) {
    return (
      <div className="heading d-flex w-100 justify-content-center">
        <div className="text ">
          <h1>{h}</h1>
          <p className='text-center '>{p}</p>
        </div>
      </div>
    )
  
}

export default Heading