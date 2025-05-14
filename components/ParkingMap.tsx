import React, { useState } from 'react';
import { View, StyleSheet, Dimensions, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Image } from 'react-native';
import { MapPin, Car, DollarSign, Menu, X } from 'lucide-react-native';

interface ParkingSpot {
  id: string;
  name: string;
  address: string;
  image: string;
  availableSpots: number;
  price: number;
}

interface ParkingMapProps {
  spots: ParkingSpot[];
}

export default function ParkingMap({ spots }: ParkingMapProps) {
  const [selectedSpot, setSelectedSpot] = useState<ParkingSpot | null>(null);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleSpotSelect = (spot: ParkingSpot) => {
    setSelectedSpot(spot);
    setMenuOpen(false);
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity 
          style={styles.menuButton} 
          onPress={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <X size={24} color="#333" /> : <Menu size={24} color="#333" />}
        </TouchableOpacity>
        <Text style={styles.title}>Find Parking</Text>
      </View>

      <View style={styles.mapContainer}>
        <Image
          source={{ uri: 'https://images.pexels.com/photos/4318822/pexels-photo-4318822.jpeg' }}
          style={styles.map}
        />
        
        {/* Map markers for parking spots */}
        {spots.map((spot) => (
          <TouchableOpacity
            key={spot.id}
            style={[
              styles.marker,
              selectedSpot?.id === spot.id && styles.selectedMarker
            ]}
            onPress={() => handleSpotSelect(spot)}
          >
            <MapPin size={24} color={spot.availableSpots > 0 ? "#2563eb" : "#dc2626"} />
            <View style={styles.markerBadge}>
              <Text style={styles.markerBadgeText}>{spot.availableSpots}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>

      {/* Side menu for spots list */}
      {menuOpen && (
        <ScrollView style={styles.sideMenu}>
          <Text style={styles.sideMenuTitle}>Available Parking</Text>
          {spots.map((spot) => (
            <TouchableOpacity
              key={spot.id}
              style={[
                styles.spotItem,
                selectedSpot?.id === spot.id && styles.selectedSpotItem
              ]}
              onPress={() => handleSpotSelect(spot)}
            >
              <Image source={{ uri: spot.image }} style={styles.spotImage} />
              <View style={styles.spotInfo}>
                <Text style={styles.spotName}>{spot.name}</Text>
                <Text style={styles.spotAddress}>{spot.address}</Text>
                <View style={styles.spotDetails}>
                  <View style={styles.spotDetail}>
                    <Car size={16} color="#666" />
                    <Text style={styles.spotDetailText}>{spot.availableSpots} spots</Text>
                  </View>
                  <View style={styles.spotDetail}>
                    <DollarSign size={16} color="#666" />
                    <Text style={styles.spotDetailText}>${spot.price}/hr</Text>
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      )}

      {/* Info panel for selected spot */}
      {selectedSpot && (
        <View style={styles.infoPanel}>
          <Image source={{ uri: selectedSpot.image }} style={styles.infoPanelImage} />
          <View style={styles.infoPanelContent}>
            <Text style={styles.infoPanelName}>{selectedSpot.name}</Text>
            <Text style={styles.infoPanelAddress}>{selectedSpot.address}</Text>
            <View style={styles.infoPanelDetails}>
              <View style={styles.infoPanelDetail}>
                <Car size={18} color="#666" />
                <Text style={styles.infoPanelDetailText}>
                  {selectedSpot.availableSpots} spots available
                </Text>
              </View>
              <View style={styles.infoPanelDetail}>
                <DollarSign size={18} color="#666" />
                <Text style={styles.infoPanelDetailText}>
                  ${selectedSpot.price}/hour
                </Text>
              </View>
            </View>
            <TouchableOpacity style={styles.bookButton}>
              <Text style={styles.bookButtonText}>Book Now</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={styles.closeButton}
            onPress={() => setSelectedSpot(null)}
          >
            <X size={20} color="#fff" />
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}

const { width, height } = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height * 0.8,
    position: 'relative',
    backgroundColor: '#f8fafc',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
    zIndex: 10,
  },
  menuButton: {
    padding: 8,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 16,
    color: '#334155',
  },
  mapContainer: {
    flex: 1,
    position: 'relative',
  },
  map: {
    width: '100%',
    height: '100%',
  },
  marker: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    // Random positions for demonstration - in a real app, these would be calculated based on GPS coordinates
    left: '30%',
    top: '40%',
  },
  selectedMarker: {
    transform: [{ scale: 1.2 }],
  },
  markerBadge: {
    position: 'absolute',
    backgroundColor: '#fff',
    borderRadius: 10,
    width: 20,
    height: 20,
    alignItems: 'center',
    justifyContent: 'center',
    right: -5,
    top: -5,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  markerBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#334155',
  },
  sideMenu: {
    position: 'absolute',
    top: 64,
    left: 0,
    width: width * 0.8,
    height: height * 0.8 - 64,
    backgroundColor: '#fff',
    borderRightWidth: 1,
    borderRightColor: '#e2e8f0',
    zIndex: 20,
    paddingVertical: 16,
  },
  sideMenuTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 16,
    paddingHorizontal: 16,
    color: '#334155',
  },
  spotItem: {
    flexDirection: 'row',
    padding: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#e2e8f0',
  },
  selectedSpotItem: {
    backgroundColor: '#f1f5f9',
  },
  spotImage: {
    width: 60,
    height: 60,
    borderRadius: 8,
  },
  spotInfo: {
    marginLeft: 12,
    flex: 1,
  },
  spotName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#334155',
  },
  spotAddress: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  spotDetails: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  spotDetail: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spotDetailText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#64748b',
  },
  infoPanel: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: -2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    flexDirection: 'row',
  },
  infoPanelImage: {
    width: 80,
    height: 80,
    borderRadius: 8,
  },
  infoPanelContent: {
    flex: 1,
    marginLeft: 16,
  },
  infoPanelName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#334155',
  },
  infoPanelAddress: {
    fontSize: 14,
    color: '#64748b',
    marginBottom: 8,
  },
  infoPanelDetails: {
    flexDirection: 'row',
    marginBottom: 12,
  },
  infoPanelDetail: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 16,
  },
  infoPanelDetailText: {
    marginLeft: 4,
    fontSize: 14,
    color: '#64748b',
  },
  bookButton: {
    backgroundColor: '#2563eb',
    paddingVertical: 8,
    paddingHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  bookButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  closeButton: {
    position: 'absolute',
    top: 12,
    right: 12,
    backgroundColor: 'rgba(0,0,0,0.5)',
    width: 30,
    height: 30,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});