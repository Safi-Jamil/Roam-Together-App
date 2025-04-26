import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';

const OfferedCarpoolScreen = ({ navigation, route }) => {
  const { origin, destination, distance } = route.params || {};

  return (
    <View style={styles.container}>
      {/* Top Bar */}
      <View style={styles.topBar}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Icon name="arrow-back" size={28} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Offered Carpool</Text>
      </View>

      {/* Carpool Info Box */}
      <View style={styles.infoBox}>
        <Text style={styles.label}>From:</Text>
        <Text style={styles.value}>{origin?.address || 'N/A'}</Text>

        <Text style={styles.label}>To:</Text>
        <Text style={styles.value}>{destination?.address || 'N/A'}</Text>

        <Text style={styles.label}>Distance:</Text>
        <Text style={styles.value}>{distance || 'Calculating...'}</Text>
      </View>
    </View>
  );
};

export default OfferedCarpoolScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingTop: 5,
  },
  topBar: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 15,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoBox: {
    margin: 20,
    padding: 20,
    backgroundColor: '#f5f5f5',
    borderRadius: 15,
    elevation: 3,
  },
  label: {
    fontWeight: 'bold',
    fontSize: 16,
    marginTop: 10,
  },
  value: {
    fontSize: 16,
    color: '#333',
  },
});
