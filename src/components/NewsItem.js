import { useState } from "react"
import { Image, Text, View } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"



const NewsItem = ({ title, img }) => {

    const truncateTitle = (str) => {
        if (str.length > 10) {
            return str.substring(0, 50) + "..."
        }

        return str
    }

    return (
        <View
            style={{
                padding: 15,
                flexDirection: "row",
                borderBottomColor: "grey",
                borderBottomWidth: 0.5,
            }}
        >
            <Image
                style={{ width: 60, height: 60, borderRadius: 5 }}
                source={{ uri: img }}
            />

            <View style={{ marginLeft: 15, flex: 1, justifyContent: "center", }}>
                <Text style={{ fontSize: 18, fontWeight: "700", marginBottom: 10 }}>{truncateTitle(title)}</Text>
                <Text style={{ color: "grey" }}>31/07/1997</Text>
            </View>
        </View>
    )
}

export default NewsItem