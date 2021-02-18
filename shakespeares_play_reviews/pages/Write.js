import styles from '../styles/write.module.css'
import React from 'react'

// Would handle new review submissions 
class Write extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      rating: '',
      body: ''
    };
  }

  inputHandler(e) {
    this.setState({[e.target.id]: e.target.value});
  }

  // post request to db
  submit() {
    let tempRating = this.state.rating;
    tempRating = (tempRating < 0) ? 0 : tempRating;
    tempRating = (tempRating > 5) ? 5 : tempRating;
    let review = {
      rating: tempRating,
      body: this.state.body,
      author: this.state.name
    };
    const publish_date = (new Date(Date.now()).toISOString());
    review.publish_date = publish_date;
    // add date and id to review
    console.log('This is where an api post request would go.');
    window.alert(`Your data was recorded as: ${review.author}, ${review.rating}, ${review.publish_date}, \
${review.body}.  However, we are not currently taking more reviews.  Sorry for the inconvenience.`);
    this.setState({name: '', rating: '', body: ''});
  }

  render() {
    return (
      <div className={styles.container}>
        <label>Name: </label>
        <input id='name' value={this.state.name} onChange={this.inputHandler.bind(this)}></input>
        <br/>
        <label>Rating: </label>
        <input id='rating' type='number' min='0' max='5.0' step='.1'
          value={this.state.rating} onChange={this.inputHandler.bind(this)}>
         </input>
        <br/>
        <label>Review: </label>
        <form>
          <textarea id='body' className={styles.body}
           value={this.state.body} onChange={this.inputHandler.bind(this)}>
           </textarea>
        </form>
        <button onClick={this.submit.bind(this)}>Submit</button>
      </div>
    )
  }
};

export default Write;