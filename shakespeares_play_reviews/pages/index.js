import sampleData from '../test/sampleData.json'
import api from '../api.js'

import Reviews from '../comps/Reviews'

// Home page, will render Reviews component to _app.js
const Home = (props) => {
  return (
    <Reviews props={props}/>
  )
}
// Get initial props from api
Home.getInitialProps = async () => {
  var myHeaders = new Headers();
  myHeaders.append("x-api-key", api.token);
  
  var requestOptions = {
    method: 'GET',
    headers: myHeaders,
    redirect: 'follow'
  };
  
  let res = await fetch(api.address, requestOptions)
  let data = await res.json();
  return data; 
}

/* Uncomment for testing
// Fetch sample data for jest testing
Home.getInitialProps = () => {
  return sampleData;
}
*/

export default Home;