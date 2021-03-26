import React,{useState} from 'react'
import Star from './Star';

const Stars = ({disable,initialStars}) => {
    const numberOfStars = [1, 2, 3, 4, 5];
    const [rating, setRating] = useState(0);
    const [hoverState, setHoverState] = useState(initialStars);
    return (
        <React.Fragment>
            {numberOfStars.map((star, index) => {
                if(disable){
                    return <Star starId={index} rating={hoverState}></Star>;
                }else{
                    return <Star
                        key={index}
                        starId={index}
                        rating={hoverState || rating}
                        onMouseEnter={() => setHoverState(index)}
                        onMouseLeave={() => setHoverState(0)}
                        onClick={() => setRating(index)}
                    ></Star>
                }
            }
            )
        }
        </React.Fragment>
    )
}

export default Stars
