import { StyleSheet, Text, View,Pressable } from 'react-native';


export default function DetailsScreen({ route,navigation}) {
    //console.log(itemData)
    const { itemData } = route.params;

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>This is a subscreen for: {itemData}</Text>
      </View>
    );
  }