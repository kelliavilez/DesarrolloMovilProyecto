import React from 'react';
import { PaperProvider } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import LogIn from './src/screens/LogIn';
import SignUp from './src/screens/SignUp';
import Home from './src/screens/Home';
import HelpSupport from './src/screens/HelpSupport';
import Oferts from './src/screens/Oferts';
import MyBoughts from './src/screens/MyBoughts';
import ArticlesCategory from './src/screens/Categories';
import Payment from './src/screens/Payment';
import Bedroom from './src/screens/Categories/Bedroom';
import Food from './src/screens/Categories/Food';
import Gardening from './src/screens/Categories/Gargening';
import Makeup from './src/screens/Categories/Makeup';
import Pets from './src/screens/Categories/Pets';
import ArticleDetailsCard from './src/components/ArticleDetailsCard';
import ShoppingCart from './src/screens/ShoppingCart';
import Profile from './src/screens/Profile';
import Favorite from './src/screens/Favorite';
import { Searchbar } from 'react-native-paper';
import { useState } from 'react';
import SearchBar from './src/components/SearchBar';
import OfertsDetailsCard from './src/components/OfertsDetailsCard';
import Icon from 'react-native-vector-icons/MaterialIcons';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();

const AuthenticationStack = () => ( //where the user can login or signup
  <Stack.Navigator
    screenOptions={{
      headerTintColor: 'black',
      headerStyle: { backgroundColor: 'Green' },
    }}>
    <Stack.Screen name='LogIn' component={LogIn} />
    <Stack.Screen name='Registro' component={SignUp} />
  </Stack.Navigator>
);



const AppDrawer = () => (

  <Drawer.Navigator 
  screenOptions={{
    drawerStyle: {
      backgroundColor: "#ebf7ec",
      width: 240,
    },
    drawerActiveTintColor: "#447348", 
    drawerInactiveTintColor: "#1e241e", 
    drawerActiveBackgroundColor: "#b4dbb7", 
    headerStyle: {
      backgroundColor: "#ebf7ec", 
    },
    headerTintColor: "#1f3b28", 
    headerTitleStyle: {
      fontWeight: 'bold',
    },
  }}>
    <Drawer.Screen name='Inicio' component={Home} 
    options={{
        drawerIcon: ({ size }) => (
          <Icon
            name={'home'}
            size={size}
            color={"#1f3b28"}
          />
        ),
      }} />
    <Drawer.Screen name='Perfil de usuario' component={Profile} 
    options={{
      drawerIcon: ({ size }) => (
        <Icon
          name={'person'}
          size={size}
          color={"#1f3b28"}
        />
      ),
    }} />
    <Drawer.Screen name='Mis favoritos' component={Favorite}
    options={{
      drawerIcon: ({ size }) => (
        <Icon
          name={'bookmark'}
          size={size}
          color={"#1f3b28"}
        />
      ),
    }} />
    <Drawer.Screen name='Mis compras' component={MyBoughts}
    options={{
      drawerIcon: ({ size }) => (
        <Icon
          name={'shopify'}
          size={size}
          color={"#1f3b28"}
        />
      ),
    }} />
    <Drawer.Screen name='Ofertas' component={Oferts}
    options={{
      drawerIcon: ({ size }) => (
        <Icon
          name={'home'}
          size={size}
          color={"#1f3b28"}
        />
      ),
    }} />
    <Drawer.Screen name='Pagos' component={Payment}
    options={{
      drawerIcon: ({ size }) => (
        <Icon
          name={'payments'}
          size={size}
          color={"#1f3b28"}
        />
      ),
    }} />
    <Drawer.Screen name='Ayuda y soporte' component={HelpSupport}
    options={{
      drawerIcon: ({ size }) => (
        <Icon
          name={'help'}
          size={size}
          color={"#1f3b28"}
        />
      ),
    }} />
    <Drawer.Screen name='Categorias' component={ArticlesCategory}
    options={{
      drawerIcon: ({ size }) => (
        <Icon
          name={'category'}
          size={size}
          color={"#1f3b28"}
        />
      ),
    }} />
    <Drawer.Screen name='Carrito de compras' component={ShoppingCart}
    options={{
      drawerIcon: ({ size }) => (
        <Icon
          name={'shopping'}
          size={size}
          color={"#1f3b28"}
        />
      ),
    }} />
  </Drawer.Navigator>
);

const App = () => (
  <PaperProvider>
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name='Auth'
          component={AuthenticationStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name='Main'
          component={AppDrawer}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ArticleDetailsCard" component={ArticleDetailsCard} />
        <Stack.Screen name="OfertsDetailsCard" component={OfertsDetailsCard} />
        <Stack.Screen name='Bedroom' component={Bedroom} />
        <Stack.Screen name='Gardening' component={Gardening} />
        <Stack.Screen name='Food' component={Food} />
        <Stack.Screen name='Makeup' component={Makeup} />
        <Stack.Screen name='Pets' component={Pets} />
      </Stack.Navigator>
    </NavigationContainer>
  </PaperProvider>

);

export default App;
