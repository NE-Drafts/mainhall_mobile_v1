import { View, StyleSheet, Dimensions, Text } from 'react-native';
import { Image } from 'react-native';

interface ParkingMapProps {
    spots: {
        id: string;
        name: string;
        address: string;
        image: string;
        availableSpots: number;
        price: number;
    }[];
}

export default function ParkingMap({ spots }: ParkingMapProps) {
    return (
        <View style={styles.container}>
            <Text>Landing page with landing Logo</Text>
            <Image
                source={{ uri: 'https://images.pexels.com/photos/4318822/pexels-photo-4318822.jpeg' }}
                style={styles.map}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        height: Dimensions.get('window').height * 0.5,
        margin: 0,
        overflow: 'hidden',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#fff',
    },
    map: {
        width: '100%',
        height: '100%',
    },
});