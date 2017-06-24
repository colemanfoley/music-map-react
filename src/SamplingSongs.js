import React, { Component } from 'react';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import YouTube from 'react-youtube';
import './App.css';

class SamplingSongs extends Component {

  render() {
    const { songs } = this.props;

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <div>
        <ListGroup>
          <ListGroupItem>
          </ListGroupItem
        </ListGroup>
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  }
}

export default SamplingSongs;
