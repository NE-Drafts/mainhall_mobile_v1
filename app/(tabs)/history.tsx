import { View, StyleSheet, ScrollView } from 'react-native';
import HistoryCard from '@/components/HistoryCard';
import { mockHistory } from '../data/mockData'; 

export default function HistoryScreen() {
    return (
        <ScrollView style={styles.container}>
            {mockHistory.map((item) => (
                <HistoryCard key={item.id} history={item} />
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