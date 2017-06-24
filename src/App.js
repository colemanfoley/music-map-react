import React, { Component } from 'react';
import { Row, Col } from 'react-bootstrap';
import HighlightedSong from './HighlightedSong.js';
import './App.css';

class App extends Component {

  render() {
    const songs = {
      samples: [
        {
          videoId: "_-3JYuv9w4U"
        }
      ],
      center: {
        videoId: "FEKEjpTzB0Q"
      },
      sampled_by: [
        {
          videoId: "1ro_hFjVcTE"
        }
      ]
    };

    return (
      <div className="App">
        <div className="App-header">
          <h2>Music Map</h2>
        </div>
        <div className="container">
          <Row>
            <Col md={4}>
              <HighlightedSong videoId={songs.center.videoId} />
            </Col>
            <Col md={4}>
              <HighlightedSong videoId={songs.center.videoId} />
            </Col>
            <Col md={4}>
              <HighlightedSong videoId={songs.center.videoId} />
            </Col>
          </Row>
        </div>
      </div>
    );
  }

}

export default App;
