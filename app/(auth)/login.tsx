import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Login</Text>

            <TextInput placeholder="Email" style={styles.input} placeholderTextColor="#aaa" />
            <TextInput placeholder="Password" secureTextEntry style={styles.input} placeholderTextColor="#aaa" />

            <TouchableOpacity style={styles.button} onPress={() => router.push('/(tabs)/dashboard')}>
                <Text style={styles.buttonText}>SIGN IN</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
                <Text style={styles.link}>Don't have an account? Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#3B0CA5',
        padding: 24,
        justifyContent: 'center',
    },
    header: {
        color: '#fff',
        fontSize: 28,
        marginBottom: 32,
        textAlign: 'center',
    },
    input: {
        backgroundColor: '#fff',
        borderRadius: 8,
        padding: 14,
        marginBottom: 16,
    },
    button: {
        backgroundColor: '#9333EA',
        borderRadius: 8,
        padding: 14,
        alignItems: 'center',
        marginTop: 8,
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    link: {
        color: '#ddd',
        textAlign: 'center',
        marginTop: 16,
    },
});
