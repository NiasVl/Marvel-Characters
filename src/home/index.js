import { Text, View, FlatList } from 'react-native';
import { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeInDown } from 'react-native-reanimated';

import styles from './style';
import CardChars from '../Components/CardChars';
import HoverCard from '../Components/HoverCard';  // 👈 import novo

export default function App() {
  const [Dados, setDados] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    async function BuscarData() {
      fetch("https://rickandmortyapi.com/api/character")
        .then((res) => res.json())
        .then((data) => {
          setDados(data.results);
        });
    }
    BuscarData();
  }, []);

  return (
    <View style={[styles.container, { padding: 0 }]}>
      <Text
        style={{
          fontSize: 50,
          fontWeight: 'bold',
          marginBottom: 16,
          textAlign: 'center',
          textShadowColor: '#000',
          textShadowOffset: { width: 0, height: 2 },
          textShadowRadius: 6,
        }}
      >
        <Text style={{ color: '#2196F3', textShadowColor: '#2196F3', textShadowRadius: 10 }}>
          Rick
        </Text>
        <Text> and </Text>
        <Text style={{ color: '#FFD600', textShadowColor: '#FFD600', textShadowRadius: 10 }}>
          Morty
        </Text>
        <Text> Series</Text>
      </Text>

      <FlatList
        data={Dados}
        keyExtractor={(item) => item.id.toString()}
        numColumns={3}
        contentContainerStyle={{ padding: 0 }}
        columnWrapperStyle={{ flex: 1, justifyContent: 'space-between' }}
        showsVerticalScrollIndicator={false}
        renderItem={({ item, index }) => {
          const duration = Math.max(1200 - index * 50, 500);
          const delay = index * 80;

          return (
            <Animated.View
              entering={FadeInDown.duration(duration).delay(delay)}
              style={{ flex: 1, margin: 2, alignItems: 'center' }}
            >
              <HoverCard>
                <CardChars
                  image={item.image}
                  name={item.name}
                  status={item.status}
                  gender={item.gender}
                />
              </HoverCard>
            </Animated.View>
          );
        }}
      />
    </View>
  );
}
