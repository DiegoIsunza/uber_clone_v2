import {Text, TextInput, View, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import styles from './styles';
import {GooglePlacesAutocomplete} from 'react-native-google-places-autocomplete';
import {GOOGLE_API_KEY} from '@env';
import PlaceRow from './PlaceRow';
import {useNavigation} from '@react-navigation/native';

const homePlace = {
  description: 'Home',
  geometry: {location: {lat: 48.8152937, lng: 2.4597668}},
};

const workPlace = {
  description: 'Work',
  geometry: {location: {lat: 48.8452937, lng: 2.2997668}},
};

const DestinationSearch = () => {
  const [originPlace, setOriginPlace] = useState(null);
  const [destinationPlace, setDestinationPlace] = useState(null);

  const navigation = useNavigation();

  useEffect(() => {
    if (originPlace && destinationPlace) {
      navigation.navigate('SearchResults', {
        originPlace,
        destinationPlace,
      });
    }
  }, [originPlace, destinationPlace]);

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <GooglePlacesAutocomplete
          placeholder="Where from?"
          onPress={(data, details = null) => {
            setOriginPlace({data, details});
          }}
          suppressDefaultStyles
          currentLocation={true}
          currentLocationLabel="Current Location"
          styles={{
            textInput: styles.textInput,
            container: styles.autocompleteContainer,
            listView: styles.listView,
            separator: styles.separator,
          }}
          fetchDetails
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_API_KEY,
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
          renderDescription={data => data.description || data.vicinity}
          predefinedPlaces={[homePlace, workPlace]}
        />

        <GooglePlacesAutocomplete
          placeholder="Where to?"
          onPress={(data, details = null) => {
            setDestinationPlace({data, details});
          }}
          suppressDefaultStyles
          styles={{
            textInput: styles.textInput,
            container: {...styles.autocompleteContainer, top: 55},
            separator: styles.separator,
          }}
          fetchDetails
          enablePoweredByContainer={false}
          query={{
            key: GOOGLE_API_KEY,
            language: 'en',
          }}
          renderRow={data => <PlaceRow data={data} />}
        />
        {/* Circle near Origin input */}
        <View style={styles.circle} />
        {/* Line between dots */}
        <View style={styles.line} />
        {/* Square near Destination input */}
        <View style={styles.square} />
      </View>
    </SafeAreaView>
  );
};

export default DestinationSearch;
