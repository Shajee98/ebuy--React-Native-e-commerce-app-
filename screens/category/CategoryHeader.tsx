import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../../components/search/SearchBar'

const CategoryHeader = (props: {title: string}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>{props.title}</Text>
      <SearchBar />
    </View>
  )
}

export default CategoryHeader

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: 20
    },
    heading: {
        fontSize: 32,

    }
})