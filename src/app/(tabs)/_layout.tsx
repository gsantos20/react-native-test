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
            backgroundColor: THEME.COLORS.GRAY_200,
          },
          tabBarIcon: ({size, color }) => (
            <MaterialIcons name="home" size={size} color={color} />
          )
        }}
      />
    </Tabs>
  )
}
