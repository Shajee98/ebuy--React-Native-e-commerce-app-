import { faEllipsisVertical, faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { ImageSourcePropType } from 'react-native';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Pressable,
    Dimensions
  } from 'react-native';
import { RootStackParamList } from '../../utils/types';
import { useNavigation } from '@react-navigation/native';


interface NativeProps extends NativeStackScreenProps<RootStackParamList, "ProductDetails">{
}
interface Props extends Partial<NativeProps> {
    image: ImageSourcePropType,title: string,price: number,reviews: number, avgRating: number, desc?: string
}

const Product = (props: Props) => {
    const navigation = useNavigation<Props['navigation']>()
    const fetchProduct = () => {
        navigation?.navigate('ProductDetails',{image: props.image, desc: props.desc, price: props.price, reviews: props.reviews, avgRating: props.avgRating, title: props.title})
    }
    
  return (
    <Pressable style={styles.container} onPress={fetchProduct}>
        <Image style={styles.image} source={props.image} defaultSource={require("../../assets/image_placeholder.png")}/>
        <View style={styles.footer}>
            <View style={styles.footerUp}>
                <Text style={{fontWeight: "900"}}>{props.title}</Text>
                <Text style={{fontWeight: "bold"}}>Rs. {props.price}</Text>
            </View>
            <View style={styles.footerDown}>
                <View style={styles.rating}>
                    <FontAwesomeIcon icon={faStar} color="yellow"/>
                    <Text style={{fontWeight: "bold"}}>{props.avgRating}</Text>
                </View>
                <Text style={{fontWeight: "bold"}}>{props.reviews} reviews</Text>
                <FontAwesomeIcon icon={faEllipsisVertical}/>
            </View>
        </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginRight: 20,
        height: 250,
        width: 180,
        padding: 5,
        paddingBottom: 15,
        borderRadius: 10,
        borderWidth: 1,
    },
    image: {
        flex: 2,
        resizeMode: "center",
        borderRadius: 10,
        alignSelf: "center",
    },
    footer: {
        flex: 1,
        height: 100
    },
    footerUp: {
        display: "flex",
        flex: 1,
        gap: 10
    },
    footerDown: {
        display: 'flex',
        flex: 2,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "space-between"
    },
    rating: {
        display: 'flex',
        flexDirection: "row",
        gap: 5
    }
})

export default Product