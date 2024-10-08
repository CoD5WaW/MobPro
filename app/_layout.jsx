import { Stack } from 'expo-router';
import { useFonts } from "expo-font";

import { AuthProvider } from './../hooks/AuthContext';

export default function RootLayout() {
  useFonts({
    'montserrat':require('./../assets/fonts/Montserrat-Regular.ttf'),
    'montserrat-bold':require('./../assets/fonts/Montserrat-Bold.ttf'),
    'montserrat-medium':require('./../assets/fonts/Montserrat-Medium.ttf')
  })
  return (
    <AuthProvider>
      <Stack screenOptions={{
        headerShown: false
      }}>
        <Stack.Screen name="login" />
        <Stack.Screen name="signup" />
        <Stack.Screen name="(tabs)" />
      </Stack>
    </AuthProvider>
  );
}
