import React, {Component} from 'react';
import ReactMapGL from 'react-map-gl';

class WashMap extends Component {

  state = {
    viewport: {
      width: 100 + '%',
      height: 100 + '%',
      latitude: 37.7577,
      longitude: -122.4376,
      zoom: 8
    }

    
  };

  render() {
    return (
      <ReactMapGL
        {...this.state.viewport}
        onViewportChange={(viewport) => this.setState({viewport})}
        mapboxApiAccessToken= "pk.eyJ1IjoicXVhbjAwNSIsImEiOiJjazN0a2N3a2YwM3ViM2twdzhkbGphMTZzIn0.OepqB_mymhr1YLSYwNmRSg"
      />
    );
  }
}

export default WashMap;