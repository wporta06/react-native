import { View, Text, Image } from 'react-native'
import { COLORS, SIZES, FONTS, COORS, SHADOWS, assets } from '../constants'

// title & subtitle
export const NFTTitle = ({ title, subtitle, titleSize, subTitleSize }) => {
    return (
        <View>

            <Text style={{ fontFamily: FONTS.semiBold, fontSize: titleSize, color: COLORS.primary }}>{title}</Text>
            <Text style={{ fontFamily: FONTS.regular, fontSize: subTitleSize, color: COLORS.primary }}>{subtitle}</Text>
        </View>
    )
}
export const EthPrice = ({ price }) => {
    return (
        <View style={{
            flexDirection: 'row', alignItems: 'center'
        }}>
            <Image
                source={assets.eth}
                resizeMode='contain'
                style={{ width: 25, height: 25, marginRight: 2 }}
            />

            <Text style={{
                fontFamily: FONTS.medium,
                fontSize: SIZES.font,
                color: COLORS.primary
            }}>
                {price}
            </Text>
        </View>
    )
}
export const ImageCmp = ({ imgUrl, index }) => {
    return (
        <Image
            source={imgUrl}
            resizeMode="contain"
            style={{
                width: 48,
                height: 48,
                marginLeft: index === 0 ? 0 : -SIZES.font
            }}
        />
    )
}
export const People = () => {
    return (
        <View style={{ flexDirection: 'row' }}>
            {[assets.person02, assets.person03, assets.person04].map((imgUrl, index) => (
                <ImageCmp imgUrl={imgUrl} index={index} key={`Peoplekey-${index}`} />
            ))}
            {/* <Text>People</Text> */}
        </View>
    )
}
export const EndDate = () => {
    return (
        <View style={{
            paddingHorizontal: SIZES.font,
            paddingVertical: SIZES.base,
            backgroundColor: COLORS.white,
            borderRadius: SIZES.base,
            elevation: 1,
            maxWidth: '50%',
            ...SHADOWS.light,
        }}>
            <Text style={{
                fontFamily: FONTS.regular,
                fontSize: SIZES.small,
                color: COLORS.primary
            }}>
                Ending in:
            </Text>
            <Text style={{
                fontFamily: FONTS.semiBold,
                fontSize: SIZES.medium,
                color: COLORS.primary
            }}>
                12h 30m
            </Text>
        </View>
    )
}
export const SubInfo = () => {
    return (
        <View style={{
            width: "100%",
            paddingHorizontal: SIZES.font,
            marginTop: -SIZES.extraLarge,
            flexDirection: 'row',
            justifyContent: 'space-between'
        }}>
            {/* <Text>SubInfo</Text> */}
            <People />
            <EndDate />
        </View>
    )
}
