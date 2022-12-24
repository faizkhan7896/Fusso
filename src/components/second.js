import {View, Text} from 'react-native';
import React from 'react';

export default function First() {
  const ListItem = ({title, value}) => {
    return (
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginTop: 25,
        }}>
        <Text style={{fontSize: 17, color: '#33465c', fontWeight: '500'}}>
          {title}
        </Text>
        <Text style={{fontSize: 17, color: '#33465c', fontWeight: '500'}}>
          {value}
        </Text>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#fff',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        paddingTop: 30,
        paddingHorizontal: 20,
      }}>
      <Text style={{fontSize: 20, color: '#33465c', fontWeight: '700'}}>
        Ingredienti
      </Text>
      <ListItem title="Spaghetti" value="320 g" />
      <ListItem title="Pamodori pelati" value="800 g" />
      <ListItem title="Olio extravergin olive" value="30 g" />
      <ListItem title="Aglio" value="1 spicchio" />
      <ListItem title="Basilico" value="q.b" />
      <ListItem title="Sale" value="q.b" />
    </View>
  );
}
