import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import { GOOGLE_MAPS_API_KEY } from '@env';

const DistancetoDestination = ({ fromLat, fromLng, toLat, toLng }) => {
  const [distance, setDistance] = useState(null);
  const [duration, setDuration] = useState(null);
  const [loading, setLoading] = useState(true);

  const getDistance = async () => {
    try {
      const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${fromLat},${fromLng}&destinations=${toLat},${toLng}&key=${GOOGLE_MAPS_API_KEY}`;
      const response = await fetch(url);
      const data = await response.json();

      const element = data.rows[0].elements[0];

      if (element.status === 'OK') {
        setDistance(element.distance.text);
        setDuration(element.duration.text);
      } else {
        console.warn('Distance Matrix API error:', element.status);
      }
    } catch (error) {
      console.error('Error fetching distance:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getDistance();
  }, []);

  if (loading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="small" color="blue" />
        <Text>Calculating distance...</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>🛣️ Distance: {distance}</Text>
      <Text style={styles.text}>⏱️ Duration: {duration}</Text>
    </View>
  );
};

export default DistancetoDestination;

const styles = StyleSheet.create({
  container: {
    margin: 20,
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#f0f4ff',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
    marginVertical: 5,
    color: '#333',
  },
});
