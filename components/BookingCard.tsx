import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Calendar, Clock } from 'lucide-react-native'

// interface bookingProps {
//     id: string;
//     parkingName: string;
//     price: number;
//     date: string;
//     time: string;
//     status: 'active' | 'completed' | 'cancelled';
// }


export default function BookingCard({ booking }: { booking: any }) {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.parkingName}>{booking.parkingName}</Text>
                <View style={[styles.badge, { backgroundColor: booking.status === 'active' ? '#4CAF50' : '#FF9800' }]}>
                    <Text style={styles.badgeText}>{booking.status}</Text>
                </View>
            </View>

            <View style={styles.infoContainer}>
                <View style={styles.infoRow}>
                    <Calendar size={20} />
                    <Text style={styles.infoText}>{booking.date}</Text>
                </View>
                <View style={styles.infoRow}>
                    <Clock size={20} />
                    <Text style={styles.infoText}>{booking.time}</Text>
                </View>
            </View>

            <View style={styles.footer}>
                <Text style={styles.price}>${booking.price}</Text>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>View Details</Text>
                </TouchableOpacity>
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
    badge: {
        paddingHorizontal: 12,
        paddingVertical: 6,
        borderRadius: 16,
    },
    badgeText: {
        color: 'white',
        fontSize: 12,
        fontWeight: '600',
    },
    infoContainer: {
        marginBottom: 16,
    },
    infoRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 8,
    },
    infoText: {
        marginLeft: 8,
        color: '#666',
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    price: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#007AFF',
    },
    button: {
        backgroundColor: '#007AFF',
        paddingHorizontal: 16,
        paddingVertical: 8,
        borderRadius: 8,
    },
    buttonText: {
        color: 'white',
        fontWeight: '600',
    },
});