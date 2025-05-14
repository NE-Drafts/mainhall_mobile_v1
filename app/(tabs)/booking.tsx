import { View, StyleSheet, ScrollView } from 'react-native';
import BookingCard from '@/components/BookingCard';
import { mockBookings } from '../data/mockData'; 

export default function BookingsScreen() {
    return (
        <ScrollView style={styles.container}>
            {mockBookings.map((booking) => (
                <BookingCard key={booking.id} booking={booking} />
            ))}
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor: '#F2F2F7',
    },
});