import { React, useState } from 'react'
import { View, Text } from 'react-native'

import { EthPrice, NFTTitle } from './SubInfo';
import { COLORS, SIZES, FONTS } from '../constants'

const DetailsDesc = ({ data }) => {
  const [text, setText] = useState(data.description.slice(0, 100));
  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <View style={{
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* title & subtitle */}
        <NFTTitle
          title={data.name}
          subtitle={data.creator}
          titleSize={SIZES.extraLarge}
          subTitleSize={SIZES.font}
        />
        {/* eth price */}
        <EthPrice price={data.price} />
      </View>

      <View style={{ marginVertical: SIZES.extraLarge * 1.5 }}>
        {/* description */}
        <Text style={{
          fontSize: SIZES.font,
          fontFamily: FONTS.semiBold,
          color: COLORS.primary,
        }}>
          Description:
        </Text>

        {/* description with readmore & showless */}
        <Text style={{
          fontSize: SIZES.small,
          fontFamily: FONTS.regular,
          color: COLORS.secondary,
          lineHeight: SIZES.large,
        }}>
          {text}
          {!readMore && '...'}
          <Text style={{
            fontSize: SIZES.small,
            color: COLORS.primary,
            fontFamily: FONTS.semiBold
          }}
            onPress={() => {
              if (!readMore) {
                setText(data.description);
                setReadMore(true);
              } else {
                setText(data.description.slice(0, 100));
                setReadMore(false);
              }
            }}
          >
            {readMore ? ' Show Less' : ' Read More'}
          </Text>
        </Text>
      </View>
    </>
  )
}

export default DetailsDesc