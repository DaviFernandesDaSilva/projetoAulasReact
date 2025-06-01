import { StyleSheet, FlatList, Touchable, TouchableOpacity } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { router } from 'expo-router';

import { listaAulas } from '../data/aulas';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <FlatList
      data={
        listaAulas
      }
      renderItem={({ item }) => (
        <TouchableOpacity style={styles.item} onPress={() => router.push({ pathname: '../aulas/[idAula]', params: { idAula: item.id } })}>
          <View style={styles.data}>
            <Text style={styles.dataDia}>{item.dia}</Text>
            <Text style={styles.dataMes}>{item.mes}</Text>
          </View>
          <Text style={styles.itemTitle}>{item.titulo}</Text>
        </TouchableOpacity>
      )}
      keyExtractor={(_, index) => index.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#f9f9f9',
  },
  item: {
    flexDirection: 'row',
    padding: 14,
    marginVertical: 6,
    marginHorizontal: 4,
    backgroundColor: '#e0e0e0',
    borderRadius: 12,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 4,
  },
  data: {
    backgroundColor: '#c0c0c0',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 16,
    minWidth: 60,
  },
  dataDia: {
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  dataMes: {
    fontSize: 12,
    color: '',
    fontWeight: '600',
    textTransform: 'capitalize',
    textAlign: 'center',
    marginTop: 2,
  },
  itemTitle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '700',
    color: '#222',
  },
});