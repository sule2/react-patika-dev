import React from 'react'

function Header({ number,data }) {
    console.log(Header.name + " comp re-rendered");
  return (
    <div>Header - {number} <br/>
    <code style={{padding:"2rem"}}>
        {JSON.stringify(data)}
    </code>
    </div>
    
  )
}

export default React.memo(Header) 