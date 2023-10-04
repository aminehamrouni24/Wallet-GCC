import React, {useState} from "react";
import { 
  ScrollView,
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView
} from "react-native";
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from "../../Utils/styleSheet";
import { COLORS, FONTS, ICONS } from "../../Utils/theme";
import CustomButton from "../../components/CustomButton";
import Header from "../../layout/header";
import { SvgXml } from "react-native-svg";

const SignIn = (props) => {
  

  const [isFocused , setisFocused] = useState(false);
  const [isFocused2 , setisFocused2] = useState(false);
  const [handlePassword,setHandlePassword] = useState(true);
  const { colors } = useTheme();

  return (
    <>
      <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
        <Header leftIcon="back" primaryBg title="Login"/>
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View style={{flex:1,paddingVertical:25}}>
                <View style={{...GlobalStyleSheet.container}}>
                    <View style={{alignItems:'center',marginBottom:30}}>
                        <Text style={{...FONTS.h3,color:colors.title,marginBottom:5}}>Login Account</Text>
                        <Text style={{...FONTS.fontLg,color:colors.text}}>Welcome back you've been missed!</Text>
                    </View>
                    <Text style={{...FONTS.font,color:colors.title,marginBottom:8}}>Email address</Text>
                    <View style={{marginBottom:20}}>
                      <TextInput 
                        style={[{
                          ...GlobalStyleSheet.formControl,
                          backgroundColor:colors.inputBg,
                          color:colors.title,
                          borderColor:colors.borderColor,
                        },isFocused && styles.inputActive]}
                        onFocus={() => setisFocused(true)}
                        onBlur={() => setisFocused(false)}
                        placeholderTextColor={colors.text}
                        placeholder="Type your email"
                      />  
                    </View>
                    <Text style={{...FONTS.font,color:colors.title,marginBottom:8}}>Password</Text>
                    <View style={{marginBottom:15}}>
                      <TextInput 
                        style={[{
                          ...GlobalStyleSheet.formControl,
                          backgroundColor:colors.inputBg,
                          color:colors.title,
                          borderColor:colors.borderColor,
                        },isFocused2 && styles.inputActive]}
                        onFocus={() => setisFocused2(true)}
                        onBlur={() => setisFocused2(false)}
                        placeholderTextColor={colors.text}
                        placeholder="Type your password"
                        secureTextEntry={handlePassword}
                      />  
                      { (handlePassword) ?
                        <TouchableOpacity style={styles.eyeIcon} onPress={() => setHandlePassword(false)}>
                            <SvgXml 
                              height={24}
                              width={24}
                              fill={colors.text}
                              xml={ICONS.eyeOpen}
                            />
                        </TouchableOpacity>
                        :
                        <TouchableOpacity style={styles.eyeIcon} onPress={() => setHandlePassword(true)}>
                            <SvgXml 
                              height={24}
                              width={24}
                              fill={colors.text}
                              xml={ICONS.eyeClose}
                            />
                        </TouchableOpacity>
                        }
                    </View>
                    <View style={{alignItems:'flex-end',marginBottom:'18%'}}>
                      <TouchableOpacity
                        onPress={()=> props.navigation.navigate('ForgotPassword')}
                      >
                        <Text style={{...FONTS.font,color:COLORS.primary}}>Forgot password?</Text>
                      </TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={{padding:30}}>
              <CustomButton 
                onPress={()=> props.navigation.navigate('DrawerNavigation')}
                title="Login"
              />
              <View style={{alignItems:'center',flexDirection:'row',justifyContent:'center',marginTop:15}}>
                <TouchableOpacity
                  onPress={()=> props.navigation.navigate('SignUp')}
                >
                  <Text style={{...FONTS.font,color:COLORS.primary}}>Register</Text>
                </TouchableOpacity>
                <Text style={{...FONTS.font,color:colors.title}}> for Free</Text>
              </View>
            </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};



const styles = StyleSheet.create({

  inputActive:{
    borderColor:COLORS.primary,
  },
  eyeIcon : {
    height:48,
    width:48,
    position:'absolute',
    alignItems:'center',
    justifyContent:'center',
    top:0,
    right:0,
  }

})


export default SignIn;
