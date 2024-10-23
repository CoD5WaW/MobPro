import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
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
    <View style={styles.container}>
      <Text style={styles.headerText}>Profile</Text>

      {user && (
        <View style={styles.profileSection}>
          <Text style={styles.userName}>Welcome, {user.email}!</Text>
        </View>
      )}

      <View style={styles.menu}>
        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/edit-profile')}>
          <Text style={styles.menuText}>Edit Profile</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => router.push('/settings')}>
          <Text style={styles.menuText}>Settings</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.menuItem, styles.logoutButton]} onPress={handleLogout}>
          <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  headerText: {
    fontSize: 36,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    fontFamily: 'montserrat',
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 40,
  },
  userName: {
    fontSize: 20,
    fontFamily: 'montserrat-medium',
    color: '#333',
  },
  menu: {
    width: '100%',
    alignItems: 'center',
  },
  menuItem: {
    width: '100%',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#DDD',
    alignItems: 'center',
  },
  menuText: {
    fontSize: 18,
    color: '#333',
    fontFamily: 'montserrat',
  },
  logoutButton: {
    marginTop: 40,
    borderBottomWidth: 0,
  },
  logoutText: {
    color: '#FF3B30',
  },
});
