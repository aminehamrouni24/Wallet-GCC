import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@react-navigation/native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { COLORS, FONTS, IMAGES, SIZES } from "../Utils/theme";
import DropShadow from "react-native-drop-shadow";

const CustomTabBar = ({ state, navigation, descriptors }) => {
  const { colors } = useTheme();

  const offset = useSharedValue(SIZES.width / 2.5);
  const icon1 = useSharedValue(0);
  const icon2 = useSharedValue(0);
  const icon3 = useSharedValue(10);
  const icon4 = useSharedValue(0);
  const icon5 = useSharedValue(0);

  const tabShapeStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: offset.value,
        },
      ],
    };
  });

  const tabIcon1Style = useAnimatedStyle(() => {
    return { transform: [{ translateY: icon1.value }] };
  });
  const tabIcon2Style = useAnimatedStyle(() => {
    return { transform: [{ translateY: icon2.value }] };
  });
  const tabIcon3Style = useAnimatedStyle(() => {
    return { transform: [{ translateY: icon3.value }] };
  });
  const tabIcon4Style = useAnimatedStyle(() => {
    return { transform: [{ translateY: icon4.value }] };
  });
  const tabIcon5Style = useAnimatedStyle(() => {
    return { transform: [{ translateY: icon5.value }] };
  });

  return (
    <>
      <DropShadow
        style={{
          shadowColor: "#000",
          shadowOffset: {
            width: 0,
            height: 0,
          },
          shadowOpacity: 0.2,
          shadowRadius: 5,
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: colors.bgLight,
        }}
      >
        <View
          style={{
            height: 60,
            backgroundColor: colors.bgLight,
            flexDirection: "row",
            zIndex: 3,
          }}
        >
          <Animated.View style={[tabShapeStyle]}>
            <View
              style={{
                width: SIZES.width / 5,
                position: "absolute",
                zIndex: 1,
                top: 7.5,
                left: 0,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <View
                style={{
                  height: 45,
                  width: 45,
                  borderRadius: 45,
                  backgroundColor: COLORS.primary,
                }}
              />
            </View>
          </Animated.View>
          {state.routes.map((route, index) => {
            const { options } = descriptors[route.key];
            const label =
              options.tabBarLabel !== undefined
                ? options.tabBarLabel
                : options.title !== undefined
                ? options.title
                : route.name;

            const isFocused = state.index === index;

            const onPress = () => {
              const event = navigation.emit({
                type: "tabPress",
                target: route.key,
                canPreventDefault: true,
              });

              if (!isFocused && !event.defaultPrevented) {
                navigation.navigate({ name: route.name, merge: true });
              }

              if (route.name == "Home") {
                var a = 0;
                icon1.value = withSpring(10);
                icon2.value = withSpring(0);
                icon3.value = withSpring(0);
                icon4.value = withSpring(0);
                icon5.value = withSpring(0);
              } else if (route.name == "Trade") {
                var a = SIZES.width / 5;
                icon2.value = withSpring(10);
                icon1.value = withSpring(0);
                icon3.value = withSpring(0);
                icon4.value = withSpring(0);
                icon5.value = withSpring(0);
              } else if (route.name == "Scan") {
                var a = SIZES.width / 2.5;
                icon3.value = withSpring(10);
                icon1.value = withSpring(0);
                icon2.value = withSpring(0);
                icon4.value = withSpring(0);
                icon5.value = withSpring(0);
              } else if (route.name == "Wallet") {
                var a = SIZES.width / 2.5 + SIZES.width / 5;
                icon4.value = withSpring(10);
                icon1.value = withSpring(0);
                icon2.value = withSpring(0);
                icon3.value = withSpring(0);
                icon5.value = withSpring(0);
              } else if (route.name == "Profile") {
                var a = SIZES.width - SIZES.width / 5;
                icon5.value = withSpring(10);
                icon1.value = withSpring(0);
                icon2.value = withSpring(0);
                icon3.value = withSpring(0);
                icon4.value = withSpring(0);
              }

              var b = withSpring(a);
              offset.value = b;
            };

            return (
              <View style={styles.tabItem} key={index}>
                <TouchableOpacity style={styles.tabLink} onPress={onPress}>
                  <Animated.View
                    style={[
                      route.name == "Home"
                        ? tabIcon1Style
                        : route.name == "Trade"
                        ? tabIcon2Style
                        : route.name == "Scan"
                        ? tabIcon3Style
                        : route.name == "Wallet"
                        ? tabIcon4Style
                        : route.name == "Profile" && tabIcon5Style,
                    ]}
                  >
                    <Image
                      style={{
                        height: 18,
                        width: 18,
                        resizeMode: "contain",
                        marginBottom: 4,
                        //opacity:isFocused ? 1 : .8,
                        tintColor: isFocused ? COLORS.white : colors.text,
                      }}
                      source={
                        label === "Home"
                          ? IMAGES.home3
                          : label === "Scan"
                          ? IMAGES.qr
                          : label === "Profile"
                          ? IMAGES.user2
                          : label === "Trade"
                          ? IMAGES.trade3
                          : label === "Wallet" && IMAGES.wallet3
                      }
                    />
                  </Animated.View>
                  <Text
                    style={{
                      ...FONTS.fontSm,
                      color: colors.text,
                      opacity: isFocused ? 0 : 1,
                    }}
                  >
                    {label}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          })}
        </View>
      </DropShadow>
    </>
  );
};

const styles = StyleSheet.create({
  tabLink: {
    alignItems: "center",
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  navText: {
    ...FONTS.fontSm,
  },
});

export default CustomTabBar;
