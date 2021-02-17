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
      ],
      sortingOrder: 'newest'
    };
  }

  // change the order of reviews with built in quick sort
  orderReviews(e) {
    let arr = this.state.reviews;
    if (e.target.value == 'newest') {
      arr = arr.sort((a, b) => (new Date(a.publish_date) < new Date(b.publish_date)) ? 1 : -1);
    } else if (e.target.value == 'oldest') {
      arr = arr.sort((a, b) => (new Date(a.publish_date) > new Date(b.publish_date)) ? 1 : -1);
    } else if (e.target.value == 'highest') {
      arr = arr.sort((a, b) => (a.rating < b.rating) ? 1 : -1);
    } else if (e.target.value == 'lowest') {
      arr = arr.sort((a, b) => (a.rating > b.rating) ? 1 : -1);
    }
    this.setState({reviews: arr, sortingOrder: e.target.value});
  }
  
    render() {
      return (
        <div>
          <label>Order </label>
          <select value={this.state.sortingOrder} onChange={this.orderReviews.bind(this)}>
            <option value='newest'>Newest to Oldest</option>
            <option value='oldest'>Oldest to Newest</option>
            <option value='highest'>Highest to Lowest</option>
            <option value='lowest'>Lowest to Highest</option>
          </select>
          <div className={styles.Reviews}>
            {this.state.reviews.map((data) => {
              return <AReview key={data.id} data={data} />
            })}
          </div>
        </div>
    );
  }
};

export default Reviews;