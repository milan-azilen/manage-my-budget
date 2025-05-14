import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { Icon, useTheme } from "native-base";
import React, { FC } from "react";

interface IBottomScreen {
  name: string;
  title: string;
  icon: string;
}
interface IAppBottomNavigation {
  screens: IBottomScreen[];
}
export const AppBottomNavigation: FC<IAppBottomNavigation> = ({ screens }) => {
  const theme = useTheme();
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: theme.colors.primary[900],
      }}
    >
      {screens.map((screen) => {
        return (
          <Tabs.Screen
            name={screen.name}
            options={{
              title: screen.title,
              tabBarIcon: ({ color, size }) => (
                <Icon
                  as={Ionicons}
                  name={screen.icon}
                  color={color}
                  size={size}
                />
              ),
            }}
          />
        );
      })}
    </Tabs>
  );
};
