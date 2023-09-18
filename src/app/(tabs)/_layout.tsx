import { MaterialIcons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { THEME } from "theme";

export default function TabRoutesLayout(){
  return (
    <Tabs>
      <Tabs.Screen
        name="index"
        options={{
          title: 'To do List',
          headerStyle: {
            backgroundColor: THEME.COLORS.GRAY_400,
          },
          headerTintColor: 'white',
          headerStatusBarHeight: 15,
          headerTitleStyle: {
            flex: 1,
            alignSelf: 'center',
            fontWeight: 'bold'
          },
          headerTitleAlign: 'center',
          tabBarIcon: ({size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  )
}
