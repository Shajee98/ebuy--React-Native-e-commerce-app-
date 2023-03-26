import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    ScrollView
  } from 'react-native';
import Product from '../product-card/Product';

const Section = (props: {title: string, url?: string}) => {
  return (
    <View style={styles.container}>
        <View style={styles.header}>
            <Text style={styles.heading}>{props.title}</Text>
            <Text style={styles.seeAll}>See All</Text>
        </View>
        <View style={styles.productList}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Product title='TMA-2 HD Wireless' price={20000} reviews={20} avgRating={4.6} image={require('../../assets/products/sample-product-1.png')}/>
                <Product title='TMA-2 HD Wireless' price={20000} reviews={20} avgRating={4.6} image={require('../../assets/products/sample-product-2.png')}/>
                <Product title='TMA-2 HD Wireless' price={20000} reviews={20} avgRating={4.6} image={require('../../assets/products/sample-product-3.png')}/>
                <Product title='TMA-2 HD Wireless' price={20000} reviews={20} avgRating={4.6} image={require('../../assets/products/sample-product-1.png')}/>
            </ScrollView>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        marginVertical: 20
    },
    header: {
        flex: 1,
        display: 'flex',
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
        marginBottom: 20
    },
    heading: {
        fontSize: 16,
        fontWeight: "900",
    },
    seeAll: {
        fontWeight: "normal",
        color: "#3669C9"
    },
    productList: {
        paddingLeft: 20
    }
})

export default Section