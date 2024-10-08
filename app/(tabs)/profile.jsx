import { View, Text, Button } from 'react-native';
import React from 'react';
import { useAuth } from './../../hooks/AuthContext'; // Import useAuth from AuthContext
import { useRouter } from 'expo-router';

export default function ProfileScreen() {
  const { user, logout } = useAuth(); // Destructure user and logout from the context
  const router = useRouter(); // useRouter for navigation

  const handleLogout = async () => {
    await logout(); // Call the logout function
    router.push('/login'); // Redirect to login screen after logging out
  };

  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text style={{
        fontFamily: 'montserrat',
        fontSize: 40
      }}>
        Profile Screen
      </Text>

      {user && (
        <Text style={{
          fontFamily: 'montserrat-medium',
          fontSize: 20,
          marginVertical: 10
        }}>
          Welcome, {user.email}!
        </Text>
      )}

      <Button title="Logout" onPress={handleLogout} />
    </View>
  );
}
