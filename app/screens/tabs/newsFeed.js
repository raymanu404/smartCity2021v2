import React, { useEffect, useState,useContext } from 'react';
import {
   Button, 
   Image, 
   ImageBackground,
   StyleSheet,
   View, 
   ScrollView,
   Text,
   Dimensions,
   FlatList,
   SafeAreaView,
   TouchableWithoutFeedback,
  } from 'react-native';
import { useFocusEffect,useNavigationState } from '@react-navigation/native';
import {Card} from 'react-native-paper';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

import * as colors from "../../../config/colors/colors";

const deviceWidth = Math.round(Dimensions.get("window").width);
const cardHeight = 500;

export default function NewsFeed ({navigation}){

  const [dataNewsFeed, setDataNewsFeed ] = useState([
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      userFirstName:'Ovidiu',
      userLastName:'Vasi',
      userEmail:"ovidiu.vasi@gmail.com",
      location:"231311312313131",
      category:"groapa",
      title: 'Groapa pe strada ABCD',
      description:"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
      image:{uri:"https://i.pinimg.com/736x/6b/00/2b/6b002b66add7b38bb71f97c33af0cc69.jpg"},
      status:"Postat",
      postDate:"22.10.2021 17:22",
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      userFirstName:'Ovidiu',
      userLastName:'Vasi',
      userEmail:"ovidiu.vasi@gmail.com",
      location:"",
      category:"groapa",
      title: 'Groapa pe strada ABCD',
      description:"Lorem ipsum2",
      image:{uri:"https://i.pinimg.com/564x/17/1e/75/171e75953fda6cfc326b6a78d95a762f.jpg"},
      status:"In progres",
      postDate:"22.10.2021 17:22",
    },

    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      userFirstName:'Ovidiu',
      userLastName:'Vasi',
      userEmail:"ovidiu.vasi@gmail.com",
      location:"",
      category:"groapa",
      title: 'Groapa pe strada ABCD',
      description:"Lorem ipsum2",
      image:{uri:"https://i.pinimg.com/750x/9b/4d/41/9b4d41e489c72aff89008134de31f360.jpg"},
      status:"Rezolvat",
      postDate:"22.10.2021 17:22",
    },
    {
      id: '58694a0f-21a1-471f-bd96-145571e29d72',
      userFirstName:'Ovidiu',
      userLastName:'Vasi',
      userEmail:"ovidiu.vasi@gmail.com",
      location:"",
      category:"groapa",
      title: 'Groapa pe strada ABCD',
      description:"Lorem ipsum2",
      image:{uri:"https://i.pinimg.com/564x/61/28/fe/6128fe8d437318be9810dca4dd748cc4.jpg"},
      status:"Problema raportata",
      postDate:"22.10.2021 17:22",
    },
    {
      id: '58694a0f-42a1-471f-bd96-145571e29d72',
      userFirstName:'Ovidiu',
      userLastName:'Vasi',
      userEmail:"ovidiu.vasi@gmail.com",
      location:"",
      category:"groapa",
      title: 'Groapa pe strada ABCD',
      description:"Lorem ipsum2",
      image:{uri:"https://i.pinimg.com/750x/ec/f5/ec/ecf5ec329cc091285b73fb689b4d1be9.jpg"},
      status:"Nerezolvat",
      postDate:"22.10.2021 17:22",
    },
    {
      id: '58694a0f-41a1-471f-bd96-145571e29d72',
      userFirstName:'Ovidiu',
      userLastName:'Vasi',
      userEmail:"ovidiu.vasi@gmail.com",
      location:"",
      category:"groapa",
      title: 'Groapa pe strada ABCD',
      description:"Lorem ipsum2",
      image:{uri:"https://images.unsplash.com/photo-1511884642898-4c92249e20b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},
      status:"in curs de rezolvare",
      postDate:"22.10.2021 17:22",
    },
  ]);

  const  Item = (props) => (

    <Card style={styles.cardContainer}>

      <View style={styles.headerPost}>
        <View style={styles.postUser} >
            <FontAwesome name={"user-o"} size={26} color={colors.default.backgroundBottomInactive} />
            <Text style={styles.username} > {props.firstName} {props.lastName}  - {props.email} </Text>
        </View>
      
        <Text style={styles.postTitle}>{props.title}</Text>      
      </View>
      
      <View >
        <TouchableWithoutFeedback 
              onPress={()=> {
              navigation.setOptions({ title: props.title });    
              navigation.navigate('Details',              
              {
               name:props.title,
               image:props.image,
               category:props.category,
               description:props.description,
               status:props.status,
               date:props.postDate,
              });
              }}
        >
            <Image source={props.image} resizeMode={"contain"}  style={{width:deviceWidth - 30,height:cardHeight - 120,}} />
        </TouchableWithoutFeedback>       
      </View>
    </Card>

  )
  

  const renderItem = ({item}) =>(
    <Item 
        firstName={item.userFirstName}
        lastName={item.userLastName}
        email={item.userEmail}
        category= {item.category}
        location= {item.location}
        title={item.title} 
        image={item.image} 
        description={item.description}
        status={item.status}
    />
  )

  useEffect(
    React.useCallback(() => {
        // fetch("https://restcountries.com/v3.1/name/peru")
        // .then(response =>{
        //     response.json().then(data =>{
        //       // console.log(data);
        //       }
        //     );
        // })
       
    }),[]);



  return ( 
      <View  style={styles.container}>         
          <FlatList 
            data={dataNewsFeed}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />                           
      </View >
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:colors.default.backGroundApp,
    marginTop:10,
    marginBottom:50,
  },
  headerPost:{
    flex:1,
    justifyContent:"center",
    alignContent:"center",
    // backgroundColor:colors.default.colorTextActiveBottomTabs,
    backgroundColor:"#ffffff",
    width:deviceWidth - 10,
    padding:10,
    marginLeft:-10,
    height:80,
    marginBottom:10,
    marginTop:-10,
    borderTopEndRadius:20,
    borderTopLeftRadius:20,   
  },
  cardContainer:{
    width:deviceWidth - 10,
    // backgroundColor:"#3498db",
    height:cardHeight,
    padding:10,
    marginBottom:10,
    borderTopEndRadius:40,
    borderTopLeftRadius:40,    
  },  
 
  title: {
    fontSize: 32,
  },
  postUser:{
    flex:1,
    flexDirection:'row',
    // paddingBottom:25,

  },
  postTitle:{
    fontSize:20,
    textAlign:"center",
    fontWeight:"500",
    
  },
 
  username:{

  },
  

  
 
});

//  onPress={() => navigation.navigate('Details',{name:"Details for each new feed"})}