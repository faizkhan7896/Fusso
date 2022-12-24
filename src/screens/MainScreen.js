import {
  View,
  Text,
  StatusBar,
  Image,
  useWindowDimensions,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import First from '../components/First';
import Second from '../components/second';

export default function MainScreen({navigation}) {
  const dimentions = useWindowDimensions();
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <Image
        source={require('../assets/dish.png')}
        style={{
          height: dimentions.width / 1.4,
          width: dimentions.width,
          resizeMode: 'contain',
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginVertical: 15,
        }}>
        <Image
          source={require('../assets/info.png')}
          style={{
            height: 45,
            width: 45,
            resizeMode: 'contain',
          }}
        />
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            width: '50%',
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('Listing')}
            style={{
              height: 40,
              width: 40,
              backgroundColor: '#38a538',
              borderRadius: 100,
            }}
          />

          <Image
            source={require('../assets/leaves.png')}
            style={{
              height: 40,
              width: 40,
              resizeMode: 'contain',
            }}
          />
          <View
            style={{
              alignItems: 'center',
            }}>
            <Image
              source={require('../assets/clock.png')}
              style={{
                height: 38,
                width: 38,
                resizeMode: 'contain',
                marginBottom: 5,
              }}
            />
            <Text style={{color: '##674739', fontWeight: '500'}}>30 min</Text>
          </View>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: '#fff',
          borderTopWidth: 0.7,
          borderLeftWidth: 0.7,
          borderRightWidth: 0.7,
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          borderColor: '#c4c4c4',
          marginTop: 40,
        }}>
        <TouchableOpacity
          onPress={() => setCurrentPage(2)}
          style={[
            styles.container,
            {
              backgroundColor: '#adadad',
              alignSelf: 'center',
              marginTop: 10,
            },
          ]}></TouchableOpacity>

        {currentPage == 1 ? (
          <First navigation={navigation} />
        ) : (
          <Second navigation={navigation} />
        )}

        <View style={styles.maincontainer}>
          <TouchableOpacity
            onPress={() => setCurrentPage(1)}
            style={[
              styles.container,
              {
                backgroundColor: currentPage == 1 ? '#adadad' : '#c4c4c4',
              },
            ]}></TouchableOpacity>
          <View style={{width: 10}} />
          <TouchableOpacity
            onPress={() => setCurrentPage(2)}
            style={[
              styles.container,
              {
                backgroundColor: currentPage == 2 ? '#adadad' : '#c4c4c4',
              },
            ]}></TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  maincontainer: {
    flexDirection: 'row',
    // justifyContent: 'space-between',
    paddingHorizontal: 7,
    alignItems: 'center',
    marginTop: 65,
    marginBottom: 25,
    alignSelf: 'center',
  },
  container: {
    width: Dimensions.get('window').width / 2.5,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 3,
    borderRadius: 5,
  },
});
