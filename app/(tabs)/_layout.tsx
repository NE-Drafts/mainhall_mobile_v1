import { Tabs } from 'expo-router';
import { MapPin, CalendarCheck2, Clock, User } from 'lucide-react-native';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          borderTopWidth: 0,
          elevation: 0,
          shadowOpacity: 0,
          height: 60,
          paddingBottom: 20,
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8E8E93',
        tabBarLabelStyle: {
          fontFamily: 'Poppins-Medium',
          fontSize: 12,
        },
        headerTitleStyle: {
          fontFamily: 'Poppins-SemiBold',
        },
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: 'Find Parking',
          tabBarIcon: ({ color, size }) => <MapPin size={size} />,
        }}
      />
      <Tabs.Screen
        name="booking"
        options={{
          title: 'My Bookings',
          tabBarIcon: ({ color, size }) => <CalendarCheck2 size={size} className='text-blue-500' />,
        }}
      />
      <Tabs.Screen
        name="history"
        options={{
          title: 'History',
          tabBarIcon: ({ color, size }) => <Clock size={size} />,
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: 'Profile',
          tabBarIcon: ({ color, size }) => <User size={size} />,
        }}
      />
    </Tabs>
  );
}