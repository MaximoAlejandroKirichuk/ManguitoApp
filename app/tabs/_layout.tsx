import { Colors } from '@/constants/Color';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs } from 'expo-router';
import React from 'react';

const TabsLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: Colors.background,
                borderTopColor: '#E0DAD0',
            },
            tabBarActiveTintColor: Colors.primary_light,
            tabBarInactiveTintColor: 'rgba(94, 70, 56, 0.4)',
            headerStyle: {
                backgroundColor: Colors.background,
            },
            headerTitleStyle: {
                color: '#5E4638',
                fontSize: 22,
                fontWeight: 'bold',

            },
            headerTintColor: Colors.primary_light, // Color de flecha "back" o íconos
            headerShadowVisible: false,
            headerTitleAlign: 'center',

        }}>
            <Tabs.Screen
                name="profile/index"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="user" color={color} />,
                }}
            />
            <Tabs.Screen
                name="home/index"
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} />,
                }}
            />

            <Tabs.Screen
                name="(stack)"
                options={{
                    title: 'Money',
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="money" color={color} />,
                }}
            />
        </Tabs>
    )
}

export default TabsLayout