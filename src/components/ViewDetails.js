import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
const ViewDetails = ({distance, time, cost}) => {
  return (
    <View style={styles.containerData}>
      <View style={styles.containerDistance}>
        <Text style={styles.txtLabel}>Distance</Text>
        <Text style={styles.txtDistance}>{distance.toFixed(2)} Km</Text>
      </View>
      <View style={styles.containerCostTime}>
        <View style={styles.containerCost}>
          <Text style={styles.txtLabel}>Cost</Text>
          <Text style={styles.txtTime}>{cost.toFixed(2)}</Text>
        </View>
        <View style={styles.containerTime}>
          <Text style={styles.txtLabel}>Time</Text>
          <Text style={styles.txtTime}>{time.toFixed(2)} min</Text>
        </View>
      </View>
      <View style={styles.containerStart}>
        <TouchableOpacity style={styles.btnStart}>
          <Text style={styles.txtStart}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerData: {
    flex: 2,
    justifyContent: 'center',
    backgroundColor: '#ffffff',
    paddingVertical: 33,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderWidth: 2,
    borderColor: '#ffffff',
  },
  containerDistance: {
    flex: 1,
    alignSelf: 'center',
    borderRadius: 12,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginVertical: 22,
  },
  containerCostTime: {
    flex: 1,
    width: '80%',
    flexDirection: 'row',
    alignSelf: 'center',
    marginVertical: 22,
  },
  containerCost: {
    flex: 1,

    borderRadius: 12,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  containerTime: {
    flex: 1,
    borderRadius: 12,
    borderColor: 'gray',
    borderWidth: 1,
    width: '80%',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  containerStart: {flex: 1, ginVertical: 22},
  txtLabel: {textAlign: 'center', color: 'black'},
  txtTime: {
    textAlign: 'center',
    color: 'black',
    fontWeight: 'bold',
    fontSize: 20,
  },
  txtStart: {fontWeight: 'bold', fontSize: 18, color: 'white'},
  btnStart: {
    alignItems: 'center',
    backgroundColor: '#00b69f',
    padding: 10,
    width: '80%',
    alignSelf: 'center',
    borderRadius: 12,
  },
  txtDistance: {
    textAlign: 'center',
    color: '#0175ff',
    fontWeight: 'bold',
    fontSize: 22,
  },
});
export default ViewDetails;
