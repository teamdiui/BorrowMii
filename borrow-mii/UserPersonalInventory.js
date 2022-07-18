import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,NavigationContainer,Drawer } from 'react-native';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Personal Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f64',
    title: 'Second Personal Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d75',
    title: 'Third Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d78',
    title: 'Fourth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29g2',
    title: 'Fifth Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d7fg',
    title: 'Sixth Item',
    },
    {
        id: '58694a0f-3da1-471f-bd96-145571e29aaft',
        title: 'Seventh Item',
    },
    {
        id: '59694a0f-3da1-471f-bd96-145571e29aaft',
        title: 'Eight Item',
      },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29ddh',
    title: 'Last Item',
  },
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const UserPersonalInventory = ({ navigation }) => {
    
    
    
    const handleListPress = (item) => {
        //console.log("clicked: "+item.title)
        navigation.navigate("DetailsScreen",{itemData:item.title})

    }
    return (
        // <Drawer.Navigator>
        // <Drawer.Screen name="Home" component={Home} />
        // <Drawer.Screen name="Profile" component={Profile} />
        // <Stack.Screen name="Settings" component={Settings} />
    <SafeAreaView style={styles.container}>
      <FlatList
        data={DATA}
        renderItem={({ item, index }) => (
            <TouchableOpacity 
              key={index.toString()} 
                onPress={() => {
                    
                    handleListPress(item)

                }}
            >
                <Item title={item.title}>
                </Item>
            </TouchableOpacity>
          )}
        keyExtractor={item => item.id}
      />
            </SafeAreaView>
// </Drawer.Navigator>        

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#80cbc4',
    padding: 20,
    marginVertical: 8,
      marginHorizontal: 16,
      borderRadius: 16,
      padding: 15
  },
  title: {
    fontSize: 32,
  },
});

export default UserPersonalInventory;