import { useState } from 'react';
import ReactMapGL from 'react-map-gl';


function App() {
  const [viewport, setViewport] = useState({
    width: 400,
    height: 400,
    latitude: 37.7577,
    longitude: -122.4376,
    zoom: 8
  });
    return (
        <ReactMapGL
            initialViewState={{...viewport}}
            MapboxAccessToken={process.env.REACT_APP_MAPBOX}
            onViewportChange={nextViewport => setViewport(nextViewport)}
        />
  );
}

export default App;