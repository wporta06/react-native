
import React from 'react';
import { View, Text, SafeAreaView, StatusBar, Image, FlatList } from 'react-native';
import { COLORS, SIZES, SHADOWS, FONTS, assets } from '../constants';
import { CircleButton, RectButton, FocusedStatusBar, DetailsDesc, DetailsBid, SubInfo } from '../components';

// console.log(StatusBar)
const DetailsHeader = ({ data, navigation }) => (
  <View style={{ width: '100%', height: 373 }}>
    {/* details img */}
    <Image
      source={data.image}
      resizeMode="cover"
      style={{ height: "100%", width: '100%' }}
    />
    {/* back button */}
    <CircleButton
      imgUrl={assets.left}
      handlePress={() => navigation.goBack()}
      top={StatusBar.currentHeight + 3}
      left={15}

    />
    <CircleButton
      imgUrl={assets.heart}
      top={StatusBar.currentHeight + 3}
      right={15}

    />

    {/* <Text>{navigation}</Text> */}
  </View>
)

// route, navigation it passed automatically cause we are using Details as acomponent inside Stack.screen
const Details = ({ route, navigation }) => {
  const { data } = route.params;
  // console.log('=======================')
  // console.log(navigation)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      {/* top status bar */}
      <FocusedStatusBar
        barStyle="dark-content"
        backgroundColor='rgba(255, 255, 255, 0.5)'
        transLucent={true}

      />

      <View style={{
        width: "100%",
        position: 'absolute',
        bottom: 0,
        paddingVertical: 14,
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'rgba(255, 255, 255,0.5)',
        zIndex: 1

      }}>

        {/* place bid btn */}
        <RectButton minWidth={170} fontSize={SIZES.large} {...SHADOWS.dark} />
      </View>
      <FlatList
        data={data.bids}
        renderItem={({ item }) => <DetailsBid bid={item} />}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: SIZES.extraLarge * 3 }}
        ListHeaderComponent={() => (
          <React.Fragment>
            <DetailsHeader data={data} navigation={navigation} />
            <SubInfo />
            <View style={{ padding: 10 }}>
              <DetailsDesc data={data} />
              {data.bids.length > 0 && (
                <Text style={{
                  fontSize: SIZES.font,
                  fontFamily: FONTS.semiBold,
                  color: COLORS.primary,
                }}>
                  Current Bid:
                </Text>

              )}
            </View>
          </React.Fragment>
        )}
      />
    </SafeAreaView>

  )
}

export default Details