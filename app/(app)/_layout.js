import { Tabs } from "expo-router";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import MaterialIcons from "@expo/vector-icons/MaterialIcons";

export default AppTabsLayOut = () => {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: "orange",
        tabBarInactiveTintColor: "grey",
      }}
    >
      <Tabs.Screen
        name="products"
        options={{
          title: "Produits",
          tabBarIcon: ({ color }) => {
            return <FontAwesome5 name="carrot" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="camera"
        options={{
          title: "Caméra",
          tabBarIcon: ({ color }) => {
            return <FontAwesome name="camera" size={24} color={color} />;
          },
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favoris",
          tabBarIcon: ({ color }) => {
            return <MaterialIcons name="favorite" size={24} color={color} />;
          },
        }}
      />
    </Tabs>
  );
};
