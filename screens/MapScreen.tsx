import { gql } from '@apollo/client';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

const GET_CAMPSITES = gql`
  query GetCampsites {
    campsites {
      CampsiteID
      CampsiteName
      CampsiteLatitude
      CampsiteLongitude
    }
  }
`;

const MapScreen: React.FC = () => {
  // const { data, loading, error } = useQuery(GET_CAMPSITES);

  // if (loading) return <View style={styles.container}><Text>Loading...</Text></View>;
  // if (error) return <View style={styles.container}><Text>Error loading campsites</Text></View>;

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 47.6061,
          longitude: -122.3328,
          latitudeDelta: 10,
          longitudeDelta: 10,
        }}
      >
        {/* {data.campsites.map((site: any) => (
          <Marker
            key={site.CampsiteID}
            coordinate={{
              latitude: site.CampsiteLatitude,
              longitude: site.CampsiteLongitude,
            }}
            title={site.CampsiteName}
          />
        ))} */}
      </MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1 },
  map: { flex: 1 },
});

export default MapScreen;
