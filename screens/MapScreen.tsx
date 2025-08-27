import { gql } from '@apollo/client';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapView from 'react-native-maps';

const GET_RECREATION_AREAS = gql`
  query GetRecreationAreas {
    recreationAreas {
      recreation_area_id
      recreation_area_name
      recreation_area_latitude
      recreation_area_longitude
    }
  }
`;

const MapScreen: React.FC = () => {
  // const { data, loading, error } = useQuery(GET_RECREATION_AREAS);

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
        {/* {data.recreationAreas.map((area: any) => (
          <Marker
            key={area.recreation_area_id}
            coordinate={{
              latitude: area.recreation_area_latitude,
              longitude: area.recreation_area_longitude,
            }}
            title={area.recreation_area_name}
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
