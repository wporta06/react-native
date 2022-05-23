import { View, Text, Image, TextInput } from 'react-native'
import { useEffect, useState } from 'react'

import { COLORS, FONTS, SIZES, assets } from '../constants'

const HomeHeader = ({ onSearch }) => {

  return (
    // container 1
    <View style={{
      backgroundColor: COLORS.primary,
      padding: SIZES.font,
    }}>
      {/* container 2 */}
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* logo app */}
        <Image
          source={assets.logo}
          resizeMode='contain'
          style={{
            // with: 90,
            // height: 25,
            // borderWidth: 2,
            // borderColor: "red",
          }}
        />
        {/* persone avatar logo */}
        <Image
          source={assets.person03}
          resizeMode='contain'
          style={{ width: "90%", height: 40 }}
        />
        {/* blue badge */}
        <Image
          source={assets.badge}
          resizeMode='contain'
          style={{ position: "absolute", width: 25, height: 25, bottom: 0, right: 0 }}
        />
      </View>

      <View style={{ marginVertical: SIZES.font }}>
        {/* Hello, Victoria */}
        <Text style={{
          fontFamily: FONTS.regular,
          fontSize: SIZES.small,
          color: COLORS.white
        }}>
          Hello, Victoria
        </Text>
        {/* Let's findamasterpiece */}
        <Text style={{
          fontFamily: FONTS.bold, fontSize: SIZES.large,
          color: COLORS.white, marginTop: SIZES.base / 2
        }}>
          Let's findamasterpiece
        </Text>
      </View>
      {/* Search bar */}
      <View style={{ marginTop: SIZES.font, flexDirection: 'row' }}>
        <View style={{
          width: '100%',
          flexDirection: 'row',
          backgroundColor: COLORS.gray,
          alignItems: 'center',
          // // padding:10,
          borderRadius: SIZES.font,
          paddingHorizontal: SIZES.font,
          paddingVertical: SIZES.small,
        }}>
          {/* Search bar icon */}
          <Image
            source={assets.search}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginRight: SIZES.base }}
          />
          {/* Search input */}
          <TextInput
            placeholder='Search...'
            style={{ flex: 1 }}
            onChangeText={onSearch}
          />
        </View>
      </View>
      {/* <Text>HomeHeadddder</Text> */}
    </View>
  )
}

export default HomeHeader