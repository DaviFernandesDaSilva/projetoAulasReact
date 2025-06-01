import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';

import globalStyles from '@/styles/globalStyles';

export default function TabOneScreen() {
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.mainTitle}>Atividade do Curso de React Native</Text>
      <Text style={globalStyles.subtitle}>Bem-vindo ao App de Aulas!</Text>
    </View>
  );
}
