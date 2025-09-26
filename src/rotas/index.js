import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "../home";
import details from "../details";
// import Pesquisar from "../paginas/Search";

export default function Rotas() {

    const stack = createNativeStackNavigator();
    return(
        <NavigationContainer>
                <stack.Navigator  >
                    <stack.Screen name="Home" component={Home}  options={{ headerShown: false }}  />
                    <stack.Screen name="Details" component={details}  options={{ headerShown: false }} /> 
                </stack.Navigator>

        </NavigationContainer>
    ) 
}