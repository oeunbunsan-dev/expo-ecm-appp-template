import AppLottieView from '@/shared/components/common/AppLottieView';
import { ThemedText } from '@/shared/components/common/ThemedText';
import { AppIcons } from '@/shared/configs';
import { useState } from 'react';
import { Dimensions, ImageBackground, ImageSourcePropType, Pressable, StyleSheet, View } from 'react-native';
import PagerView from 'react-native-pager-view';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface HeroItem {
      id: string;
      title: string;
      subtitle?: string;
      image: ImageSourcePropType | string;
};

interface Props {
      heroArrObj: HeroItem[];
      onHeroTap?: (item: HeroItem) => void;
      iconColor?: string;
};

const HeroCarousel = ({ heroArrObj, onHeroTap, iconColor = '#FFFFFF' }: Props) => {
      const [currentPage, setCurrentPage] = useState(0);
      const colorFilters = [{ keypath: '**', color: iconColor }];

      if (!heroArrObj || heroArrObj.length === 0) return null;

      return (
            <View style={styles.container}>
                  <PagerView
                        style={styles.pagerView}
                        initialPage={0}
                        onPageSelected={(e) => setCurrentPage(e.nativeEvent.position)}
                  >
                        {heroArrObj.map((item, index) => (
                              <Pressable
                                    key={item.id || index}
                                    style={styles.pageWrapper}
                                    onPress={() => onHeroTap?.(item)}
                              >
                                    <ImageBackground
                                          source={typeof item.image === 'string' ? { uri: item.image } : item.image}
                                          style={styles.imageBackground}
                                          imageStyle={styles.imageStyle}
                                    >
                                          {/* (Overlay) */}
                                          <View style={styles.overlay}>
                                                <View style={styles.contentContainer}>
                                                      {item.subtitle && <ThemedText style={styles.subtitle}>{item.subtitle}</ThemedText>}
                                                      <ThemedText style={styles.title} numberOfLines={2}>{item.title}</ThemedText>
                                                      <View>
                                                            <AppIcons.Bag color={iconColor} />
                                                            <AppIcons.Categories color={iconColor} />

                                                            <AppLottieView name="map" color='green' />
                                                      </View>
                                                </View>
                                          </View>
                                    </ImageBackground>
                              </Pressable>
                        ))}
                  </PagerView>

                  {/* (Pagination Dots) */}
                  <View style={styles.paginationContainer}>
                        {heroArrObj.map((_, index) => (
                              <View
                                    key={index}
                                    style={[
                                          styles.dot,
                                          currentPage === index ? styles.activeDot : styles.inactiveDot
                                    ]}
                              />
                        ))}
                  </View>
            </View>
      );
};

const styles = StyleSheet.create({
      container: {
            width: SCREEN_WIDTH,
            height: 220,
            marginVertical: 12,
            position: 'relative',
      },
      pagerView: {
            flex: 1,
      },
      pageWrapper: {
            flex: 1,
            paddingHorizontal: 16,
      },
      imageBackground: {
            flex: 1,
            justifyContent: 'flex-end',
            backgroundColor: '#E1E1E1',
            borderRadius: 16,
            overflow: 'hidden',
            //  (Shadow) for iOS and Android
            elevation: 4,
            shadowColor: '#000',
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.15,
            shadowRadius: 6,
      },
      imageStyle: {
            borderRadius: 16,
            resizeMode: 'cover',
      },
      overlay: {
            flex: 1,
            backgroundColor: 'rgba(0, 0, 0, 0.25)',
            justifyContent: 'flex-end',
            padding: 20,
      },
      contentContainer: {
            maxWidth: '80%',
      },
      lottieIcon: {
            width: 24,
            height: 24,
      },
      subtitle: {
            color: '#FFD700',
            fontSize: 12,
            textTransform: 'uppercase',
            marginBottom: 4,
            letterSpacing: 1,
      },
      title: {
            color: '#FFFFFF',
            fontSize: 22,
            textShadowColor: 'rgba(0, 0, 0, 0.5)',
            textShadowOffset: { width: 0, height: 1 },
            textShadowRadius: 3,
      },
      paginationContainer: {
            flexDirection: 'row',
            position: 'absolute',
            bottom: 12,
            alignSelf: 'center',
            alignItems: 'center',
            justifyContent: 'center',
      },
      dot: {
            height: 6,
            borderRadius: 3,
            marginHorizontal: 4,
      },
      activeDot: {
            width: 18,
            backgroundColor: '#FFFFFF',
      },
      inactiveDot: {
            width: 6,
            backgroundColor: 'rgba(255, 255, 255, 0.5)',
      },
});

export default HeroCarousel;
