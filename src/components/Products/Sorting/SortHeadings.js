import React from 'react'

function SortHeadings({title,categories}) {
    return (
        <div>
            <h4 className="text-uppercase">{title}</h4>
            <ul>
                {categories.map(categori=><li key={categori}> {categori}</li>)}
            </ul>
        </div>
        )

}

export default SortHeadings
