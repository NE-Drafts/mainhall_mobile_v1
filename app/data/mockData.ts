export const mockParkingSpots = [
    {
      id: '1',
      name: 'Downtown Parking Complex',
      address: '123 Main St, Downtown',
      availableSpots: 45,
      price: 5,
      image: 'https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg',
      coordinates: { latitude: 40.7128, longitude: -74.006 },
    },
    {
      id: '2',
      name: 'Central Station Parking',
      address: '456 Station Square',
      availableSpots: 23,
      price: 8,
      image: 'https://images.pexels.com/photos/1004409/pexels-photo-1004409.jpeg',
      coordinates: { latitude: 40.7589, longitude: -73.9851 },
    },
    {
      id: '3',
      name: 'Shopping Mall Garage',
      address: '789 Mall Avenue',
      availableSpots: 120,
      price: 4,
      image: 'https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg',
      coordinates: { latitude: 40.7549, longitude: -73.9840 },
    },
    {
        id: '4',
        name: 'Shopping Mall Garage',
        address: '789 Mall Avenue',
        availableSpots: 120,
        price: 4,
        image: 'https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg',
        coordinates: { latitude: 40.7549, longitude: -73.9840 },
    },
    {
        id: '5',
        name: 'Shopping Mall Garage',
        address: '789 Mall Avenue',
        availableSpots: 120,
        price: 4,
        image: 'https://images.pexels.com/photos/1756957/pexels-photo-1756957.jpeg',
        coordinates: { latitude: 40.7549, longitude: -73.9840 },
      },
  ];
  
  export const mockBookings = [
    {
      id: '1',
      parkingName: 'Downtown Parking Complex',
      status: 'active',
      date: 'Today',
      time: '2:00 PM - 5:00 PM',
      price: 15,
    },
    {
      id: '2',
      parkingName: 'Central Station Parking',
      status: 'upcoming',
      date: 'Tomorrow',
      time: '9:00 AM - 11:00 AM',
      price: 16,
    },
  ];
  
  export const mockHistory = [
    {
      id: '1',
      parkingName: 'Downtown Parking Complex',
      address: '123 Main St, Downtown',
      date: 'March 15, 2024',
      duration: '3 hours',
      price: 15,
    },
    {
      id: '2',
      parkingName: 'Shopping Mall Garage',
      address: '789 Mall Avenue',
      date: 'March 10, 2024',
      duration: '2 hours',
      price: 8,
    },
  ];