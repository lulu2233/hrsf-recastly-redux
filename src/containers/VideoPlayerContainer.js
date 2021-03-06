import { connect } from 'react-redux';
import VideoPlayer from '../components/VideoPlayer.js';

let mapStateToProps = (state) =>{
  return {
    currentVideo: state.video
  };
};




var VideoPlayerContainer = connect(mapStateToProps, null)(VideoPlayer);

//TODO: define a VideoPlayerContainer component which will hook up your action
//dispatchers with your VideoPlayer component props.

export default VideoPlayerContainer;
