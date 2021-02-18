import React from 'react'
import AReview from './AReview.js'
import styles from '../styles/reviewStyles.module.css'

// main stateful component for organizing reviews 
class Reviews extends React.Component {
  constructor(props) {
    super(props);
    
    let destruct = props.props;
    let avg = 0;
    let count = 0;
    let reviews = [];
    for(let i in destruct) {
      avg += destruct[i].rating;
      reviews.push(destruct[i]);
      count += 1;
    }
    avg = (avg/count).toFixed(1);

    this.state = {
      reviews: reviews,
      sortingOrder: 'newest',
      average: String(avg)
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
          <div id={styles.avgContainer}>
            <h5 id={styles.avgRating}>Average Rating: </h5>
            <h1 id={styles.average}>{this.state.average}</h1>
          </div>

          <div className={styles.Reviews}>
          <div id={styles.sortingOrder}>
            <label>Order </label>
            <select value={this.state.sortingOrder} onChange={this.orderReviews.bind(this)}>
              <option value='newest'>Newest to Oldest</option>
              <option value='oldest'>Oldest to Newest</option>
              <option value='highest'>Highest to Lowest</option>
              <option value='lowest'>Lowest to Highest</option>
            </select>
          </div>
            {this.state.reviews.map((data) => {
              return <AReview key={data.id} data={data} />
            })}
          </div>
        </div>
    );
  }
};

export default Reviews;