import {
    StyleSheet,
    Text,
    View,
    ScrollView,
  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCartShopping, faBell } from '@fortawesome/free-solid-svg-icons'
import SearchBar from '../../components/search/SearchBar';
import Advertisement from '../../components/ads/Advertisement';
import React from 'react';
import Category from '../../components/category/Category';
import Section from '../../components/home_section/Section';

const Home = () => {
  return (
        <View style={styles.container}>
            <View style={styles.navbar}>
                <View style={styles.logoContainer}>
                <Text style={styles.logo}>eBuy</Text>
                </View>
                <View style={styles.navIcons}>
                <FontAwesomeIcon icon={faCartShopping} color="#e91e63" size={24}/>
                <FontAwesomeIcon icon={faBell} color="#e91e63" size={24}/>
                </View>
            </View>
            <View style={styles.homeContainer}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <SearchBar />
                    <View style={styles.adsContainer}>
                        <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                            <Advertisement adImage={require('../../assets/home/ads/ad1.png')} adText="Advertisment 1"/>
                            <Advertisement adImage={require('../../assets/home/ads/ad2.png')} adText="Advertisment 2"/>
                        </ScrollView>
                    </View>
                    <View style={styles.categoriesContainer}>
                        <Text style={styles.categoriesHeading}>Categories</Text>
                        <View style={styles.categoriesList}>
                            <ScrollView showsHorizontalScrollIndicator={false} horizontal>
                                <Category categoryImage={require("../../assets/home/categories/foods.png")} categoryTitle="Foods"/>
                                <Category categoryImage={require("../../assets/home/categories/gift.png")} categoryTitle="Gift"/>
                                <Category categoryImage={require("../../assets/home/categories/fashion.png")} categoryTitle="Fashion"/>
                                <Category categoryImage={require("../../assets/home/categories/gadget.png")} categoryTitle="Gadget"/>
                                <Category categoryImage={require("../../assets/home/categories/compute.png")} categoryTitle="Compute"/>
                                <Category categoryImage={require("../../assets/home/categories/souvenir.png")} categoryTitle="Souvenir"/>
                            </ScrollView>
                        </View>
                    </View>
                    <View>
                        <View style={styles.homeSections}>
                            <Section title='Featured Products' />
                            <Section title='Best Sellers' />
                        </View>
                    </View>
                </ScrollView>
            </View>
        </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 10,
    },
    homeContainer: {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    logoContainer: {
        flex: 2,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: "flex-end",
        marginRight: 80
    },
    logo: {
        fontSize: 24
    },
    navbar: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        padding: 10,
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: 'grey'
    },
    navIcons: {
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-end",
        gap: 20,        
    },
    adsContainer: {
        height: 200,
        paddingLeft: 10,
        overflow: 'hidden',
    },
    categoriesContainer: {
        display: "flex",
        flex: 1,
        marginVertical: 20,
        height: 150
    },
    categoriesHeading: {
        height: 50,
        fontSize: 16,
        fontWeight: "900",
        paddingLeft: 20,
    },
    categoriesList: {
        flex: 2,
        paddingLeft: 20,
    },
    homeSections: {
        display: "flex",
        flex: 1,
    },
})

export default Home