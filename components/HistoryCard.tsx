import { View, Text, StyleSheet } from 'react-native';
import { Calendar, Clock, MapPin } from 'lucide-react-native';

interface HistoryCardProps {
    history: {
        id: string;
        parkingName: string;
        price: number;
        address: string;
        date: string;
        duration: string;
    }
}
export default function HistoryCard({ history }: HistoryCardProps ) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.parkingName}>{history.parkingName}</Text>
                <Text style={styles.price}>${history.price}</Text>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <MapPin size={20} />
                    <Text style={styles.infoText}>{history.address}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Calendar size={20} />
                    <Text style={styles.infoText}>{history.date}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Clock size={20} />
                    <Text style={styles.infoText}>{history.duration}</Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        borderRadius: 12,
        padding: 16,
        marginBottom: 16,
        elevation: 2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    parkingName: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    price: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    infoContainer: {
        gap: 8,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoText: {
        marginLeft: 8,
        color: '#666',
    },
});