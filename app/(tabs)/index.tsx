import { View, StyleSheet, ScrollView } from 'react-native';
import ParkingMap from '@/components/ParkingMap';
import ParkingSpotCard from '@/components/ParkingSportCard';
import { mockParkingSpots } from '../data/mockData';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <ParkingMap spots={mockParkingSpots} />
      <ScrollView style={styles.spotsContainer}>
        {mockParkingSpots.map((spot) => (
          <ParkingSpotCard key={spot.id} spot={spot} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
  },
  spotsContainer: {
    flex: 1,
    padding: 16,
  },
});