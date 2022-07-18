import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Pressable } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons'
import DetailsScreen from './screens/DetailsScreen';
export default function HomeScreen({navigation}) {

  const handlePress = () => {
      //console.log("button pressed");
      //navigation.navigate('Borrowed',{name:'Jane'})
      //navigation.navigate("Details")
  }
  return (
    <View style={background.container}>
          <StatusBar style="auto" />
        
          <View style={div.container}></View>
          
      <View style={flexbox.container}>
              <Text>HELLO WORLD I AM AN APP DEVELOPER NOW V3</Text>
              
      </View>
      <View style={div.container}></View>
      
      <View style={flexbox.container}>
        <Text>Press the Button Below For Cool stuff: </Text>
        <Pressable
        onPress={() => {
          //setTimesPressed((current) => current + 1);
            handlePress()
        }}
        style={({ pressed }) => [
          {
            backgroundColor: pressed
              ? 'rgb(210, 230, 255)'
              : 'rgb(255, 82, 82)'
          },
          styles.wrapperCustom
        ]}>
        {({ pressed }) => (
          <Text style={styles.text}>
            {pressed ? 'Pressed!' : 'Press Me'}
          </Text>
        )}
      </Pressable>
      </View>
      <View style={div.container}></View>
      <View style={flexbox.container}>
        <Text> Very Long Default Text String To Show Variable Flexbox growth based on internal data</Text>
          </View>
          
          <View style={styles.container}>
      <Ionicons name="md-checkmark-circle" size={32} color="green" />
    </View>
      <View style={div.container}></View>
      </View>
  );
}

const background = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e0f2f1',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const flexbox = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#80cbc4',
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
