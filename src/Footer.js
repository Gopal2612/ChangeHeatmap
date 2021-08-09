import React from 'react'

function Footer({data}) {
    console.log(data)
    return (
        <div>
            <h2>{`showing ${data.count} changes occured on ${data.date}`}</h2>
            {data.changes.length>0?
            <ol>
                {data.changes.map(elem => <li key={elem.productId}>{elem.description}</li>)}
            </ol>:<p>{`${data.count} changes on ${data.date}`}</p>
        }
        </div>
    )
}

export default Footer
