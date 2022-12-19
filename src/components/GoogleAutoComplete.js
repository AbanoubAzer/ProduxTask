import React from 'react';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import GOOGLE_MAPS_APIKEY from '../helper';

const GoogleAutoComplete = ({placeholder, onPress}) => {
  return (
    <GooglePlacesAutocomplete
      onPress={onPress}
      placeholder={placeholder}
      fetchDetails={true}
      minLength={2}
      query={{key: GOOGLE_MAPS_APIKEY, language: 'en'}}
      debounce={300}
      enablePoweredByContainer={false}
      styles={{
        container: {
          flex: 0,
          margin: 8,
          borderRadius: 5,
        },
        textInput: {
          height: 38,
          color: 'black',
          fontSize: 16,
        },
        description: {
          color: 'black',
        },
      }}
    />
  );
};

export default GoogleAutoComplete;
