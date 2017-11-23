import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InstaList from './InstaList.js';


class App extends Component {  

  constructor(props) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          image: "https://instagram.fsgn4-1.fna.fbcdn.net/t51.2885-15/e35/23594930_126440671464105_1598861271686447104_n.jpg",
          caption: "#Fall #celebrations at #home, as we are giving thanks to friends, family, and work accomplishments- and an #abundant life.",
          likes: 25
        },
        {
          id: 2,
          image: "https://instagram.fsgn2-1.fna.fbcdn.net/t51.2885-15/e35/23823326_129759174366632_2789731535362719744_n.jpg",
          caption: "Class is in session. Learning #react #javascript with @coderschoolvn #coding #saigon #vietnam",
          likes: 35

        },
        {
          id: 3,
          image: "https://instagram.fsgn2-1.fna.fbcdn.net/t51.2885-15/e15/10890767_1029453893747020_726936682_n.jpg",
          caption: "Noel qua mất tiêu gòy :3 tình bạn vẫn còn chăng???!!!! :3",
          likes: 8
        }
      ]
    }

  }
    
    toggleTitle = () => {
      const newState = this.state.title ? null : 'Toggled state';
      this.setState({ 
        title : newState 
      }); 
    }


    componentWillMount(){
      const key = 'token';
      console.log('mounted');
      const existingToken = sessionStorage.getItem(key);
      console.log(existingToken);
      const accessToken = window.location.hash.split("=")[1];
      console.log(accessToken);

      const oauthUrl = "https://www.instagram.com/oauth/authorize/?client_id=b3b4aa3d8b314197a58172cef2803fb1&redirect_uri=http://localhost:3000&response_type=token";

      if (!accessToken && !existingToken) {
        window.location.replace(oauthUrl);
      }

      if (accessToken) {
        console.log(`New access token ${accessToken}`);
        sessionStorage.setItem(key, accessToken);
        this.setState({
          token: accessToken
        });  
      }

      if (existingToken) {
        this.setState({
          token: existingToken
        });
      }
    }

    
  render() {
    console.log('App.render'); //semi-colon  colon :  - hyphen / slash  {} curly brackets  [] square bracket () parentheses || vertical straight line
    return (
      <div className="App">
        <header className="App-header">
        <a href="#" onClick={this.toggleTitle}>
          <img src={logo} className="App-logo" alt="logo" />
        </a>
          <h1 className="App-title">{this.state.title || this.props.title}</h1>
        </header>
        <InstaList posts ={this.state.posts}/>  // & ampersand ! exclamation point
      </div>
    );
  }
}

export default App;

