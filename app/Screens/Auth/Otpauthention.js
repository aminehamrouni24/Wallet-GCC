import React from "react";
import { 
  Image,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  SafeAreaView
} from "react-native";
import { useTheme } from '@react-navigation/native';
import { GlobalStyleSheet } from "../../Utils/styleSheet";
import { COLORS, FONTS, IMAGES, SIZES } from "../../Utils/theme";
import OTPInputView from '@twotalltotems/react-native-otp-input';
import CustomButton from "../../components/CustomButton";
import Header from "../../layout/header";

const Otpauthention = (props) => {
  
  const { colors } = useTheme();
  const theme = useTheme();

 
  return (
    <>
      <SafeAreaView style={{flex:1,backgroundColor:colors.background}}>
        <Header leftIcon="back" primaryBg title="OTP Authentication"/>
        <ScrollView contentContainerStyle={{flexGrow:1}}>
            <View
                style={{
                    flex:1,
                    paddingVertical:15,
                }}
            >
                <View style={{...GlobalStyleSheet.container}}>
                    <View style={{alignItems:'center',marginBottom:25}}>
                        <Image 
                          style={{
                            height:110,
                            marginBottom:20,
                            resizeMode:'contain',
                          }}
                          source={theme.dark ? IMAGES.logoFullWhite : IMAGES.logoFull}
                        />
                        <Text style={{...FONTS.fontLg,color:colors.title,textAlign:'center'}}>An authentication code haserdrtdrs berrdrten sent to<Text style={{...FONTS.fontLg,color:COLORS.primary}}> testing@gmail.com</Text></Text>
                    </View>
                    <View style={{marginBottom:'15%'}}>
                      <Text style={{...FONTS.font,color:colors.title,marginBottom:5}}>Enter OTP</Text>
                      
                      <OTPInputView
                        style={{width: SIZES.width - 30, height: 50,marginBottom:15}}
                        pinCount={6}
                        autoFocusOnLoad
                        codeInputFieldStyle={{
                          ...FONTS.h5,
                          lineHeight:24,
                          color:colors.title,
                          height:45,
                          width: (SIZES.width / 6) - 15,
                          borderRadius:SIZES.radius,
                          borderWidth:1,
                          borderColor:colors.borderColor,
                          backgroundColor:colors.inputBg,
                          textAlign:'center',
                        }}
                        
                        codeInputHighlightStyle={{
                          borderColor:COLORS.primary,
                          shadowColor: COLORS.primary,
                        }}
                        placeholderTextColor={colors.textLight}
                      />

                      <View style={{flexDirection:'row',justifyContent:'center'}}>
                        <Text style={{...FONTS.font,color:colors.title}}>I didn't receive code. </Text>
                        <TouchableOpacity><Text style={{...FONTS.font,color:COLORS.primary}}>Resend Code</Text></TouchableOpacity>
                      </View>
                    </View>
                </View>
            </View>
            <View style={{padding:30}}>
              <CustomButton 
                onPress={()=> props.navigation.navigate('ResetPasssword')}
                title="Submit"
              />
              </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Otpauthention;
