import axios from "axios"
import { useState } from "react"
import { Image, ScrollView, StyleSheet, Text, View } from "react-native"




const Post = ({ route }) => {

    const styles = StyleSheet.create({
        img: {
            width: 350,
            height: 250,
            borderRadius: 5,
            margin: 20
        },
        imgContainer: {
            justifyContent: "center",
            alignItems: "center",
            borderBottomColor: "grey",
            borderBottomWidth: 0.5
        },
        titleContainer: {
            borderBottomColor: "grey",
            borderBottomWidth: 0.5
        },
        title: {
            fontSize: 20,
            fontWeight: "600",
            textAlign: "left",
            margin: 10
        },
        newsContainer: {

        },
        news: {
            marginHorizontal: 15,
            marginVertical: 20,
            fontSize: 15
        }
    })

    const { title, news, img, date } = route.params;
    const [post, setPost] = useState()
    const [loading, setLoading] = useState(false)

    return (
        <ScrollView>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.img}
                    source={{ uri: img }}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    {title}
                </Text>
            </View>
            <View style={styles.newsContainer}>
                <Text style={styles.news}>
                    {news}
                </Text>
            </View>
        </ScrollView>
    )
}

export default Post