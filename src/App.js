import React, { Component } from 'react';
import axios from 'axios';
const API_URL = 'https://xbie8fzpf1.execute-api.us-west-1.amazonaws.com/dev';

class App extends Component {
  state = {
    users: []
  }
  componentDidMount() {
    const url = `${API_URL}/customers/`;
    axios.get(url).then(response => response.data)
    .then((data) => {
      this.setState({ users: data })
      console.log(this.state.users)
     })
  }

  render() {

    return (
       <div className="container">
        <div className="col-xs-8">
        <h1>React Axios Example</h1>
        {this.state.users.map((user) => (
          <div key={user.id} className="card">
           <div className="card-body">
               <h5 className="card-title">{user.name}</h5>
            </div>
          </div>
        ))}
        </div>
       </div>
    );
  }
  // [...]
}
export default App;