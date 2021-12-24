import React , {useContext,useEffect,useState} from 'react';
import {
    ImageBackground,
    Text,
    View,
    StyleSheet,
    Dimensions,
    TouchableWithoutFeedback,
    TouchableNativeFeedback,
    Alert,
    Keyboard,
} from "react-native";
import {Card, TextInput} from 'react-native-paper';
import { useFocusEffect,useNavigationState } from '@react-navigation/native';
import { Avatar } from 'react-native-elements';
import { AuthContext } from '../../../config/context';
import * as Animatable from 'react-native-animatable';
import { Title} from 'react-native-paper';


const deviceWidth = Math.round(Dimensions.get("window").width);
const deviceHeight = Math.round(Dimensions.get("window").height);

export default function Profile (){
 
    const {logout} = useContext(AuthContext);

    const [data,setData] = useState({
        firstName:'Ovidiu',
        lastName:'Vasi',
        profileImage:'https://i.pinimg.com/564x/21/7d/b5/217db5156ff0ee8875b2b9730fefd602.jpg',
        email:'vasi@email.com',
        phone:'2194712-05-',
        points:'300',
        key:'ah9fga80ghqghqghqipvnav2pinavpa',
        userID:'2',    
    });

    const [userChange,setUserChange] = useState({
        email:false,
        phone:false,
        emailValid:true,
        phoneValid:true,
    });

    useEffect(
        React.useCallback(() => {
            // fetch("https://restcountries.com/v3.1/name/peru")
            // .then(response =>{
            //     response.json().then(data =>{
            //       // console.log(data);
            //       }
            //     );
            // });

            // return (
            //     ()=>{
            //             setUserChange({
            //         ...userChange,
            //         email:false,
            //         phone:false,
            //     });
            // }
            // )
          
    }),[]);
    
    const emailHandlerEdit = () =>{
        setUserChange({
            ...userChange,
            email:true,
        });
    };
    const emailHandlerSave = () =>{
        setData({
            ...data,           
        });
        if(userChange.emailValid){
             setUserChange({
                ...userChange,
                email:false,
             });
        }
       
    };

    const phoneChangeEdit = () =>{
         setUserChange({
            ...userChange,
            phone:true,
        });
    };
    
    const phoneChangeSave = () =>{
        setData({
            ...data,           
        });
        if(userChange.phoneValid){
             setUserChange({
                ...userChange,
                phone:false,
        });
        }
       
    };

    const logoutHandler = () =>{
        Alert.alert(
        "Logout",
        "Are you sure you want to logout?",
        [
            {
            text: "NO",
            onPress: () => console.log("NO pressed")
            },           
            { 
            text: "YES", 
            onPress: () =>  logout()
            }
        ]
        );
    };

    const emailTextHandler = (val) =>{
        var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setData({
            ...data,
            email:val
        });
        //    console.log(val); 
        if(val.length != 0 && emailPattern.test(val)){
            //pentru PUT verificat
            //PUT 
            setUserChange({
                ...userChange,
                emailValid:true,
            });
        }else{
            //mesaj eroare
            setUserChange({
                ...userChange,
                emailValid:false,
            });
        }
    };

    const phoneTextHandler = (val) =>{
        setData({
            ...data,
            phone:val
        });

        if(val.length != 0 && val.startsWith("07")){
            //pentru PUT verificat
            //PUT 
            setUserChange({
                ...userChange,
                phoneValid:true,
            });
        }else{
            //mesaj eroare
            setUserChange({
                ...userChange,
                phoneValid:false,
            });
        }
    };

    const userPostsButtonHandler = () =>{
        console.log("aici ar trebui stack");
        //aici ar trebui in stack pentru a vedea postarile sale
    };
    
    return(   
        <TouchableWithoutFeedback onPress={()=>{
            Keyboard.dismiss();
            }}
        >    
       <View style={styles.container}>
            <Animatable.View style={styles.profileContainer} 
                animation={"fadeInUpBig"}
            >  

            {/* ---------------------------------- USER PROFILE -------------------------- */}
            <View style={styles.userContainer}>
                <View style={styles.userProfile}>
                        <Avatar 
                            size={70} 
                            rounded 
                            source={{uri:data.profileImage}} 
                            key={data.key}                       
                        />
                    
                        <Title style={{textAlign:'center',fontSize:20, color:"#FFF",marginLeft:0}}>
                               {data.firstName } {data.lastName}
                        </Title>                    
                         {/* <Avatar
                            size={64}
                            rounded
                            icon={{ name: 'star', type: 'Feather', color: '#FFBD35' }}
                            containerStyle={{
                                borderColor: '#05375a',
                                borderStyle: 'solid',
                                // borderWidth: 1,                       
                            }}
                            
                        /> */}
                                              
                </View>         
            </View>  

            {/* ---------------------------------- EMAIL -------------------------- */}
            <Card style={styles.userInfoContainer}>
                 
                    {!userChange.email ? 
                        <View style={styles.userInfo}>
                        <Avatar
                            size={40}
                            rounded
                            icon={{ name: 'email', type: 'Fontisto', color: '#35589A' }}
                            containerStyle={{
                                borderColor: '#05375a',
                                borderStyle: 'solid',
                                                    
                            }}
                                
                        />   
                        <Text style={{fontSize:16, color:"#FFF",paddingLeft:10}}>
                           {data.email}
                        </Text>
                        <Avatar
                            size={40}
                            rounded
                            onPress={()=> emailHandlerEdit()}
                            icon={{ name: 'edit', type: 'AntDesign', color: '#05375a' }}
                            containerStyle={{
                                borderColor: '#05375a',
                                borderStyle: 'solid',
                                            
                            }}
                        />
                    </View>
                    :
                    <View style={styles.userInfo}>
                        <Avatar
                            size={40}
                            rounded
                            icon={{ name: 'email', type: 'Fontisto', color: '#35589A' }}
                            containerStyle={{
                                borderColor: '#05375a',
                                borderStyle: 'solid',
                                                    
                            }}
                                
                        />   
                        <View style={{flex:1,flexDirection:'column'}}>
                            <TextInput 
                                style={styles.textInput}
                                autoCapitalize="none"
                                underlineColorAndroid ={'transparent'}
                                onChangeText={(val) => emailTextHandler(val)}
                                value={data.email}
                            />
                           {!userChange.emailValid ?  <Text style={{fontSize:10,color:'red',textAlign:'center'}}>Email invalid!</Text>  : null}
                        </View>                                               
                        <Avatar
                            size={40}
                            rounded
                            onPress={()=> emailHandlerSave()}
                            icon={{ name: 'save', type: 'Foundation', color: '#05375a' }}
                            containerStyle={{
                                borderColor: '#05375a',
                                borderStyle: 'solid',
                                            
                            }}
                                
                            />
                    </View>                  
                    }                         
            </Card>

            {/* ---------------------------------- PHONE NUMBER -------------------------- */}
            <Card style={styles.userInfoContainer}>
               {!userChange.phone ?
                 <View style={styles.userInfo}>
                    <Avatar
                        size={40}
                        rounded
                        icon={{ name: 'phone', type: 'AntDesign', color: '#35589A' }}
                        containerStyle={{
                            borderColor: '#05375a',
                            borderStyle: 'solid',
                                                 
                        }}
                            
                    />   
                    <Text style={{fontSize:16, color:"#FFF",paddingLeft:10}}>
                       {data.phone}
                    </Text>
                    <Avatar
                        size={40}
                        rounded
                        onPress={()=> phoneChangeEdit()}
                        icon={{ name: 'edit', type: 'AntDesign', color: '#05375a' }}
                        containerStyle={{
                            borderColor: '#05375a',
                            borderStyle: 'solid',
                                           
                        }}
                            
                    />
                </View>
                :
                 <View style={styles.userInfo}>
                    <Avatar
                        size={40}
                        rounded
                        icon={{ name: 'phone', type: 'AntDesign', color: '#35589A' }}
                        containerStyle={{
                            borderColor: '#05375a',
                            borderStyle: 'solid',
                                                 
                        }}
                            
                    />   
                    <View style={{flex:1,flexDirection:'column'}}>
                        <TextInput                        
                            style={styles.textInput}
                            autoCapitalize="none"
                            keyboardType="numeric"
                            maxLength={10}
                            value={data.phone}
                            onChangeText={(val) => phoneTextHandler(val)}
                        />
                        {!userChange.phoneValid ?  <Text style={{fontSize:10,color:'red',textAlign:'center'}}>Phone invalid!</Text>  : null}
                    </View> 
                    <Avatar
                        size={40}
                        rounded
                        onPress={()=> phoneChangeSave()}
                        icon={{ name: 'save', type: 'Foundation', color: '#05375a' }}
                        containerStyle={{
                            borderColor: '#05375a',
                            borderStyle: 'solid',
                                           
                        }}
                            
                    />
                </View>    
                }         
            </Card>

            {/* ---------------------------------- POINTS-------------------------- */}
            <Card style={styles.userInfoContainer}>
                <View style={[styles.userInfo,{justifyContent:'center'}]}>
                    <Avatar
                        size={40}
                        rounded
                        icon={{ name: 'star', type: 'Feather', color: '#35589A' }}
                        containerStyle={{
                            borderColor: '#05375a',
                            borderStyle: 'solid',
                                                 
                        }}
                            
                    />                     
                    <Title style={{fontSize:16, color:"#FFF",paddingLeft:10}}>
                        Points: {data.points}
                    </Title>
                </View>           
            </Card>

            {/* ---------------------------------- USER POSTS -------------------------- */}
            <Card style={styles.userInfoContainer}>
                <TouchableWithoutFeedback onPress={()=> userPostsButtonHandler() }>
                    <View style={[styles.userInfo,{justifyContent:"center"}]}>
                    <Avatar
                        size={40}
                        rounded
                        icon={{ name: 'post-add', type: 'MaterialIcons', color: '#35589A' }}
                        containerStyle={{
                            borderColor: '#05375a',
                            borderStyle: 'solid',
                                                 
                        }}
                            
                    />   
                    <Title style={{fontSize:16, color:"#FFF",paddingLeft:10}}>
                        check your posts
                    </Title>
                   
                </View>     
                </TouchableWithoutFeedback>      
            </Card>

            {/* ----------------------------------LOGOUT -------------------------- */}
            <Card style={[styles.userInfoContainer,{width:"40%",}]}>
                <TouchableWithoutFeedback onPress={()=>logoutHandler()}>                  
                    <View style={[styles.userInfo,{justifyContent:"center",}]}>                     
                        <Title style={{fontSize:16, color:"#FFF",paddingLeft:10}}>
                        LOGOUT
                        </Title>
                    <Avatar
                            size={40}
                            rounded
                            icon={{ name: 'logout', type: 'MaterialIcons', color: '#35589A' }}
                            containerStyle={{
                                borderColor: '#05375a',
                                borderStyle: 'solid',
                                paddingLeft:10                    
                            }}                           
                        />  
                    </View>           
                </TouchableWithoutFeedback>
            </Card>  

            </Animatable.View>
       </View>
       </TouchableWithoutFeedback>   
    );
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        // justifyContent: "center",
        // alignItems: "center"
     
    },
    profileContainer:{
        flex:2,
        // justifyContent: "center",
        alignItems: "center",
        backgroundColor:"#FFF",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        // paddingVertical:50,
        // paddingHorizontal:30,
        marginTop:50,
    },
    userContainer:{
          
        backgroundColor:'rgba(52, 152, 219, 0.8)',
        width:"100%",
        height:100,
        paddingVertical:10,
        borderBottomRightRadius:150,
        // marginTop:10,
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
    },
    userProfile:{
        flex:1,
        flexDirection:'row',
        justifyContent:"space-around",
        // marginLeft:20,
    },
    userInfoContainer:{
       
        height:60,
        width:'90%',
        backgroundColor:"rgba(52, 152, 219, 0.8)",
        borderTopLeftRadius:30,
        borderTopRightRadius:30,
        borderBottomLeftRadius:30,
        borderBottomRightRadius:30,
        // paddingVertical:20,
        paddingHorizontal:30,
        marginTop:30,
    },
    userInfo:{
        flex:1,
        flexDirection:'row',
        justifyContent:"space-between",
        // paddingLeft:20,
        alignItems:"center",
    },
    textInput:{
        flex:1,
        // marginTop: Platform.OS === "android" ? 0 : -12,
        paddingLeft:10,
        textAlign:'center',
        color:"#FFF",
        // marginBottom:10,
        fontSize:16,
        height:60,      
        borderBottomWidth:0,
        backgroundColor:"rgba(52, 152, 219, 0.01)",        
    },

    
    
});