import { Image, ScrollView, StyleSheet, Text, View } from "react-native"




const Post = () => {

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
            marginHorizontal:15,
            marginVertical:20,
            fontSize:15
        }
    })

    return (
        <ScrollView>
            <View style={styles.imgContainer}>
                <Image
                    style={styles.img}
                    source={{ uri: "https://loremflickr.com/cache/resized/3935_15609374646_072786e779_c_640_480_nofilter.jpg" }}
                />
            </View>
            <View style={styles.titleContainer}>
                <Text style={styles.title}>
                    Necessitatibus illum et rerum est facilis voluptas asperiores sint ratione.
                </Text>
            </View>
            <View style={styles.newsContainer}>
                <Text style={styles.news}>
                    Unde velit et. Qui rerum tempore et odit et dolorum odio quidem quia. Enim dolore saepe sed corporis. Molestiae quibusdam doloribus similique ipsa vel. Qui reiciendis dolore maxime molestiae sed quas qui aliquam. Sit ipsa quos aliquam deleniti. Quo eaque qui id voluptatem voluptatibus et expedita sint voluptatem. Commodi laudantium quia. Quos optio ad aliquam doloremque veritatis consectetur et nihil quis. Velit necessitatibus sit aut qui repudiandae. Ut suscipit aut sit. Praesentium exercitationem eveniet est ea necessitatibus est et rerum. Ut quo et harum.
                    Unde velit et. Qui rerum tempore et odit et dolorum odio quidem quia. Enim dolore saepe sed corporis. Molestiae quibusdam doloribus similique ipsa vel. Qui reiciendis dolore maxime molestiae sed quas qui aliquam. Sit ipsa quos aliquam deleniti. Quo eaque qui id voluptatem voluptatibus et expedita sint voluptatem. Commodi laudantium quia. Quos optio ad aliquam doloremque veritatis consectetur et nihil quis. Velit necessitatibus sit aut qui repudiandae. Ut suscipit aut sit. Praesentium exercitationem eveniet est ea necessitatibus est et rerum. Ut quo et harum.
                    Unde velit et. Qui rerum tempore et odit et dolorum odio quidem quia. Enim dolore saepe sed corporis. Molestiae quibusdam doloribus similique ipsa vel. Qui reiciendis dolore maxime molestiae sed quas qui aliquam. Sit ipsa quos aliquam deleniti. Quo eaque qui id voluptatem voluptatibus et expedita sint voluptatem. Commodi laudantium quia. Quos optio ad aliquam doloremque veritatis consectetur et nihil quis. Velit necessitatibus sit aut qui repudiandae. Ut suscipit aut sit. Praesentium exercitationem eveniet est ea necessitatibus est et rerum. Ut quo et harum.
                </Text>
            </View>
        </ScrollView>
    )
}

export default Post