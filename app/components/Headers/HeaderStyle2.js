import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import { useTheme } from '@react-navigation/native';
import DropShadow from 'react-native-drop-shadow';
import { COLORS, FONTS, IMAGES } from '../../Utils/theme';

const HeaderStyle2 = (props) => {
    
    const {colors} = useTheme();

    return (
        <>
        <DropShadow
            style={{
                shadowColor: "#000",
                shadowOffset: {
                    width: 2,
                    height: 2,
                },
                shadowOpacity: .1,
                shadowRadius: 5,
                backgroundColor:colors.bgLight,
            }}
        >
            <View style={{
                height:50,
                backgroundColor: colors.bgLight,
                flexDirection:'row',
                alignItems:'center',
                paddingHorizontal:5,
            }}>
                <TouchableOpacity
                    style={{
                        height:50,
                        width:50,
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                >
                    <FeatherIcon color={colors.title} name='menu' size={18}/>
                </TouchableOpacity>
                <Text style={{...FONTS.h6,color:colors.title,flex:1,textAlign:'center'}}>{props.title}</Text>
                <TouchableOpacity
                    style={{
                        height:50,
                        width:50,
                        alignItems:'center',
                        justifyContent:'center',
                    }}
                >
                    <View
                        style={{
                            position:'absolute',
                            bottom:8,
                            right:8,
                            zIndex:1,
                            borderWidth:2,
                            borderColor:colors.bgLight,
                            backgroundColor:COLORS.success,
                            height:12,
                            width:12,
                            borderRadius:10,
                        }}
                    />
                    <Image 
                        style={{
                            height:32,
                            width:32,
                            borderRadius:20,
                        }}
                        source={IMAGES.pic1}
                    />
                </TouchableOpacity>
            </View>
        </DropShadow>
        </>
    );
};



export default HeaderStyle2;