import {useState} from 'react';
import { View, SafeAreaView, FlatList, Text } from 'react-native'

import { COLORS, NFTData } from '../constants'
import { NFTCard, HomeHeader, FocusedStatusBar } from '../components';

const Home = () => {

    // search bar, must change FlatList data=(coming data) to nftData(new from handleSearch())
    const [nftData, setNftData] = useState(NFTData);
    const handleSearch = (value) => {
        if (!value.length) return setNftData(NFTData);

        const filteredData = NFTData.filter((item)=>
        item.name.toLowerCase().includes(value.toLowerCase())
        )

        if(filteredData.length){
            setNftData(filteredData);
        }else{
            setNftData(NFTData)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1 }}>
            {/* top bar */}
            <FocusedStatusBar background={COLORS.primary} />

            {/* map all nft card using FlatList */}
            <View style={{ flex: 1 }}>
                <View style={{ zIndex: 0 }} >
                    <FlatList
                        data={nftData}
                        // map and show nftcard 
                        renderItem={({ item }) => <NFTCard data={item} />}
                        keyExtractor={(item) => item.id}
                        showsVerticalScrollIndicator={false}
                        // header
                        ListHeaderComponent={<HomeHeader onSearch={handleSearch} />}
                    />
                </View>

                <View style={{
                    position: 'absolute',
                    top: 0,
                    bottom: 0,
                    right: 0,
                    left: 0,
                    zIndex: -1,
                }}>
                    <View style={{ height: 300, backgroundColor: COLORS.primary }} />
                    <View style={{ flex: 1, backgroundColor: COLORS.white }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Home