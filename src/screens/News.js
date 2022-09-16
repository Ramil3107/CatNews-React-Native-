import axios from "axios"
import { useEffect, useState } from "react"
import { ActivityIndicator, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { FlatList } from "react-native-gesture-handler"
import NewsItem from "../components/NewsItem"



const News = ({ navigation }) => {

    const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: "center",
            alignItems: "center"
        }
    })

    const [news, setNews] = useState()
    const [loading, setLoading] = useState(false)

    const getNews = async () => {
        setLoading(true)
        const response = await axios.get("https://6321d90d82f8687273baba5a.mockapi.io/enjoy/news/")
        const data = response.data
        setNews(data)
        setLoading(false)
    }

    useEffect(() => {
        getNews()
    }, [])

    return (
        <>
            {
                loading ?
                    <View style={styles.container}>
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                    :
                    <FlatList
                        data={news}
                        renderItem={({ item }) => (
                            <TouchableOpacity onPress={() => navigation.navigate("Post")}>
                                <NewsItem
                                    title={item.title}
                                    img={item.img}
                                />
                            </TouchableOpacity>
                        )}
                        keyExtractor={item => item.id}
                    />
            }
        </>
    )
}

export default News