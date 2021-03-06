import { Ionicons } from '@expo/vector-icons';
<<<<<<< HEAD:WhatsappClone/navigation/MainTabNavigator.tsx
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
=======
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
>>>>>>> parent of 2b80ce0 (Tabs Created):WhatsappClone/navigation/BottomTabNavigator.tsx
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';

<<<<<<< HEAD:WhatsappClone/navigation/MainTabNavigator.tsx
const MainTab = createMaterialTopTabNavigator<BottomTabParamList>();
=======
const BottomTab = createBottomTabNavigator<BottomTabParamList>();
>>>>>>> parent of 2b80ce0 (Tabs Created):WhatsappClone/navigation/BottomTabNavigator.tsx

export default function BottomTabNavigator() {
    const colorScheme = useColorScheme();

    return (
        <MainTab.Navigator
            initialRouteName="TabOne"
            tabBarOptions={{
                activeTintColor: Colors[colorScheme].background,
                style: {
                    backgroundColor: Colors[colorScheme].tint,
                },
                indicatorStyle: {
                    backgroundColor: Colors[colorScheme].background,
                    height: 4,
                }

            }}>
            <MainTab.Screen
                name="TabOne"
                component={TabOneNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
            <MainTab.Screen
                name="TabTwo"
                component={TabTwoNavigator}
                options={{
                    tabBarIcon: ({ color }) => <TabBarIcon name="ios-code" color={color} />,
                }}
            />
        </MainTab.Navigator>
    );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
    return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
    return (
        <TabOneStack.Navigator>
            <TabOneStack.Screen
                name="TabOneScreen"
                component={TabOneScreen}
                options={{ headerTitle: 'Tab One Title' }}
            />
        </TabOneStack.Navigator>
    );
}

const TabTwoStack = createStackNavigator<TabTwoParamList>();

function TabTwoNavigator() {
    return (
        <TabTwoStack.Navigator>
            <TabTwoStack.Screen
                name="TabTwoScreen"
                component={TabTwoScreen}
                options={{ headerTitle: 'Tab Two Title' }}
            />
        </TabTwoStack.Navigator>
    );
}
