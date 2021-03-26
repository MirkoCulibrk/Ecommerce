import React from 'react'

class SortHeadings extends React.Component {
    render(){
        return (
            <div>
                <h4 className="text-uppercase">{title}</h4>
                <div onClick={handleOpen} style={open ? { display: 'flex' } : { display: 'none' }}>
                    {categories.map(categori => <li key={categori}> {categori}</li>)}
                </div>
            </div>
        )
    }
    

}

export default SortHeadings
