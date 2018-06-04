import React from 'react';
import TweetWall from './TweetWall';

import { getTweets }from '../lib/mockAPI';

class App extends React.Component {

  constructor() {
    super();

    this.state = {
      latestTweets: []
    };
  }

<<<<<<< HEAD
  componentWillMount() {
    this.fetchTweets()
  }
  
  componentDidMount() {
    this.startInterval()
  }
  
  componentWillUnmount() {
    this.cleanUpInterval()
  }
=======
  componentWillMount(nextProps) {
    this.fetchTweets()
    setState({
      tweets: nextProps.newTweets
    })
  }
  // TODO: componentDidMount()
  // TODO: componentWillUnmount()
>>>>>>> 91af157dc412ce6d4f6f8fcf1222a6755830f3d3

  startInterval = () => {
    this.interval = setInterval(this.fetchTweets, 2000);
  }

  cleanUpInterval = () => clearInterval(this.interval);

  fetchTweets = () => {
    const newTweets = getTweets();
    this.setState({
      latestTweets: newTweets
    });
  }

  render() {
    return (
      <div>
        <TweetWall newTweets={this.state.latestTweets} />
      </div>
    )
  }
}

export default App;
