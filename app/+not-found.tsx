import { Link, Stack } from 'expo-router';
import { StyleSheet } from 'react-native';

import { Text, View } from '@/components/Themed';

import globalStyles from '@/styles/globalStyles';

export default function NotFoundScreen() {
  return (
    <>
      <Stack.Screen options={{ title: 'Oops!' }} />
      <View style={globalStyles.container}>
        <Text style={globalStyles.mainTitle}>Essa tela não existe</Text>

        <Link href="/" style={globalStyles.link}>
          <Text style={globalStyles.linkText}>Volte para a tela inicial!</Text>
        </Link>
      </View>
    </>
  );
}