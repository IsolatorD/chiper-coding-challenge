import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { HomeScreen, NewsDetails } from "../screens";
import { MainNavigationParamList } from "../interfaces/navigation";

const Stack = createNativeStackNavigator<MainNavigationParamList>()

const MainNavigator:React.FC = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{
            title: 'reddit/r/pics'
          }}
        />
        <Stack.Screen
          name="NewsDetails"
          component={NewsDetails}
          options={({ route }) => ({
            title: route?.params?.title,
            animation:'slide_from_right'
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator