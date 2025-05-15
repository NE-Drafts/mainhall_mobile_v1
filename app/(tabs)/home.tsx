// app/index.tsx
import ParkingMap from '@/components/ParkingMap';
import ParkingSpotCard from '@/components/ParkingSportCard';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { mockParkingSpots } from '../data/mockData';

export default function HomeScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 40 }}>
      <Text style={styles.header}>Dashboard</Text>

      {/* Metrics Cards */}
      <View style={styles.metricsRow}>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Available Spots</Text>
          <Text style={styles.cardValue}>
            {
              mockParkingSpots.filter((spot) => spot.availableSpots > 0).length
            }
          </Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.cardLabel}>Total Spots</Text>
          <Text style={styles.cardValue}>{mockParkingSpots.length}</Text>
        </View>
      </View>

      {/* Map Preview */}
      <Text style={styles.sectionTitle}>Nearby Map</Text>
      <View style={styles.mapContainer}>
        <ParkingMap spots={mockParkingSpots} />
      </View>

      {/* Recent Spots */}
      <Text style={styles.sectionTitle}>Recent Spots</Text>
      <View style={styles.spotsContainer}>
        {mockParkingSpots.slice(0, 3).map((spot) => (
          <ParkingSpotCard key={spot.id} spot={spot} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F2F2F7',
    paddingHorizontal: 16,
  },
  header: {
    fontSize: 26,
    fontWeight: '700',
    marginTop: 24,
    marginBottom: 16,
    color: '#1e293b',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 12,
    color: '#334155',
  },
  mapContainer: {
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
  },
  metricsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    gap: 12,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 6,
    shadowOffset: { width: 0, height: 2 },
  },
  cardLabel: {
    fontSize: 14,
    color: '#64748b',
  },
  cardValue: {
    fontSize: 22,
    fontWeight: '700',
    marginTop: 6,
    color: '#1e40af',
  },
  spotsContainer: {
    marginTop: 8,
    gap: 12,
  },
});
