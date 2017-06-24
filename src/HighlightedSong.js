import React, { Component } from 'react';
import YouTube from 'react-youtube';
import './App.css';

class HighlightedSong extends Component {

  render() {
    const { videoId } = this.props;

    const opts = {
      height: '390',
      width: '640',
      playerVars: { // https://developers.google.com/youtube/player_parameters
        autoplay: 0
      }
    };

    return (
      <div>
        <YouTube
          videoId={videoId}
          opts={opts}
          onReady={this._onReady}
        />
      </div>
    );
  }

  _onReady(event) {
    // access to player in all event handlers via event.target
    // event.target.pauseVideo();
  }
}

export default HighlightedSong;
