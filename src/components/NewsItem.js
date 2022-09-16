import { useState } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"



const NewsItem = ({ title, img, date }) => {

    const styles = StyleSheet.create({
        container: {
            padding: 15,
            flexDirection: "row",
            borderBottomColor: "grey",
            borderBottomWidth: 0.5,
            borderRadius: 10,
            height: 100
        },
        img: {
            width: 70,
            height: 70,
            borderRadius: 5
        },
        textContainer: {
            marginLeft: 15,
            flex: 1,
            justifyContent: "center",
        },
        title: {
            fontSize: 18,
            fontWeight: "700",
            marginBottom: 10
        },
        date: {
            color: "grey"
        }
    })

    const truncateTitle = (str) => {
        if (str.length > 10) {
            return str.substring(0, 50) + "..."
        }
        return str
    }

    const truncateDate = (str) => {
        const date = str.substring(0, 10)
        const time = str.substring(11,16)
        return date + " " + "at" + " " + time
    }

    return (
        <View
            style={styles.container}
        >
            <Image
                style={styles.img}
                source={{ uri: img }}
            />

            <View style={styles.textContainer}>
                <Text style={styles.title}>
                    {truncateTitle(title)}
                </Text>
                <Text style={styles.date}>
                    {truncateDate(date)}
                </Text>
            </View>

        </View>
    )
}

export default NewsItem