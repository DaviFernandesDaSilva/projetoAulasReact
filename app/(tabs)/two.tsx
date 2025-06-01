import { StyleSheet, FlatList, Touchable, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { router } from 'expo-router';

import { listaAulas } from '../data/aulas';

import globalStyles from '@/styles/globalStyles';

export default function TabTwoScreen() {
  return (
    <View style={globalStyles.container}>
      <FlatList
      data={
        listaAulas
      }
      renderItem={({ item }) => (
        <TouchableOpacity style={globalStyles.item} onPress={() => router.push({ pathname: '../aulas/[idAula]', params: { idAula: item.id } })}>
          <View style={globalStyles.data}>
            <Text style={globalStyles.dataDia}>{item.dia}</Text>
            <Text style={globalStyles.dataMes}>{item.mes}</Text>
          </View>
          <Text style={globalStyles.itemTitle}>{item.titulo}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}