import React from 'react'
import { createStackNavigator, create } from 'react-navigation-stack'
import { createBottomTabNavigator } from 'react-navigation-tabs'
import HomeScreen from '../screens/HomeScreen'
const Discover = require('../assets/discover-1.png')
const Notes = require('../assets/notes-1.png')
const Matches = require('../assets/matches-1.png')
const Profile = require('../assets/profile-1.png')
// import SectionScreen from './SectionScreen'
import { Ionicons } from '@expo/vector-icons'
import { Image, Text, View } from 'react-native'
import styled from 'styled-components'
// import CoursesScreen from '../screens/CoursesScreen'
// import ProjectsScreen from '../screens/ProjectsScreen'

const activeColor = "#4775f2"
const inactiveColor = "#b8bece"

const HomeStack = createStackNavigator({
    Home: HomeScreen,
    // Section: SectionScreen
})
HomeStack.navigationOptions = ({ navigation }) => {
    let tabBarVisible = true;
    const routeName = navigation.state.routes[navigation.state.index].routeName
    if (routeName == "Section") {
        tabBarVisible = false
    }
    return {
        tabBarVisible,
        tabBarLabel: "Discover",
        tabBarOptions: {
            activeTintColor: '#000',
        },
        tabBarIcon: ({ focused }) => {
            return <Image source={Discover} />
        }
    }
}


const CoursesStack = createStackNavigator({
    Courses: HomeScreen
})
CoursesStack.navigationOptions = {
    tabBarLabel: "Notes",
    activeTintColor: "#000",
    navigationOptions: {
        header: false
    },
    tabBarIcon: ({ focused }) => {
        return <View style={{ position: "relative", }}>
            <Pop>
                <Text style={{ color: "#fff", fontSize: 11 }}>
                    9
                </Text>
            </Pop>
            <Image source={Notes} />
        </View>
    }
}
const ProjectStack = createStackNavigator({
    Projects: HomeScreen
})
ProjectStack.navigationOptions = {
    tabBarLabel: "Matches",
    activeTintColor: "#000",
    tabBarIcon: ({ focused }) => {
        return <View style={{ position: "relative" }}>
            <Pop style={{ width: 40 }}>
                <Text style={{ color: "#fff", fontSize: 11 }}>
                    50+
                </Text>
            </Pop>
            <Image source={Matches} />
        </View>
    }
}
const SomeStack = createStackNavigator({
    Projects: HomeScreen
})
SomeStack.navigationOptions = {
    tabBarLabel: "Profile",
    activeTintColor: "#000",
    tabBarIcon: ({ focused }) => {
        return <Image source={Profile} />
    }
}
const bottomNavigatorConfigs = {
    tabBarOptions: {
        style: { paddingTop: 20 }
    },
};
const TabNavigator = createBottomTabNavigator({
    HomeStack,
    CoursesStack,
    ProjectStack,
    SomeStack
}, bottomNavigatorConfigs)

const Pop = styled.View`
    position: absolute;
    border-radius: 50;
    z-index: 1;
    left: 12;
    top: -8;
    height: 20px;
    width: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 4px;
    background-color: #8C5CFB;
`

export default TabNavigator