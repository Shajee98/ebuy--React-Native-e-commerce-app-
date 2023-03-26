import { ImageSourcePropType } from "react-native"

export type RootStackParamList = {
    ProductDetails: {image: ImageSourcePropType, desc?: string, price?: number, reviews?: number, avgRating?: number, title?: string},
    CategoryProducts: {categoryTitle: string}
    Home: undefined
}