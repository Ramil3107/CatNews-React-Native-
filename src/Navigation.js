import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import News from "./screens/News";
import Post from "./screens/Post";



const Stack = createNativeStackNavigator()


const Navigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="News" component={News} options={{ title: "News" }} />
                <Stack.Screen name="Post" component={Post} options={{ title: "Post" }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}


export default Navigation