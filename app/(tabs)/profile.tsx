import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Settings, CreditCard, Car, Bell } from 'lucide-react-native';

export default function ProfileScreen() {
    const menuItems = [
        { icon: <Car size={24} />, title: 'My Vehicles' },
        { icon: <CreditCard size={24} />, title: 'Payment Methods' },
        { icon: <Bell size={24} />, title: 'Notifications' },
        { icon: <Settings size={24} />, title: 'Settings' },
    ];

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={{ uri: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg' }}
                    style={styles.avatar}
                />
                <Text style={styles.name}>John Doe</Text>
                <Text style={styles.email}>john.doe@example.com</Text>
            </View>

            <View style={styles.menu}>
                {menuItems.map((item, index) => (
                    <TouchableOpacity key={index} style={styles.menuItem}>
                        {item.icon}
                        <Text style={styles.menuText}>{item.title}</Text>
                    </TouchableOpacity>
                ))}
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F2F2F7',
    },
    header: {
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginBottom: 10,
    },
    name: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#000',
    },
    email: {
        fontSize: 16,
        color: '#666',
        marginTop: 5,
    },
    menu: {
        backgroundColor: 'white',
        marginTop: 20,
        paddingHorizontal: 16,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 16,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#E5E5EA',
    },
    menuText: {
        marginLeft: 16,
        fontSize: 17,
        color: '#000',
    },
});