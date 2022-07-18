import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import { NavigationContainer, TabActions } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import HomeScreen from './HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import UserBorrowedInventory from './UserBorrowedInventory';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import BottomNavigation from './BottomNavigation';
//import {IconButton} from 'react-native-paper';

//const Stack = createNativeStackNavigator();
const Stack = createNativeStackNavigator();
const bottomNavbar = "BottomNavbar";
export default function App() {
  //console.log("LOADED APP")
  const handleHomePress =() => {
    //console.log("PRESSED HOME")
  }
  return (
    <>
    <NavigationContainer>
    <Stack.Navigator>
        <Stack.Screen
          name={bottomNavbar}
          component={BottomNavigation}
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Home2" component={HomeScreen} /> */}
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
      </Stack.Navigator>
      
    </NavigationContainer>
    </>
   
  );
}

const background = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'dodgerblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const flexbox = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    padding: 6
  },
});
const div = StyleSheet.create({
  container: {
    flex: .25,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
  },
  text: {
    fontSize: 16
  },
  wrapperCustom: {
    borderRadius: 8,
    padding: 6
  },
  logBox: {
    padding: 20,
    margin: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#f0f0f0',
    backgroundColor: '#f9f9f9'
  }
});
