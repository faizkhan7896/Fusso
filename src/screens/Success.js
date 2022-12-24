import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import Statusbar from '../components/Statusbar';

export default function Success({navigation}) {
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Statusbar backgroundColor="#fff" barStyle="dark-content" />

      <View
        style={{
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          height: '90%',
        }}>
        <Image
          source={require('../assets/App_icon.png')}
          style={{
            height: 100,
            width: 100,
            resizeMode: 'contain',
          }}
        />

        <View
          style={{
            alignItems: 'center',
          }}>
          <Image
            source={require('../assets/success.gif')}
            style={{
              height: 200,
              width: 200,
              resizeMode: 'contain',
            }}
          />
          <Text style={{color: '#000', fontWeight: '700', fontSize: 24}}>
            Caricamento completato
          </Text>
        </View>

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            paddingVertical: 12,
            flexDirection: 'row',
            borderRadius: 40,
            backgroundColor: '#F78B63',
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,

            elevation: 5,
            marginHorizontal: 15,
            paddingHorizontal: 50,
            alignSelf: 'center',
            marginBottom: 20,
          }}>
          <Text
            style={{
              fontWeight: '700',
              color: '#fff',
              fontSize: 16,
            }}>
            Carica nel frigo
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
