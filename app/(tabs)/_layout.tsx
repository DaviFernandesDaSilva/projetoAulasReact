import React from 'react';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Link, Tabs } from 'expo-router';
import { Pressable } from 'react-native';

import Colors from '@/constants/Colors';
import { useColorScheme } from '@/components/useColorScheme';
import { useClientOnlyValue } from '@/components/useClientOnlyValue';

// Ajustei aqui para adicionar padding no ícone
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: 8 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
        <Tabs
          screenOptions={{
            tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
            tabBarStyle: {
              height: 60,          // um pouco maior que o padrão, mas não muito
              paddingBottom: 6,    // menos padding para não afastar muito o label
            },
            tabBarLabelStyle: {
              marginTop: 0,
              fontSize: 12,
            },
            headerShown: useClientOnlyValue(false, true),
            headerStyle: {
              backgroundColor: '#f0f0f0',
              justifyContent: 'center',
              alignItems: 'center',
            },
            headerTitleAlign: 'center',
            headerTintColor: 'black',
            headerTitleStyle: {
              fontSize: 18,
            },
          }}
        >
      <Tabs.Screen
        name="index"
        options={{
          title: 'Inicio',
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          tabBarLabelPosition: 'below-icon',
          headerRight: () => (
            <Link href="/modal" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="info-circle"
                    size={20}
                    color={Colors[colorScheme ?? 'light'].text}
                    style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          ),
        }}
      />
      <Tabs.Screen
        name="two"
        options={{
          title: 'Aulas',
          tabBarLabelPosition: 'below-icon',
          tabBarIcon: ({ color }) => <TabBarIcon name="book" color={color} />,
        }}
      />
    </Tabs>
  );
}
