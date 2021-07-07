import React ,{useState} from 'react';
import {FlatList, Text ,StyleSheet, Image, View, StatusBar,TouchableOpacity  } from 'react-native';
import { COLORS } from '../constants';
import images from '../constants/images';

const DATA=([
{
  url: images.honey_mustard_chicken_burger, 
  name:'Burger', 
  id:1
},
{
  url: images.pizza, 
  name:'Pizza',
  id:2
},
{
  url: images.tomato_pasta, 
  name:'Pasta',
  id:3
},
{
  url: images.sushi, 
  name:'Sushi',
  id:4
},
{
  url: images.noodle_shop, 
  name:'Noodles',
  id:5
},
{
  url: images.fries_restaurant, 
  name:'Fries',
  id:6
},
{
  url: images.crispy_chicken_burger, 
  name:'Chicken Burger',
  id:7
},
{
  url: images.chicago_hot_dog, 
  name:'Hot Dog',
  id:8
},  
]);
const menuData = [
  {
      id: 1,
      name: " Burger",
      categories: [5, 7],
      photo: images.burger_restaurant_1,
      menu: [
          {
              menuId: 1,
              name: "Crispy Chicken Burger",
              photo: images.crispy_chicken_burger,
              description: "Burger with crispy chicken, cheese and lettuce",
              price: 100
          },
          {
              menuId: 2,
              name: "Crispy Chicken Burger with Honey Mustard",
              photo: images.honey_mustard_chicken_burger,
              description: "Crispy Chicken Burger with Honey Mustard Coleslaw",
              price: 150
          },
          {
              menuId: 3,
              name: "Crispy Baked French Fries",
              photo: images.baked_fries,
              description: "Crispy Baked French Fries",
              price: 80
          }
      ]
  },
  {
      id: 2,
      name: " Pizza",
      categories: [2, 4, 6],
      photo: images.pizza_restaurant,
      menu: [
          {
              menuId: 4,
              name: "Hawaiian Pizza",
              photo: images.hawaiian_pizza,
              description: "Canadian bacon, homemade pizza crust, pizza sauce",
              price: 150
          },
          {
              menuId: 5,
              name: "Tomato & Basil Pizza",
              photo: images.pizza,
              description: "Fresh tomatoes, aromatic basil pesto and melted bocconcini",
              price: 20
          },
          {
              menuId: 6,
              name: "Tomato Pasta",
              photo: images.tomato_pasta,
              description: "Pasta with fresh tomatoes",
              price: 10
          },
          {
              menuId: 7,
              name: "Mediterranean Chopped Salad ",
              photo: images.salad,
              description: "Finely chopped lettuce, tomatoes, cucumbers",
              price: 10
          }
      ]
  },
  {
      id: 3,
      name: "Hotdogs",
      categories: [3],
      photo: images.hot_dog_restaurant,
      menu: [
          {
              menuId: 8,
              name: "Chicago Style Hot Dog",
              photo: images.chicago_hot_dog,
              description: "Fresh tomatoes, all beef hot dogs",
              price: 20
          }
      ]
  },
  {
      id: 4,
      name: "Sushi",
      categories: [8],
      photo: images.japanese_restaurant,
      menu: [
          {
              menuId: 9,
              name: "Sushi sets",
              photo: images.sushi,
              description: "Fresh salmon, sushi rice, fresh juicy avocado",
              price: 50
          }
      ]
  },
  {
      id: 5,
      name: "Cuisine",
      categories: [1, 2],
      photo: images.noodle_shop,
      menu: [
          {
              menuId: 10,
              name: "Kolo Mee",
              photo: images.kolo_mee,
              description: "Noodles with char siu",
              price: 5
          },
          {
              menuId: 11,
              name: "Sarawak Laksa",
              photo: images.sarawak_laksa,
              description: "Vermicelli noodles, cooked prawns",
              price: 8
          },
          {
              menuId: 12,
              name: "Nasi Lemak",
              photo: images.nasi_lemak,
              description: "A traditional Malay rice dish",
              price: 8
          },
          {
              menuId: 13,
              name: "Nasi Briyani with Mutton",
              photo: images.nasi_briyani_mutton,
              description: "A traditional Indian rice dish with mutton",
              price: 8
          },

      ]
  },
  {

      id: 6,
      name: "Desserts",
      categories: [9, 10],
      photo: images.kek_lapis_shop,
      menu: [
          {
              menuId: 12,
              name: "Teh c Peh",
              photo: images.teh_c_peng,
              description: "Three Layer Teh C Peng",
              price: 2
          },
          {
              menuId: 13,
              name: "Icy",
              photo: images.ice_kacang,
              description: "Icy cold",
              price: 3
          },
          {
              menuId: 14,
              name: "cakes",
              photo: images.kek_lapis,
              description: "cakes",
              price: 20
          }
      ]

  }


]

