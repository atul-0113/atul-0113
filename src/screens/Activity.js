import React, {useState} from 'react';
import {
  Text,
  Image,
  View,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
//import Header from '../components/Header'
//import Banner from '../components/Banner'
//import SearchDish from '../components/SearchDish'
import DishCategory from '../components/dishcategory';
import User from './User';
import Menu from './Menu';
import {COLORS, icons, images} from '../constants';
import { Item } from 'native-base';

const Ham = createDrawerNavigator();

const BANNER = [
  {url: require('../images/food1.jpg'), name: '1'},
  {url: require('../images/food2.jpg'), name: '2'},
  {url: require('../images/food3.jpg'), name: '3'},
  {url: require('../images/food4.jpg'), name: '4'},
  {url: require('../images/food5.jpg'), name: '5'},
];
const DATA = [
  {
    url: images.honey_mustard_chicken_burger,
    name: 'Burger',
    id: 1,
  },
  {
    url: images.pizza,
    name: 'Pizza',
    id: 2,
  },
  {
    url: images.tomato_pasta,
    name: 'Pasta',
    id: 3,
  },
  {
    url: images.sushi,
    name: 'Sushi',
    id: 4,
  },
  {
    url: images.noodle_shop,
    name: 'Noodles',
    id: 5,
  },
  {
    url: images.fries_restaurant,
    name: 'Fries',
    id: 6,
  },
  {
    url: images.crispy_chicken_burger,
    name: 'Chicken Burger',
    id: 7,
  },
  {
    url: images.chicago_hot_dog,
    name: 'Hot Dog',
    id: 8,
  },
];
const menuData = [
  {
    menuId: 1,
    name: 'Crispy Chicken Burger',
    photo: images.crispy_chicken_burger,
    description: 'Burger with crispy chicken, cheese and lettuce',
    price: 100,
    categories: [1,2]
  },
  {
    menuId: 2,
    name: 'Crispy Chicken Burger with Honey Mustard',
    photo: images.honey_mustard_chicken_burger,
    description: 'Crispy Chicken Burger with Honey Mustard Coleslaw',
    price: 150,
    categories: [3,4],
  },
  {
    menuId: 3,
    name: 'Crispy Baked French Fries',
    photo: images.baked_fries,
    description: 'Crispy Baked French Fries',
    price: 80,
    categories: [5,6],
  },
  {
    menuId: 4,
    name: 'Hawaiian Pizza',
    photo: images.hawaiian_pizza,
    description: 'Canadian bacon, homemade pizza crust, pizza sauce',
    price: 150,
    categories: [7,8],
  },
  {
    menuId: 5,
    name: 'Tomato & Basil Pizza',
    photo: images.pizza,
    description: 'Fresh tomatoes, aromatic basil pesto and melted bocconcini',
    price: 20,
    categories: [1,3],
  },
  {
    menuId: 6,
    name: 'Tomato Pasta',
    photo: images.tomato_pasta,
    description: 'Pasta with fresh tomatoes',
    price: 10,
    categories: [4,6],
  },
  {
    menuId: 7,
    name: 'Mediterranean Chopped Salad ',
    photo: images.salad,
    description: 'Finely chopped lettuce, tomatoes, cucumbers',
    price: 10,
    categories: [7,8],
  },
  {
    menuId: 8,
    name: 'Chicago Style Hot Dog',
    photo: images.chicago_hot_dog,
    description: 'Fresh tomatoes, all beef hot dogs',
    price: 20,
    categories: [1,8],
  },
  {
    menuId: 9,
    name: 'Sushi sets',
    photo: images.sushi,
    description: 'Fresh salmon, sushi rice, fresh juicy avocado',
    price: 50,
    categories: [2,7],
  },
  {
    menuId: 10,
    name: 'Kolo Mee',
    photo: images.kolo_mee,
    description: 'Noodles with char siu',
    price: 5,
    categories: [3,6],
  },
  {
    menuId: 11,
    name: 'Sarawak Laksa',
    photo: images.sarawak_laksa,
    description: 'Vermicelli noodles, cooked prawns',
    price: 8,
    categories: [4,5],
  },
  {
    menuId: 12,
    name: 'Nasi Lemak',
    photo: images.nasi_lemak,
    description: 'A traditional Malay rice dish',
    price: 8,
    categories: [3,8],
  },
  {
    menuId: 13,
    name: 'Nasi Briyani with Mutton',
    photo: images.nasi_briyani_mutton,
    description: 'A traditional Indian rice dish with mutton',
    price: 8,
    categories: [4,5],
  },
  {
    menuId: 14,
    name: 'Teh c Peh',
    photo: images.teh_c_peng,
    description: 'Three Layer Teh C Peng',
    price: 2,
    categories: [2,7],
  },
  {
    menuId: 15,
    name: 'Icy',
    photo: images.ice_kacang,
    description: 'Icy cold',
    price: 3,
    categories: [5,8],
  },
  {
    menuId: 16,
    name: 'cakes',
    photo: images.kek_lapis,
    description: 'cakes',
    price: 20,
    categories: [8],
  },
];

const Activity = ({navigation}) => {
  const navigateTo=  () => {
    navigation.navigate('Menu')
  }

  {
    /*useStates */
  }
  const [categories, setCategories] = useState(DATA);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedMenu, setSelectedMenu] = React.useState(menuData);

  {
    /*Category Function and filter */
  }
  function onSelectCategory(item) {
    //filter menu
    let menuList = menuData.filter(e => e.categories.includes(item.id))
    
    setSelectedCategory(item)
    setSelectedMenu(menuList)
  }
  {
    /* category name for Menu*/
  }
  function getCategoryNameById(id) {
    let category = categories.filter(a => a.id == id);

    if (category.length > 0) 
    return category[0].id;

    return '';
  }
  //Navigation to another Screen
  
  {
    /*hamburger Menu */
  }
  function hamMenu() {
    return (
      <NavigationContainer>
        <Ham.Navigator screenOptions={{headerShown: true}}>
          <Ham.Screen name="Home" component={Menu} />

          <Ham.Screen name="Profile" component={User} />
        </Ham.Navigator>
      </NavigationContainer>
    );
  }

  {
    /* header container */
  }
  function header() {
    return (
      <View style={styles.header}>
        <TouchableOpacity
        // onPress={()=>hamMenu(navigation.openDrawer())}
        >
          <Image
            source={require('../images/hamburger.png')}
            style={{width: 50, height: 50}}
          />
        </TouchableOpacity>
        <Image
          source={require('../images/splashLogo.png')}
          style={styles.icon}
        />
        <Text style={styles.headerimg}>Mame Da Dhaba</Text>
        <Image
          source={require('../images/bell.png')}
          style={styles.notification}
        />
      </View>
    );
  }

  {
    /* sliding banner */
  }
  function Banner() {
    return (
      <View style={styles.container}>
        <FlatList
          horizontal={true}
          data={BANNER}
          renderItem={({item}) => (
            <Image style={styles.flatimg} source={(url = item.url)} />
          )}
          keyExtractor={item => item.name}
        />
      </View>
    );
  }

  {
    /* search dish */
  }
  function searchDish() {
    return (
      <View style={styles.search}>
        <Image source={icons.search} 
        style={{width:20, 
          height:20,
          resizeMode:'contain',
          paddingHorizontal:20}}/>
        <TextInput style={{fontSize:20}}
        placeholder="Search Dishes"
        placeholderTextColor={COLORS.primary}
        
      />
      </View>
    );
  }

  {
    /* render Category Flatlist*/
  }
  function getCategories() {
    const renderItem = ({item}) => {
      return (
        <TouchableOpacity
          style={{
            width: 80,
            height: 110,
            borderTopLeftRadius: 70,
            borderTopRightRadius: 70,
            borderBottomLeftRadius: 70,
            borderBotomRightRadius: 40,
            alignItems: 'center',
            marginLeft: 10,
            backgroundColor:
              selectedCategory?.id == item.id ? COLORS.primary : COLORS.white,
          }}
          onPress={() => onSelectCategory(item)}>
          <View style={styles.dishcontainer}>
            <Image style={styles.dishimage} source={item.url} />

            <Text style={styles.textstyle}>{item.name}</Text>
          </View>
        </TouchableOpacity>
      );
    };
    return (
      <View>
        <Text style={styles.heading}> Dishes Category</Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
          
        />
      </View>
    );
  }

  {
    /*render Menu with CategoryList */
  }
  function getMenu() {
    const renderItem = ({item}) => {
      return (
        <View>
          <TouchableOpacity
            onPress={navigateTo}>
            <Image style={styles.dishimage1} source={item.photo} />
            <Text style={styles.textstyle1}>{item.name}</Text>
            <View style={{flexDirection: 'row', marginLeft: 10}}>
              {/* {item.categories.map(categoryId => {
                return (
                  <View style={{flexDirection: 'row'}} key={categoryId}>
                    <Text>{getCategoryNameById(categoryId)}</Text>
                    <Text> . </Text>
                  </View>
                );
              })} */}
            </View>
          </TouchableOpacity>
        </View>
      );
    };
    return (
      <View style={styles.containerM}>
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={selectedMenu}
          keyExtractor={item => `${item.menuId}`}
          renderItem={renderItem}
        />
      </View>
    );
  }

  return (
    <View style={styles.tabs}>
      {header()}
      <View style={styles.banner}>
        {Banner()}
        
        <View style={{flex: 1,}}>
        {searchDish()}
          {getCategories()}
          {getMenu()}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  tabs: {
    flex:1,
    backgroundColor:'#FFFFC2',
   
  },
  banner: {
   
    height: 400,
    alignItems: 'center',
  },

  // {Header()}
  header: {
    marginTop: 5,
    padding: 5,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: '#FFF',
  },
  headerimg: {
    paddingTop: 5,
    width: '65%',
    height: 40,
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 25,
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderColor: 'black',
    borderWidth: 1,
    marginLeft: 5,
  },
  notification: {
    alignItems: 'center',
    width: 40,
    height: 40,
    marginTop: 5,
  },
  // {searchDish()}
  search: {
    flexDirection:'row',
    width:400,
    height: 45,
    marginBottom: 10,
    alignContent:'center',
    alignItems:'center',
    marginHorizontal: 10,

    backgroundColor: COLORS.transparent,//'#FFE47A'
    borderWidth:1,
    borderBottomColor:COLORS.primary,
    borderRadius:10,
    shadowOpacity:1.15,
    },
  // {Banner()}
  container: {
    margin: 10,
    width: 400,
    height: 150,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#919911',
    borderRadius: 30,
  },
  flatimg: {
    width: 400,
    height: 150,
    resizeMode: 'cover',
    borderWidth: 1,
    borderColor: '#919911',
  },
  // {dishCatgory()}
  dishcontainer: {
    width: 80,
    height: 110,
    borderRadius: 40,
    justifyContent: 'center',
    marginHorizontal:20,
    
  },
  dishimage: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 15,
    width: 50,
    height: 50,
    borderRadius: 25,
    resizeMode: 'cover',
  },
  textstyle: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    color: 'black',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    color: COLORS.primary,
    textAlign:'center'
  },
  // {menuContainer()}
  containerM: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 30,
    marginTop: -60,
  },
  dishimage1: {
    justifyContent: 'center',
    marginLeft: 4,
    width: 380,
    height: 200,
    borderRadius: 50,
  },
  textstyle1: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    color: 'black',
  },
});

export default Activity;
