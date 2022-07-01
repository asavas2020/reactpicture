import { useState } from "react"
import data from "./data"
import {Review} from "./Review"
import { FaChevronLeft, FaChevronRight} from "react-icons/fa"


const Reviews = () => {
    const [index, setIndex] = useState(0)
  return (
    <section>
         <Review  
    key = {data[index].id} 
    {...data[index]}
    />
    <div className="btn-container">
        <span className="previous"><FaChevronLeft/></span>
        <span className="next"><FaChevronRight/></span>
        <button onClick={RandomReview}>suprise Me</button>
    </div>
    </section>
   
  )
}

