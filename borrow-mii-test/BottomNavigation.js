
import { NavigationContainer, TabActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from './HomeScreen';
import UserBorrowedInventory from './UserBorrowedInventory';
import UserPersonalInventory from './UserPersonalInventory'
import DetailsScreen from './screens/DetailsScreen';
import Ionicons from 'react-native-vector-icons/Ionicons'


const Tab = createBottomTabNavigator();
const homeName = "Home";
const uBorrowedName = "Borrowed"
const uInvName = "MyInventory"

export default function BottomNavigation({navigation}) {
   

    return (
        <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;
            if (rn === homeName) {
              iconName = focused ? 'home' : 'home'
              console.log("HOME PRESSED")
            }
            else if (rn === uInvName) {
              iconName = focused? 'list' : 'list-outline'
            }
            else if (rn === uBorrowedName) {
              iconName = focused? 'settings' : 'settings-outline'
            }
            return  <Ionicons name={iconName} color={color} size={size}></Ionicons>

          },
          tabBarActiveTintColor: 'rgb(255, 82, 82)',
          tabBarInactiveTintColor: 'gray',

        })}>
        <Tab.Screen name={homeName} component={HomeScreen} />
        <Tab.Screen name={uBorrowedName} component={UserBorrowedInventory} />
          <Tab.Screen name={uInvName} component={UserPersonalInventory} /> 
          {/* <Tab.Screen name={"Details"} components={DetailsScreen}></Tab.Screen> */}
      </Tab.Navigator>
    )
}