import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import { useNavigation } from 'expo-router';

import { Text, View } from '@/components/Themed';
import { useEffect } from 'react';

import globalStyles from '../styles/globalStyles';

export default function ModalScreen() {
  const navigation = useNavigation();
  
  useEffect(() => {
    navigation.setOptions({
      title: 'Voltar',
    });
  }, []);
  
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.mainTitle}>Informações</Text>

      <Text style={{ marginTop: 20, textAlign: 'center', paddingHorizontal: 20, fontSize: 16, lineHeight: 24 }}>
        Bem-vindo ao nosso aplicativo de Testes!
        {'\n\n'}
        Utilize a barra de navegação inferior para acessar as principais seções, e toque nas aulas para ver detalhes e conteúdos adicionais. Caso tenha dúvidas ou queira mais informações, este modal estará sempre disponível para consulta.  
        {'\n\n'}
        Obrigado por usar o app!
      </Text>

      <View style={globalStyles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
    </View>
  );
}