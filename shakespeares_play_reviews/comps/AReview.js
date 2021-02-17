import styles from '../styles/reviewStyles.module.css'
import Stars from './Stars.js'
import React, { useState } from 'react'

// formats individual reviews 
const AReview = ({data}) => {


  // convert date in yyyy-mm-ddt to month d, yyyy
  let formatDate = (input) => {
    let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July',
                  'August', 'September', 'October', 'November', 'December'];
    let year = input.slice(0,4);
    let month = months[input.slice(6,7) - 1];
    let day = input.slice(9, 10);
    return `${month} ${day}, ${year}`;
  };
  
  // highlight on hover
  const [highlight, toggle] = useState('AReview');


  return (
    <div className = {styles[highlight]} 
      onMouseEnter = {() => toggle('AReviewHighlight')}
      onMouseLeave = {() => toggle('AReview')} 
    >
      <strong>{data.author}</strong>
      <br/>
      <br/>
      <strong> {data.rating} </strong>
      <Stars rating={data.rating}/>
      <p>{formatDate(data.publish_date)}</p>
      <p>{data.body}</p>
    </div>
  );
};

export default AReview;