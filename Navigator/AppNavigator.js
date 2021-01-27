import { createAppContainer } from 'react-navigation'
import { createStackNavigator, TransitionPresets } from 'react-navigation-stack'
import HomeScreen from '../screens/HomeScreen'
import TabNavigator from './TabNavigator'

const AppNavigator = createStackNavigator({
    Home: HomeScreen,
}, {
    ...TransitionPresets.ScaleFromCenterAndroid
})

export default createAppContainer(TabNavigator)