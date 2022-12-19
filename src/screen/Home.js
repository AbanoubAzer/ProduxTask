import React, {useState} from 'react';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import Map from '../components/Map';
import GoogleAutoComplete from '../components/GoogleAutoComplete';
import ViewDetails from '../components/ViewDetails';

const HomeScreen = () => {
  const [origin, setOrigin] = useState({});
  const [destination, setDestination] = useState({});
  const [time, setTime] = useState(0);
  const [cost, setCost] = useState(0);
  const [distance, setDistance] = useState(0);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.containerMap}>
        <GoogleAutoComplete
          placeholder="Origin"
          onPress={(data, details = null) => {
            setOrigin({
              location: details?.geometry.location,
              description: data.description,
            });
          }}
        />
        <GoogleAutoComplete
          placeholder="Destination"
          onPress={(data, details = null) => {
            setDestination({
              location: details?.geometry.location,
              description: data.description,
            });
          }}
        />

        <Map
          origin={origin}
          destination={destination}
          setDistance={setDistance}
          setTime={setTime}
          setCost={setCost}
        />
      </View>
      <ViewDetails distance={distance} time={time} cost={cost} />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
  },
  containerMap: {flex: 3},
});
export default HomeScreen;
