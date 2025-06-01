import { SafeAreaView, StyleSheet, Text, ScrollView, View } from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import { listaAulas } from '../data/aulas';
import { useEffect } from 'react';

import globalStyles from '@/styles/globalStyles';

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
      <SafeAreaView style={globalStyles.container}>
        <Text style={globalStyles.errorText}>Aula não encontrada 😢</Text>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={globalStyles.container}>
      <View style={globalStyles.header}>
        <Text style={globalStyles.mainTitle}>{aula.titulo}</Text>
      </View>
      <ScrollView contentContainerStyle={globalStyles.contentContainer}>
        <Text style={globalStyles.conteudo}>{aula.conteudo}</Text>
      </ScrollView>
    </SafeAreaView>
  );
}