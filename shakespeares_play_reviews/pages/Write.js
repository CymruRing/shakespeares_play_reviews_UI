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
    let review = {
      rating: this.state.rating,
      body: this.state.body,
      author: this.state.author
    };
    const publish_date = (new Date(Date.now()).toISOString());
    review.publish_date = publish_date;
    // add date and id to review
    console.log('This is where an api post request would go.');
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