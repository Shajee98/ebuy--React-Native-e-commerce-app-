import { StyleSheet, FlatList } from 'react-native'
import { ImageSourcePropType } from 'react-native';
import React from 'react'
import Product from '../../components/product-card/Product'
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../utils/types';
import CategoryHeader from './CategoryHeader';

const CategoryProducts = (props: NativeStackScreenProps<RootStackParamList, 'CategoryProducts'>) => {
    const data: {id: string, title: string, price: number, reviews: number, avgRating: number, image: ImageSourcePropType}[] = [
        {
            id: '1',
            title: "TMA-2 HD Wireless",
            price: 20000,
            reviews: 30,
            avgRating: 4.7,
            image: require("../../assets/products/sample-product-1.png")
        },
        {
            id: '2',
            title: "TMA-2 HD Wireless",
            price: 26000,
            reviews: 50,
            avgRating: 4.2,
            image: require("../../assets/products/sample-product-2.png")
        },
        {
            id: '3',
            title: "TMA-2 HD Wireless",
            price: 21000,
            reviews: 45,
            avgRating: 4.3,
            image: require("../../assets/products/sample-product-3.png")
        },
        {
            id: '4',
            title: "TMA-2 HD Wireless",
            price: 20000,
            reviews: 30,
            avgRating: 4.7,
            image: require("../../assets/products/sample-product-1.png")
        },
        {
            id: '5',
            title: "TMA-2 HD Wireless",
            price: 26000,
            reviews: 50,
            avgRating: 4.2,
            image: require("../../assets/products/sample-product-2.png")
        },
        {
            id: '6',
            title: "TMA-2 HD Wireless",
            price: 21000,
            reviews: 45,
            avgRating: 4.3,
            image: require("../../assets/products/sample-product-3.png")
        },
        {
            id: '7',
            title: "TMA-2 HD Wireless",
            price: 20000,
            reviews: 30,
            avgRating: 4.7,
            image: require("../../assets/products/sample-product-1.png")
        },
        {
            id: '8',
            title: "TMA-2 HD Wireless",
            price: 26000,
            reviews: 50,
            avgRating: 4.2,
            image: require("../../assets/products/sample-product-2.png")
        },
        {
            id: '9',
            title: "TMA-2 HD Wireless",
            price: 21000,
            reviews: 45,
            avgRating: 4.3,
            image: require("../../assets/products/sample-product-3.png")
        },
        {
            id: '10',
            title: "TMA-2 HD Wireless",
            price: 28000,
            reviews: 47,
            avgRating: 3.8,
            image: require("../../assets/products/sample-product-1.png")
        }
    ]
  return (
            <FlatList 
                numColumns={2}
                style={{marginTop: 20}}
                columnWrapperStyle={{marginBottom: 10, flex: 1, paddingLeft: 15}}
                ListHeaderComponent={<CategoryHeader title={props.route.params.categoryTitle}/>}
                data={data}
                renderItem={({item}) => <Product title={item.title} image={item.image} avgRating={item.avgRating} reviews={item.reviews} price={item.price}/>}
                keyExtractor={item => item.id}
            />
  )
}

export default CategoryProducts

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingLeft: 15
    },
})