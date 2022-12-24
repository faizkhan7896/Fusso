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
        Valori nutrizionali
      </Text>
      <ListItem title="Energia Kacl" value="414 g" />
      <ListItem title="Carboidarati" value="72 g" />
      <ListItem title="Di cui zuccheri " value="8.5 g" />
      <ListItem title="Proteine" value="11.5 g" />
      <ListItem title="Grassi" value="8.5 g" />
      <ListItem title="Di cui saturi" value="1.2 g" />
      <ListItem title="Fibre" value="4 g" />
    </View>
  );
}
