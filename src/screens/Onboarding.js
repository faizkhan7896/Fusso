import {Platform, StatusBar, useWindowDimensions} from 'react-native';
import React from 'react';
import {
  SafeAreaView,
  Image,
  StyleSheet,
  FlatList,
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
// import Statusbar from '../../components/Statusbar';

const {width, height} = Dimensions.get('window');

const COLORS = {primary: '#000', white: '#fff'};

const slides = [
  {
    id: '1',
    images: require('../assets/onboarding1.png'),
    title: 'Come and',
    title2: 'BUY',
    title3: 'things.!',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla erat eget at ut id enim Vitae viverra nunc auctor magna fermentum maecenas.',
  },
  {
    id: '2',
    images: require('../assets/onboarding2.png'),
    title2: 'SELL',
    title3: 'the things at best deal.',
    subtitle:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A nulla erat eget at ut id enim Vitae viverra nunc auctor magna fermentum maecenas.',
  },
];

const OnboardingScreen = ({navigation}) => {
  const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
  const ref = React.useRef();
  const updateCurrentSlideIndex = e => {
    const contentOffsetX = e.nativeEvent.contentOffset.x;
    const currentIndex = Math.round(contentOffsetX / width);
    setCurrentSlideIndex(currentIndex);
  };

  const goToNextSlide = ({navigation}) => {
    const nextSlideIndex = currentSlideIndex + 1;
    if (nextSlideIndex != slides.length) {
      const offset = nextSlideIndex * width;
      ref?.current.scrollToOffset({offset});
      setCurrentSlideIndex(currentSlideIndex + 1);
    }
  };

  const skip = () => {
    const lastSlideIndex = slides.length - 1;
    const offset = lastSlideIndex * width;
    ref?.current.scrollToOffset({offset});
    setCurrentSlideIndex(lastSlideIndex);
  };

  const Footer = ({item}) => {
    return (
      <View
        style={{
          height: height * 0.15,
          justifyContent: 'space-between',
          paddingHorizontal: 20,
          marginBottom: 55,
          position: 'absolute',
          bottom: 105,
          alignSelf: 'center',
        }}>
        <View
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 20,
            alignSelf: 'center',
            // marginHorizontal: 30,
          }}>
          <Text style={styles.title}>{item?.title3}</Text>
          <View style={{height: Dimensions.get('window').height / 50}} />
          <Text style={styles.subtitle}>{item?.subtitle}</Text>
        </View>
        {/* {/ Indicator container /} */}

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: 60,
            marginBottom: 30,
          }}>
          {/* {/ Render indicator /} */}
          {slides.map((_, index) => (
            <View
              key={index}
              style={[
                styles.indicator,
                currentSlideIndex == index && {
                  backgroundColor: '#fff',
                  width: 35,
                },
              ]}
            />
          ))}
        </View>

        {/* {/ Render buttons /} */}
        <View style={{}}>
          {currentSlideIndex == slides.length - 1 ? (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={goToNextSlide}
                style={styles.btn}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <TouchableOpacity
                    style={{alignSelf: 'flex-start', width: '80%'}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: '#fff',
                        marginRight: 8,
                      }}>
                      Salta
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.replace('MainScreen')}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text
                      style={{
                        fontWeight: 'bold',
                        fontSize: 15,
                        color: '#fff',
                        marginRight: 8,
                      }}>
                      Entra
                    </Text>
                    <Image
                      source={require('../assets/item.png')}
                      style={{
                        height: 20,
                        width: 20,
                        resizeMode: 'contain',
                        tintColor: '#fff',
                      }}
                    />
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            </View>
          ) : (
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <TouchableOpacity
                activeOpacity={1}
                onPress={goToNextSlide}
                style={styles.btn}>
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                  <Text
                    style={{
                      fontWeight: 'bold',
                      fontSize: 15,
                      color: '#fff',
                      marginRight: 8,
                    }}>
                    Avanti
                  </Text>
                  <Image
                    source={require('../assets/item.png')}
                    style={{
                      height: 20,
                      width: 20,
                      resizeMode: 'contain',
                      tintColor: '#fff',
                    }}
                  />
                </View>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    );
  };
  const Slide = ({navigation, item}) => {
    const dimentions = useWindowDimensions();
    return (
      <ImageBackground
        source={item?.images}
        style={{
          height: dimentions.height,
          width: dimentions.width,
        }}
        imageStyle={{
          height: dimentions.height,
          width: dimentions.width,
          resizeMode: 'cover',
        }}>
        <Footer item={item} />
      </ImageBackground>
    );
  };
  const dimentions = useWindowDimensions();

  return (
    <View style={{flex: 1, backgroundColor: '#F78B63'}}>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="light-content"
      />
      <FlatList
        scrollEnabled={false}
        ref={ref}
        onMomentumScrollEnd={updateCurrentSlideIndex}
        contentContainerStyle={{height: height}}
        showsHorizontalScrollIndicator={false}
        horizontal
        data={slides}
        pagingEnabled
        renderItem={({item}) => <Slide item={item} navigation={navigation} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  subtitle: {
    color: '#fff',
    fontSize: 15,
    maxWidth: '80%',
    textAlign: 'center',
    lineHeight: 20,
    fontFamily: Platform.OS == 'android' ? 'Poppins-SemiBold' : null,
    fontWeight: '600',
    // marginTopt: '500',
  },
  title: {
    color: '#fff',
    fontSize: 26,
    fontWeight: '700',
    textAlign: 'center',
    fontFamily: Platform.OS == 'android' ? 'Poppins-Bold' : null,
  },
  image: {
    height: '100%',
    width: '100%',
    resizeMode: 'contain',
  },
  indicator: {
    height: 5,
    width: 16,
    backgroundColor: '#cfcfcf',
    marginHorizontal: 3,
    borderRadius: 20,
  },
  btn: {
    height: 50,
    borderRadius: 8,
    // backgroundColor: 'red',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    alignItems: 'flex-end',
    // paddingHorizontal: 20,
    width: '100%',
  },
});
export default OnboardingScreen;
