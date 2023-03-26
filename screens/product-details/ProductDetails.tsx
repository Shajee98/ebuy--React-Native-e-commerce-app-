import React, { useCallback, useMemo, useRef } from 'react'
import { Dimensions, StyleSheet, Text, View, Image, Button, Pressable, ScrollView } from 'react-native'
import {
    BottomSheetModal,
    BottomSheetModalProvider,
    BottomSheetBackdropProps,
  } from '@gorhom/bottom-sheet';
import Carousel from 'react-native-snap-carousel';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/types';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faStar } from '@fortawesome/free-regular-svg-icons';
import { faClose } from '@fortawesome/free-solid-svg-icons';


const ProductDetails = ({route}: NativeStackScreenProps<RootStackParamList, 'ProductDetails'>) => {
    const bottomSheetModalRef = useRef<BottomSheetModal>(null);

    // variables
    const snapPoints = useMemo(() => ['25%', '50%'], []);
  
    // callbacks
    const handlePresentModalPress = useCallback(() => {
      bottomSheetModalRef.current?.present();
    }, []);
  return (
    <View style={styles.container}>
        <ScrollView showsVerticalScrollIndicator={false}>
            <Carousel
              data={[...new Array(6).keys()]}
              renderItem={({ index }) => (
                <View
                    style={styles.carousel}
                >
                    <Image style={styles.productImg} source={route.params.image}/>
                </View>
            )}
              sliderWidth={Dimensions.get("screen").width - 100}
              itemWidth={Dimensions.get("screen").width - 100}
            />
            <View style={styles.details}>
                <View style={styles.detailsUp}>
                    <Text style={styles.title}>{route.params?.title}</Text>
                    <Text style={styles.price}>Rs {route.params?.price}</Text>
                </View>
                <View style={styles.detailsDown}>
                        <View style={styles.rating}>
                        <FontAwesomeIcon icon={faStar} />
                        <Text>{route.params?.avgRating}</Text>
                        </View>
                        <Text>{route.params?.reviews} reviews</Text>
                </View>
                <View style={styles.shop}></View>
                <View style={styles.descContainer}>
                    <Text style={styles.descHeading}>Product Description</Text>
                    <Text style={styles.desc}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rem unde voluptatem aliquam nobis, neque delectus, ea libero at architecto sed, velit deserunt aut eos asperiores ab perspiciatis eaque iure eius.</Text>
                </View>
            </View>
        </ScrollView>
            <Pressable style={styles.cartBtn}><Text style={styles.btnText} onPress={handlePresentModalPress}>Add to Cart</Text></Pressable>
            <BottomSheetModalProvider>
                    <BottomSheetModal 
                    style={styles.bottomSheetContainer}
                    ref={bottomSheetModalRef}
                    index={1}
                    enableDismissOnClose
                    enablePanDownToClose={true}
                    snapPoints={snapPoints}
                    onChange={handlePresentModalPress}
                    >
                        <View>
                            <Pressable onPress={() => bottomSheetModalRef.current?.dismiss()}>
                            <FontAwesomeIcon icon={faClose} />
                            </Pressable>
                            <Text>BottomSheet</Text>
                        </View>
                    </BottomSheetModal>
            </BottomSheetModalProvider>
    </View>
  )
}

export default ProductDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 20,
        position: "relative",
    },
    carousel: {
        width: Dimensions.get("screen").width - 100,
        height: 350,
        justifyContent: 'center',
        borderRadius: 10,
        backgroundColor: 'lightgrey',
        alignItems: 'center',
    },
    productImg: {

    },
    details: {
        flex: 1,
        marginTop: 20,
        width: Dimensions.get("screen").width - 100,
        display: 'flex',
        justifyContent: "flex-start"
    },
    detailsUp: {
        flex: 1,
        height: 100
    },
    title: {
        flex: 1,
        fontWeight: "900",
        fontSize: 28
    },
    price: {
        flex: 1,
        color: "red",
        fontSize: 20
    },
    detailsDown: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
        width: Dimensions.get("screen").width - 300,
    },
    rating: {
        flex: 1,
        display: "flex",
        flexDirection: "row",
    }, 
    shop: {
        flex: 1,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        height: 100,
        marginTop: 20,
        marginBottom: 50
    },
    descContainer: {
        flex: 1,
        fontSize: 28,
        gap: 20
    },
    descHeading: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    desc: {
        fontSize: 20,
    },
    cartBtn: {
        position: "absolute",
        bottom: 10,
        width: 150,
        height: 50,
        backgroundColor: "#3669C9",
        borderRadius: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    btnText: {
        color: "#FFFFFF",
        fontSize: 18
    },
    bottomSheetContainer: {
        width: Dimensions.get("screen").width - 100,
        borderRadius: 10,
        marginHorizontal: 50
    }
})