const DishCategory = ({navigation}) => 
{
  const [categories, setCategories] = useState(DATA)
  const [selectedCategory, setSelectedCategory] = useState(null)
  const [selectedMenu, setSelectedMenu] = useState(menuData)
  
  function onSelectCategory(category) {
    //filter restaurant
    let menuList = menuData.filter(e => e.categories.includes(category.id))
    setSelectedMenu(menuList)
    setSelectedCategory(category)
    }
function getCategoryNameById(id) {
    let category = categories.filter(a => a.id == id)
    if (category.length > 0)
      return category[0].name
        return ""
    }

  function getCategories(){
    const renderItem=({item})=> {
      return(    
        
          <TouchableOpacity style={{ width:80,height:110,
            borderRadius:50,alignItems:'center',margin:2,
            backgroundColor: (selectedCategory?.id == item.id) ? COLORS.primary : COLORS.white}}
                    onPress={()=>onSelectCategory(item)}
          >
            <View style={styles.dishcontainer}>
           <Image style={styles.dishimage}source={item.url}/>
         
        <Text style={styles.textstyle}>{item.name}</Text>
        </View>
        </TouchableOpacity>       
        
        )
        }
        return (
          <View >
          <Text style={styles.heading}>  Dishes Category
          </Text>
          <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={DATA}
          renderItem={renderItem} 
          keyExtractor={item=>`${item.id}`}
      />
      </View>

        )
    
  }
  function getMenu(){
    const renderItem = ({item}) =>{
      return(<View>
        <TouchableOpacity
          onPress={()=>navigation.navigate('Menu', {item})}>
        <Image style={styles.dishimage1}source={item.photo}/>
        <Text style={styles.textstyle1}>{item.name}</Text>
        <View style={{flexDirection: 'row' ,marginLeft: 10  }}>
          {
            item.categories.map((categoryId) => {
                    return(<View
                      style={{ flexDirection: 'row' }}
                          key={categoryId}>
                            <Text >{getCategoryNameById(categoryId)}</Text>
                            <Text > . </Text>
                    </View>
                )
              }
            )
          }
      </View>
      </TouchableOpacity>
      </View>      
      )}
    return(
      <View style={styles.containerM}>
      <FlatList
      showsHorizontalScrollIndicator={false}
      data={menuData}
      keyExtractor={item => `${item.id}`}
      renderItem={renderItem}
        />
      </View>
    )
  }
    return(
      <View style={{flex:1}}>
      {getCategories()}
      {getMenu()}
      </View>
      )
}    

const styles = StyleSheet.create({
    container: {
      justifyContent:'center',
      alignItems:'center',
      borderRadius:30,
      backgroundColor:COLORS.primary,
    },
    containerM: {
      justifyContent:'center',
      alignItems:'center',
      borderRadius:30,
      marginTop:-60
     },
    heading:{
      fontSize:20,
      fontWeight:'bold',
      color:COLORS.primary,
    },
    flatimg:{
      width:100,
      height:100,
      resizeMode:'cover',
      borderWidth:1,
      borderColor:'#919911'
    },
    dishcontainer:{
      width:80,
      height:110,
      borderRadius:40,
      justifyContent:'center',
    },
    dishimage:{
      justifyContent:'center',
      alignItems:'center',
      marginLeft:15,
      width:50,
      height:50,
      borderRadius:25,
      resizeMode:"cover"
    },
    textstyle:{
      textAlign:'center', 
      fontWeight:"bold",
      fontSize:14,
      color:'black',
    },
    dishcontainer1:{
      backgroundColor:'#FFF',
      marginLeft:5,
      marginRight:1,
      borderRadius:40,
      justifyContent:'center', 
    },
    dishimage1:{
      justifyContent:'center',
      marginLeft:4,
      width:380,
      height:200,
      borderRadius:50, 
    },
    textstyle1:{
      textAlign:'center', 
      fontWeight:"bold",
      fontSize:16,
      color:'black',
    },

    });
  
    export default DishCategory