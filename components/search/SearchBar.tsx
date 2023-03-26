import {
    StyleSheet,
    Text,
    TextInput,
    View,
    Dimensions,
    ScrollView,
    Image
  } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import React from 'react';

const SearchBar = () => {
  return (
    <View style={styles.searchbarContainer}>
    <TextInput style={styles.searchBar} placeholder='Search' />
    <FontAwesomeIcon size={16} icon={faSearch}/>
    </View>
  )
}

const styles = StyleSheet.create({
    searchbarContainer: {
        height: 50,
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "lightgrey",
        borderRadius: 10,
        paddingHorizontal: 20,
        marginVertical: 20,
        alignSelf: "center",
        width: Dimensions.get("screen").width - 100
    },
    searchBar: {
        flex: 2,
        backgroundColor: "lightgrey",
        borderRadius: 10,
    },
})

export default SearchBar