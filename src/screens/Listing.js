import {
  View,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import Statusbar from '../components/Statusbar';

const data = [
  {
    id: '1',
    title: 'AT STORE',
    time: 'Minutes',
  },
  {
    id: '2',
    title: 'TAKE OUT',
    time: 'Houre',
  },
  {
    id: '3',
    title: 'DELIVERY',
    time: 'Day',
  },
  {
    id: '5',
    title: 'DELIVERY',
    time: 'Week',
  },
  {
    id: '6',
    title: 'DELIVERY',
    time: 'Month',
  },
  {
    id: '7',
    title: 'DELIVERY',
    time: 'Year',
  },
];

export default function Listing({navigation}) {
  const [selectedProduct, setSelectedProduct] = useState([]);

  const ListItem = ({title, onPress, backgroundColor, borderColor}) => {
    return (
      <TouchableOpacity
        onPress={onPress}
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          // justifyContent: 'space-between',
          marginTop: 35,
          borderBottomWidth: 1,
          width: '60%',
          marginLeft: 15,
          borderColor: 'gray',
          paddingBottom: 5,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Listing')}
          style={{
            height: 27,
            width: 27,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            borderRadius: 100,
            marginRight: 25,
            borderWidth: 1,
          }}
        />
        <Text style={{fontSize: 17, color: '#33465c', fontWeight: '500'}}>
          {title}
        </Text>
      </TouchableOpacity>
    );
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <Statusbar backgroundColor="#F78B63" barStyle="light-content" />
      <View style={{flex: 1, justifyContent: 'space-between'}}>
        <View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 20,
              backgroundColor: '#F78B63',
              paddingVertical: 10,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Image
                source={require('../assets/back.png')}
                style={{
                  height: 24,
                  width: 24,
                  resizeMode: 'contain',
                  tintColor: '#FFFFFF',
                }}
              />
            </TouchableOpacity>
            <Text
              style={{
                fontSize: 24,
                color: '#fff',
                fontWeight: '700',
                // fontFamily: 'poppins-Bold',
              }}>
              La tua lista della spesa
            </Text>
            <Image
              source={require('../assets/info.png')}
              style={{
                height: 24,
                width: 24,
                resizeMode: 'contain',
                opacity: 0,
              }}
            />
          </View>

          <View
            style={{
              backgroundColor: '#fff',
              // flex: 1,
            }}>
            <FlatList
              data={data}
              showsVerticalScrollIndicator={false}
              scrollEnabled={true}
              ItemSeparatorComponent={() => <View style={{width: 20}} />}
              renderItem={({item, index}) => (
                <ListItem
                  title="Olive"
                  onPress={() => {
                    setSelectedProduct(prevState =>
                      prevState.find(v => item.id == v)
                        ? prevState.filter(v => item.id != v)
                        : [...prevState, item.id],
                    );
                  }}
                  backgroundColor={
                    selectedProduct.find(v => v == item.id) ? '#F78B63' : '#fff'
                  }
                  borderColor={
                    selectedProduct.find(v => v == item.id) ? '#F78B63' : 'gray'
                  }
                />
              )}
            />
          </View>

          <TouchableOpacity
            onPress={() => {
              // if (profileData?.signup_status == 'Owner Account Not Activated') {
              //   navigation.navigate('OwnerSignup');
              //   return;
              // }
              // navigation.navigate('AddProduct');
            }}
            style={{
              backgroundColor: '#fff',
              borderRadius: 120,
              position: 'absolute',
              top: 100,
              right: 40,
              paddingVertical: 10,
              paddingHorizontal: 10,
              shadowColor: '#000',
              shadowOffset: {
                width: 0,
                height: 2,
              },
              shadowOpacity: 0.25,
              shadowRadius: 3.84,

              elevation: 5,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Image
              style={{
                height: 30,
                width: 30,
                resizeMode: 'contain',
                borderRadius: 150,
                tintColor: '#F78B63',
              }}
              source={require('../assets/plus.png')}
            />
          </TouchableOpacity>
        </View>

        <View style={{}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Success')}
            // activeOpacity={activeOpacity}
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

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              paddingHorizontal: 15,
              marginVertical: 15,
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '35%',
              }}>
              <Image
                source={require('../assets/camera.png')}
                style={{
                  height: 38,
                  width: 38,
                  resizeMode: 'contain',
                  marginBottom: 5,
                }}
              />
              <Image
                source={require('../assets/list.png')}
                style={{
                  height: 38,
                  width: 38,
                  resizeMode: 'contain',
                  marginBottom: 5,
                }}
              />
            </View>

            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '35%',
              }}>
              <Image
                source={require('../assets/heart.png')}
                style={{
                  height: 38,
                  width: 38,
                  resizeMode: 'contain',
                  marginBottom: 5,
                }}
              />
              <Image
                source={require('../assets/fridge.png')}
                style={{
                  height: 38,
                  width: 38,
                  resizeMode: 'contain',
                  marginBottom: 5,
                }}
              />
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
