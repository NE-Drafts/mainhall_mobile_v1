import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { MapPin, Car } from 'lucide-react-native';

interface ParkingSpotCardProps {
    spot: {
        id: string;
        name: string;
        address: string;
        image: string;
        availableSpots: number;
        price: number;
    }
}
export default function ParkingSpotCard({ spot }: ParkingSpotCardProps) {
    return (
        <TouchableOpacity style={styles.container}>
            <Image source={{ uri: spot.image }} style={styles.image} />
            <View style={styles.content}>
                <Text style={styles.name}>{spot.name}</Text>
                <View style={styles.infoRow}>
                    <MapPin size={16} />
                    <Text style={styles.address}>{spot.address}</Text>
                </View>
                <View style={styles.footer}>
                    <View style={styles.spotsInfo}>
                        <Car size={16} />
                        <Text style={styles.spotsText}>{spot.availableSpots} spots available</Text>
                    </View>
                    <Text style={styles.price}>${spot.price}/hr</Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 12,
        marginBottom: 16,
        overflow: 'hidden',
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    image: {
        width: '100%',
        height: 150,
    },
    content: {
        padding: 16,
    },
    name: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 8,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 12,
    },
    address: {
        marginLeft: 8,
        color: '#666',
        flex: 1,
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    spotsInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    spotsText: {
        marginLeft: 8,
        color: '#007AFF',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007AFF',
    },
});