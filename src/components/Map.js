import React, {useEffect, useRef} from 'react';
import MapView, {Marker} from 'react-native-maps';
import MapViewDirections from 'react-native-maps-directions';
import GOOGLE_MAPS_APIKEY from '../helper';
import carIcon from '../../assets/car.png';
import {getDistance} from 'geolib';

const Map = ({origin, destination, setCost, setDistance, setTime}) => {
  const mapRef = useRef(null);

  const getTravelDetails = async () => {
    var distance = getDistance(origin.location, destination.location) / 1000;
    const time = distance * 5;
    const cost = distance * 2000;
    setCost(cost);
    setDistance(distance);
    setTime(time);
  };

  useEffect(() => {
    if (!origin || !destination) {
      return;
    }
    mapRef.current?.fitToSuppliedMarkers(['origin', 'destination'], {
      edgePadding: {
        top: 50,
        bottom: 50,
        left: 50,
        right: 50,
      },
      animated: true,
    });
    if (destination?.location) {
      getTravelDetails();
    }
  }, [origin, destination]);

  return (
    <MapView
      style={{flex: 1}}
      ref={mapRef}
      initialRegion={{
        latitude: origin?.location ? origin.location.lat : 30.033333,
        longitude: origin?.location ? origin.location.lng : 31.233334,
        latitudeDelta: 0.05,
        longitudeDelta: 0.05,
      }}>
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination?.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeWidth={5}
          strokeColor="#0175ff"
        />
      )}

      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin?.description}
          identifier="origin"
          image={carIcon}
        />
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination?.description}
          identifier="destination"
          pinColor="#0175ff"
        />
      )}
    </MapView>
  );
};

export default Map;
