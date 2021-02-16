import React from 'react'
import AReview from './AReview.js'
import styles from '../styles/styles.module.css'

// main stateful component for organizing reviews 
class Reviews extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reviews: [
        {
          "rating": 0.8,
          "publish_date": "2016-09-05T23:25:47.642350Z",
          "id": "9783221620868",
          "body": "The fool doth think he is wise, but the wise man knows himself to be a fool.",
          "author": "Kaley Schiller"
        },
        {
          "rating": 3.2,
          "publish_date": "2016-09-04T23:25:47.642388Z",
          "id": "9793364045824",
          "body": "Can one desire too much of a good thing?.",
          "author": "Fay Lemke"
        },
        {
          "rating": 4.1,
          "publish_date": "2016-09-03T23:25:47.642545Z",
          "id": "9784620626604",
          "body": "How bitter a thing it is to look into happiness through another man's eyes!",
          "author": "Tatyana Olson"
        }
    ]
    };
  }

  
    render() {
      return (
      <div className={styles.Reviews}>
        {this.state.reviews.map((data) => {
          return <AReview key={data.id} data={data} />
        })}
      </div>
    );
  }
};

export default Reviews;