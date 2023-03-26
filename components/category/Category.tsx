import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react'
import { ImageSourcePropType } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {
    StyleSheet,
    Text,
    Pressable,
    Image
  } from 'react-native';
import { RootStackParamList } from '../../utils/types';

interface Props extends NativeStackScreenProps<RootStackParamList, "CategoryProducts"> {}
interface Prop1 extends Partial<Props> {
  categoryImage: ImageSourcePropType, categoryTitle: string
}

const Category = (props: Prop1) => {
  const navigation = useNavigation<Props['navigation']>()

  const fetchCategory = () => {
    navigation.navigate("CategoryProducts",{categoryTitle: props.categoryTitle})
  }
  return (
    <Pressable style={styles.categoryContainer} onPress={fetchCategory}>
      <Image source={props.categoryImage} style={styles.categoryImage}/>
      <Text style={styles.categoryTitle}>{props.categoryTitle}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    categoryContainer: {
        flex: 1,
        display: "flex",
        alignItems: "center",
        gap: 10,
        marginRight: 35,
    },
    categoryImage: {
        width: 60
    },
    categoryTitle: {
        flex: 1,
        fontSize: 12
    },
})

export default Category