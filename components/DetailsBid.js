import React from 'react'
import { View, Text, Image } from 'react-native'
import { COLORS, SIZES, FONTS } from '../constants'
import { EthPrice } from '../components/SubInfo';


const DetailsBid = ({ bid }) => {
  console.log(bid)
  return (
    <View style={{
      flexDirection: 'row',
      marginVertical: 4,
      marginHorizontal: 4,
      width: '100%',
      justifyContent: 'space-around',
      alignItems: 'center'

    }}>
      {/* image avatar */}
      <Image
        source={bid.image}
        resizeMode="contain"
        style={{ width: 48, height: 48 }}
      />

      <View>
        {/* name of avatar persone */}
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.small,
          color: COLORS.primary
        }}>
          Bid placed by :
          {bid.name}
        </Text>
        {/* date of the bid */}
        <Text style={{
          fontFamily: FONTS.semiBold,
          fontSize: SIZES.small,
          color: COLORS.primary
        }}>
          {bid.date}
        </Text>
      </View>

      {/* price of the bid */}
      <EthPrice price={bid.price} />
    </View>
  )
}

export default DetailsBid