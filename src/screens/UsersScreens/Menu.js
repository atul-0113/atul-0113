import React, { useState ,useContext } from 'react';
import {
  FlatList,
  Modal,
  Text,
  StyleSheet,
  Image,
  View,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';
import { COLORS, icons, images } from '../../constants';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
// import  {Context}  from '../store/cart';
import {useSelector, useDispatch} from 'react-redux'
import {setOrder} from '../../redux/actions'
import CheckBox from '@react-native-community/checkbox';

const DATA = [
  {
    id: 1,
    url: images.honey_mustard_chicken_burger,
    name: 'Chicken Honey',
    description:
      'This is one of the best Dish of Our Restaurant .We are happy to serve you',
    price: '150',
  },
  {
    id: 2,
    url: images.pizza,
    name: 'Pizza',
    description:
      'this is one of the best Dish of Our Restaurant .We are happy to serve you',
    price: '180',
  },
  {
    id: 3,
    url: images.tomato_pasta,
    name: 'Pasta',
    description:
      'this is one of the best Dish of Our Restaurant .We are happy to serve you',
    price: '100',
  },
  {
    id: 4,
    url: images.sushi,
    name: 'Sushi',
    description:
      'this is one of the best Dish of Our Restaurant .We are happy to serve you',
    price: '120',
  },
  {
    id: 5,
    url: images.noodle_shop,
    name: 'Noodles',
    description:
      'this is one of the best Dish of Our Restaurant .We are happy to serve you',
    price: '150',
  },
  {
    id: 6,
    url: images.fries_restaurant,
    name: 'Fries',
    description:
      'this is one of the best Dish of Our Restaurant .We are happy to serve you',
    price: '80',
  },
  {
    id: 7,
    url: images.crispy_chicken_burger,
    name: 'Chicken Burger',
    description:
      'this is one of the best Dish of Our Restaurant .We are happy to serve you',
    price: '170',
  },
  {
    id: 8,
    url: images.chicago_hot_dog,
    name: 'Hot Dog',
    description:
      'This is one of the best Dish of Our Restaurant .We are happy to serve you',
    price: '180',
  },
  ];

const Menu = ( {navigation} ) => {
  
  //  const [ storeState , updateCart ] = useContext(Context);
  // console.log('store State', storeState)
  
  const navigateTo=  () => {
    navigation.navigate('OrderCart')
  }
  

   const [modalVisible, setModalVisible] = useState(false);
  // const [half, setHalf] = useState(false);
  // const [full, setFull] = useState(false);
  // const [normal, setNormal] = useState(false);
  // const [special, setSpecial] = useState(false);
  // const [butter, setButter] = useState(false);

  // const [orderItems, setOrderItems] = useState([]);

    function onQuantitySelect() {
    if (setHalf == 'true') {
      setFull(!setFull);
    }
    if (setFull == 'true') {
      setHalf(!setHalf);
    }
    }
    //edit Order function 
    function editOrder(action, id, price,name) {
    let orderList = orderItems.slice()
    let item = orderList.filter(a => a.id == id)
   
    if (action == "+") {
      if (item.length > 0) {
        let newQty = item[0].qty + 1
        item[0].qty = newQty
        item[0].total = item[0].qty * price
      } else {
        const newItem = {
          id: id,
          qty: 1,
          price: price,
          total: price,
          name:DATA.name,
          }
        orderList.push(newItem)
      }
      setOrder(orderList)
      // updateCart(orderList)
      //setModalVisible();
    } else {
      if (action=="-" ) {
        if (item[0]?.qty > 0) {
          let newQty = item[0].qty -1
          item[0].qty = newQty
          item[0].total = newQty * price
        }
      }
      setOrderItems(orderList)
      // updateCart(orderList)
    }
    
    
    }
    //Order Quantity function
    function getOrderQty(id) {
      let orderItem = orderItems.filter(a => a.id == id)

      if (orderItem.length > 0) {
        return orderItem[0].qty
      }

      return 0
    }
    //totalSum of Order funtion 
    function sumOrder() {
      let total = orderItems.reduce((a, b) => Number(a) + Number(b.total) ,0)

      return total
    }
    //items in cart
    function getItemCount() {
    let itemCount = orderItems.reduce((a, b) => a + (b.qty || 0), 0)

    return itemCount
    }
    //header
    function header() {
    return (
      <View style={styles.headerContent}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')}>
          <Icon name="keyboard-backspace" size={35} style={styles.back} />
        </TouchableOpacity>
        <View>
          <Text style={{ textAlign: 'right', fontSize: 30, marginLeft: 100 }}>
            
            Menu
          </Text>
        </View>
      </View>
    );
    }
    //cart
    function cart() {
      return (
        <View style={{ flex: 1, alignContent: 'center' }}>
          <View
            style={{
              justifyContent: 'center',
              width: '100%',
              height: 70,
              backgroundColor: COLORS.primary,
              borderRadius: 15,
            }}>
            <View style={{ justifyContent: 'space-around', 
                          flexDirection: 'row', 
                          alignItems: 'center' }}>
              <View>
                <Text style={{ marginLeft: -20, 
                              justifyContent: 'center', 
                              fontSize: 18, 
                              color: 'white' }}>
                                Items: {getItemCount()}</Text>
                <Text style={{ justifyContent: 'center', 
                              fontSize: 16,
                              marginLeft: -20, 
                              color: 'white',
                              fontWeight:"bold" }}>
                                Total : {sumOrder()}₹</Text>
              </View>
              <TouchableOpacity style={{ alignItems: 'flex-end' }}
                    onPress={navigateTo}
              >
                <Text style={{ alignItems: 'center', 
                              fontSize: 15, 
                              color: 'white', 
                              paddingBottom: 10 }}>
                                Place Order</Text>
                <Image source={icons.basket} 
                        style={{ width: 30, 
                        height: 30, 
                        marginRight: 10, 
                        tintColor: 'white' }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>

      )
    }
    function modal() {
      return (
        <View style={styles.modalContainerView}>
          <Modal animationType="slide" transparent={true} visible={modalVisible}>
            <View style={styles.modalView}>
              <TouchableOpacity
                style={{ marginBottom: 10, marginLeft: -350, marginTop: -30 }}
                onPress={() => setModalVisible(!setModalVisible)}>
                <Image
                  source={images.closecross}
                  style={{ width: 20, height: 20, tintColor: 'white' }}
                />
              </TouchableOpacity>
              <ScrollView>
                <Text style={styles.modalText}>Select Quantity</Text>
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={half}
                    onValueChange={setHalf}
                    tintColors={{ true: 'white', false: '#333' }}
                  />
                  <Text> Half</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={full}
                    onValueChange={setFull}
                    tintColors={{ true: 'white', false: '#333' }}
                  />
                  <Text> Full</Text>
                </View>
                <Text style={styles.modalText}>Extras</Text>
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={normal}
                    onValueChange={setNormal}
                    tintColors={{ true: 'white', false: '#333' }}
                  />
                  <Text> Normal</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={special}
                    onValueChange={setSpecial}
                    tintColors={{ true: 'white', false: '#333' }}
                  />
                  <Text> Special</Text>
                </View>
                <View style={{ flexDirection: 'row' }}>
                  <CheckBox
                    value={butter}
                    onValueChange={setButter}
                    tintColors={{ true: 'white', false: '#333' }}
                  />
                  <Text> Butter Special</Text>
                </View>
                <Button title="Submit" />
              </ScrollView>
            </View>
          </Modal>
        </View>
      );
    }
    function card() {
      const renderItem = ({ item }) => {
        return (
          <View>
            <View style={styles.cardContent}>
              <Text style={styles.cardName}>{item.name}</Text>

              <View style={styles.txtContent}>
                {/* {name, desc, price} */}
                <View style={{ flexDirection: 'column' }}>
                  <Text
                    style={{
                      textAlign: 'left',
                      color: 'white',
                      width: 200,
                      borderBottomWidth: 1,
                      borderStyle: 'dotted',
                      borderColor: 'white',
                      paddingBottom: 20,
                    }}>
                    {item.description}
                  </Text>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: 'bold',
                      textAlign: 'left',
                      color: 'white',
                      width: 105,
                    }}>
                    Price: {item.price}₹
                  </Text>
                </View>

                <View style={{ flexDirection: 'column' }}>
                  <Image
                    source={item.url}
                    style={{
                      width: 100,
                      height: 100,
                      borderRadius: 30,
                      resizeMode: 'cover',
                    }}
                  />
                  <View style={styles.btnView}>
                    <TouchableOpacity
                      style={styles.minus}
                      onPress={() => editOrder("-", item.id, item.price)}>
                      <Text style={styles.btnTxt}>-</Text>
                    </TouchableOpacity>

                    <Text style={styles.qtyContainer}>{getOrderQty(item.id)}</Text>
                    <TouchableOpacity
                      style={styles.plus}
                      onPress={() => editOrder("+", item.id, item.price)}>
                      <Text style={styles.btnTxt}>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </View>
        );
      };
      return (
        <FlatList
          showsHorizontalScrollIndicator={false}
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => `${item.id}`}
        
        />
      );
    }
    return (
      <View style={styles.container}>
        {header()}
        <Text
          style={{
            fontSize: 30,
            textAlign: 'center',
            backgroundColor: 'white',
          }}>
          Order Your Favourite Food
        </Text>

        {card()}
        {/* {modal()} */}
        {cart()}
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      paddingBottom: 80,
      justifyContent: 'center'
    },
    headerContent: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: COLORS.white,
      alignContent: 'center',
      padding: 10,
      backgroundColor: COLORS.primary,
    },
    back: {
      marginLeft: 10,
      marginTop: 4,
    },
    modalContainerView: {
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalView: {
      backgroundColor: COLORS.primary,
      borderWidth: 1,
      borderTopLeftRadius: 30,
      borderTopEndRadius: 30,
      paddingTop: 50,
      alignItems: 'center',
      height: '50%',
      marginTop: 'auto',
      justifyContent: 'center',
    },
    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
      backgroundColor: COLORS.primary,
    },
    buttonOpen: {
      backgroundColor: COLORS.primary,
    },
    buttonClose: {
      backgroundColor: COLORS.primary,
      color: COLORS.primary,
    },
    modalTextStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
    modalText: {
      width: 300,
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    cardContent: {
      flex: 1,
      height: '25%',
      width: '95%',
      backgroundColor: '#565051',
      margin: 10,
      borderTopLeftRadius: 30,
      borderBottomRightRadius: 30,
      justifyContent: 'center',
      paddingBottom: 10,
    },
    cardName: {
      textAlign: 'center',
      color: 'white',
      fontSize: 20,
      width: 210,
      backgroundColor: COLORS.primary,
      padding: 10,
      borderBottomRightRadius: 150,
      borderTopLeftRadius: 100,
      fontWeight: 'bold',
    },
    minus: {
      width: 30,
      height: 30,
      backgroundColor: COLORS.primary,
      borderTopLeftRadius: 10,
      borderBottomLeftRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
    },
    qtyContainer: {
      width: 40,
      height: 30,
      backgroundColor: COLORS.primary,
      padding: 5,
      textAlign: 'center',
      color: 'white',
    },
    plus: {
      width: 30,
      height: 30,
      backgroundColor: COLORS.primary,
      borderBottomRightRadius: 10,
      borderTopRightRadius: 10,
      borderWidth: 1,
      borderColor: 'white',
    },
    btnTxt: {
      fontSize: 30,
      color: 'white',
      textAlign: 'center',
      justifyContent: 'center',
      marginTop: -8,
    },
    txtContent: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      alignItems: 'center',
      padding: 5,
    },
    btnView: {
      flexDirection: 'row',
      alignItems: 'flex-end',
      marginTop: -20,
    },
  });

  export default Menu;
