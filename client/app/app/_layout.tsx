import { ApolloProvider } from '@apollo/client/react';
import { Stack } from 'expo-router';
import client from '../components/apolloClient';

export default function RootLayout() {
  return (
    <ApolloProvider client={client}>
      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen name="index" />
        <Stack.Screen name="selection" />
        <Stack.Screen name="options" />
        <Stack.Screen name="map" />
      </Stack>
    </ApolloProvider>
  );
}