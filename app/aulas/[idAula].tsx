import { SafeAreaView, StyleSheet, Text, ScrollView, View } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { listaAulas } from '../data/aulas';
import { useEffect } from 'react';

export default function ConteudoAula() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      title: 'Voltar',
    });
  }, []);
  const { idAula } = useLocalSearchParams();
  const aula = listaAulas.find((a) => a.id === idAula);

  if (!aula) {
    return (
      <SafeAreaView style={styles.container}>
        <Text style={styles.errorText}>Aula não encontrada 😢</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>{aula.titulo}</Text>
      </View>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.conteudo}>{aula.conteudo}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    paddingTop: 20,
    paddingHorizontal: 16,
    paddingBottom: 12,
    backgroundColor: '#f0f0f0',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
  },
  contentContainer: {
    padding: 20,
  },
  conteudo: {
    fontSize: 17,
    lineHeight: 26,
    color: '#444',
    textAlign: 'justify',
  },
  errorText: {
    fontSize: 20,
    color: '#a00',
    textAlign: 'center',
    marginTop: 40,
  },
});
