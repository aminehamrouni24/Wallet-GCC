import React, { useRef, useState } from "react";
import {
  Text,
  StyleSheet,
  Dimensions,
  View,
  ScrollView,
  Animated,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from "react-native";
import { useNavigation, useTheme } from "@react-navigation/native";
import { COLORS, FONTS, IMAGES, SIZES } from "../../Utils/theme";
import { GlobalStyleSheet } from "../../Utils/styleSheet";
import BannerCard from "../../components/BannerCard";
import PortfolioCard from "../../components/PortfolioCard";
import { Swipeable } from "react-native-gesture-handler";
import LinearGradient from "react-native-linear-gradient";
import RBSheet from "react-native-raw-bottom-sheet";
import BalanceChart from "../../components/chart/BalanceChart";
import TransferSheet from "../../components/BottomSheet/TransferSheet";
import ThemeBtn from "../../components/ThemeBtn";
import Swiper from "react-native-swiper";
import FeatherIcon from "react-native-vector-icons/Feather";

const { width } = Dimensions.get("window");

const itemWidth = SIZES.width / 1.5 + 50;

const bannerData = [
  {
    id: "1",
    image: IMAGES.welcomeImg4,
    title: "Gold Cryptocurrency",
    subTitle: "Africa Cryptocurrency",
  },
  {
    id: "1",
    image: IMAGES.welcomeImg4,
    title: "Gold Cryptocurrency",
    subTitle: "Europe Cryptocurrency",
  },
  {
    id: "1",
    image: IMAGES.welcomeImg4,
    title: "Gold Cryptocurrency",
    subTitle: "Asia Cryptocurrency",
  },
  {
    id: "1",
    image: IMAGES.welcomeImg4,
    title: "Gold Cryptocurrency",
    subTitle: "Australia Cryptocurrency",
  },
  {
    id: "1",
    image: IMAGES.welcomeImg4,
    title: "Gold Cryptocurrency",
    subTitle: "America Cryptocurrency",
  },
  {
    id: "1",
    image: IMAGES.welcomeImg4,
    title: "Gold Cryptocurrency",
    subTitle: "Middle East Cryptocurrency",
  },
  {
    id: "1",
    image: IMAGES.welcomeImg4,
    title: "Gold Cryptocurrency",
    subTitle: "Antarctica Cryptocurrency",
  },
 
];

const ListData = [
  {
    id: "1",
    icon: IMAGES.welcomeImg4,
    coin: "Africa Gold Cryptocurrency",
    amount: "0.154836",
    rate: "+4.6%",
    subTitle: "GCC  $8,456.87",
  },
  {
    id: "2",
    icon: IMAGES.welcomeImg4,
    coin: "Europe Gold Cryptocurrency",
    amount: "0.154836",
    rate: "+4.6%",
    subTitle: "GCC  $8,456.87",
  },
  {
    id: "3",
    icon: IMAGES.welcomeImg4,
    coin: "Asia Gold Cryptocurrency",
    amount: "0.154836",
    rate: "+4.6%",
    subTitle: "GCC  $8,456.87",
  },
  {
    id: "4",
    icon: IMAGES.welcomeImg4,
    coin: "America Gold Cryptocurrency",
    amount: "0.154836",
    rate: "+4.6%",
    subTitle: "GCC  $8,456.87",
  },
  {
    id: "5",
    icon: IMAGES.welcomeImg4,
    coin: "Australia Gold Cryptocurrency",
    amount: "0.154836",
    rate: "+4.6%",
    subTitle: "GCC  $8,456.87",
  },
  {
    id: "6",
    icon: IMAGES.welcomeImg4,
    coin: "Middle East Gold Cryptocurrency",
    amount: "0.154836",
    rate: "+4.6%",
    subTitle: "GCC  $8,456.87",
  },
  {
    id: "7",
    icon: IMAGES.welcomeImg4,
    coin: "Antarctica Gold Cryptocurrency",
    amount: "0.154836",
    rate: "+4.6%",
    subTitle: "GCC  $8,456.87",
  },
  {
    id: "8",
    icon: IMAGES.bitcoin,
    coin: "Bitcoin",
    amount: "0.154836",
    rate: "+4.6%",
    subTitle: "BTC  $8,456.87",
  },
  {
    id: "9",
    icon: IMAGES.etherium,
    coin: "Etherium",
    amount: "0.154836",
    rate: "+4.6%",
    subTitle: "BTC  $8,456.87",
  },
  {
    id: "10",
    icon: IMAGES.litherium,
    coin: "LTC",
    amount: "0.154836",
    rate: "+4.6%",
    subTitle: "BTC  $8,456.87",
  },
];

const CardData = [
  {
    id: "1",
    icon: IMAGES.wallet2,
    title: "Total Deposit",
    amount: "$5,770.90",
  },
  {
    id: "2",
    icon: IMAGES.trade2,
    title: "Profit & Loss",
    amount: "$21,56000.90",
    rate: "+4.95%",
  },
  {
    id: "3",
    icon: IMAGES.dollor,
    title: "Total Balance",
    amount: "$5,770.90",
  },
];

const HomeScreen = ({ navigation }) => {
  const { colors } = useTheme();
  const scrollX = useRef(new Animated.Value(0)).current;
  const buttons = ["FAVOURITES", "TOP GAINERS", "TOP LOSERS"];
  const onCLick = (i) => this.scrollViewHome.scrollTo({ x: i * width });
  const refRBSheet = useRef();

  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <RBSheet
          ref={refRBSheet}
          closeOnDragDown={true}
          height={555}
          openDuration={300}
          customStyles={{
            wrapper: {
              backgroundColor: "rgba(0,0,0,.6)",
            },
            container: {
              backgroundColor: colors.bgLight,
            },
            draggableIcon: {
              width: 85,
              height: 6,
              backgroundColor: colors.text,
              opacity: 0.3,
            },
          }}
        >
          <TransferSheet />
        </RBSheet>

        <View
          style={{
            flex: 1,
            backgroundColor: colors.background,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              paddingHorizontal: 15,
              paddingTop: 15,
              paddingBottom: 15,
            }}
          >
            <View style={{ flex: 1 }}>
              <ThemeBtn />
            </View>

            <TouchableOpacity
              onPress={() => navigation.navigate("Notifications")}
              style={{
                height: 35,
                width: 35,
                alignItems: "center",
                justifyContent: "center",
                borderRadius: 8,
              }}
            >
              <Image
                style={{
                  height: 22,
                  width: 22,
                  tintColor: colors.title,
                }}
                source={IMAGES.bell2}
              />
              <View
                style={{
                  height: 8,
                  width: 8,
                  borderRadius: 8,
                  backgroundColor: "#c62b33",
                  position: "absolute",
                  borderWidth: 2,
                  right: 8,
                  top: 10,
                  borderColor: colors.background,
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.openDrawer()}
              style={{
                height: 35,
                width: 35,
                alignItems: "center",
                justifyContent: "center",
                marginLeft: 8,
              }}
            >
              <FeatherIcon size={20} color={colors.title} name="grid" />
            </TouchableOpacity>
          </View>

          <ScrollView contentContainerStyle={{ paddingBottom: 100 }}>
            <Swiper
              style={{
                height: 180,
              }}
              dotColor={colors.borderColor}
              activeDotColor={COLORS.primary}
              paginationStyle={{
                bottom: 0,
              }}
            >
              {bannerData.map((data, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      paddingHorizontal: 15,
                    }}
                  >
                    <BannerCard
                      image={data.image}
                      title={data.title}
                      subTitle={data.subTitle}
                    />
                  </View>
                );
              })}
            </Swiper>
            {/* <ScrollView
                horizontal
                pagingEnabled
                decelerationRate="fast"
                contentContainerStyle={styles.scrollView}
                showsHorizontalScrollIndicator={false}
                snapToInterval={itemWidth + gap}>


              </ScrollView> */}

            <BalanceChart home={true} />

            <View
              style={{
                flexDirection: "row",
                marginHorizontal: 5,
                marginBottom: 25,
                marginTop: -30,
              }}
            >
              {CardData.map((data, index) => {
                return (
                  <View
                    key={index}
                    style={{
                      flex: 1,
                      marginHorizontal: 3,
                    }}
                  >
                    <PortfolioCard
                      title={data.title}
                      icon={data.icon}
                      rate={data.rate}
                      amount={data.amount}
                    />
                  </View>
                );
              })}
            </View>

            <View style={{ ...GlobalStyleSheet.container, paddingTop: 0 }}>
              <ButtonContainer
                buttons={buttons}
                onClick={onCLick}
                scrollX={scrollX}
              />
            </View>
            <ScrollView
              ref={(e) => (this.scrollViewHome = e)}
              horizontal
              pagingEnabled
              scrollEventThrottle={16}
              scrollEnabled={false}
              decelerationRate="fast"
              showsHorizontalScrollIndicator={false}
              onScroll={Animated.event(
                [{ nativeEvent: { contentOffset: { x: scrollX } } }],
                { useNativeDriver: false }
              )}
            >
              {/* Favourite */}
              <View style={[styles.card]}>
                {ListData.map((data, index) => (
                  <ListItem
                    key={index}
                    icon={data.icon}
                    coin={data.coin}
                    rate={data.rate}
                    amount={data.amount}
                    subTitle={data.subTitle}
                    sheet={refRBSheet}
                  />
                ))}
              </View>

              {/* Top Gainers */}
              <View style={[styles.card]}>
                {ListData.map((data, index) => (
                  <ListItem
                    key={index}
                    icon={data.icon}
                    coin={data.coin}
                    rate={data.rate}
                    amount={data.amount}
                    subTitle={data.subTitle}
                    sheet={refRBSheet}
                  />
                ))}
              </View>

              {/* Top Losers */}
              <View style={[styles.card]}>
                {ListData.map((data, index) => (
                  <ListItem
                    key={index}
                    icon={data.icon}
                    coin={data.coin}
                    rate={data.rate}
                    amount={data.amount}
                    subTitle={data.subTitle}
                    sheet={refRBSheet}
                  />
                ))}
              </View>
            </ScrollView>
          </ScrollView>
        </View>
      </SafeAreaView>
    </>
  );
};

const ListItem = ({ icon, coin, rate, amount, subTitle, sheet }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();

  const renderLeftActions = (progress, dragX) => {
    return (
      <Animated.View
        style={[
          {
            flexDirection: "row",
            opacity: 1,
            left: -260,
            marginBottom: 8,
            transform: [
              {
                translateX: dragX,
              },
            ],
          },
        ]}
      >
        <LinearGradient
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0.5 }}
          colors={["#d79649", "#9b6e39"]}
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 10,
            borderTopRightRadius: SIZES.radius,
            borderBottomRightRadius: SIZES.radius,
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.navigate("Deposit")}
            style={styles.swipeBtn}
          >
            <Text
              style={{
                ...FONTS.font,
                color: COLORS.white,
                ...FONTS.fontMedium,
              }}
            >
              Deposit
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate("Withdraw")}
            style={styles.swipeBtn}
          >
            <Text
              style={{
                ...FONTS.font,
                color: COLORS.white,
                ...FONTS.fontMedium,
              }}
            >
              Withdraw
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => sheet.current.open()}
            style={styles.swipeBtn}
          >
            <Text
              style={{
                ...FONTS.font,
                color: COLORS.white,
                ...FONTS.fontMedium,
              }}
            >
              Transfer
            </Text>
          </TouchableOpacity>
        </LinearGradient>
      </Animated.View>
    );
  };

  return (
    <Swipeable renderLeftActions={renderLeftActions}>
      <View
        style={{
          ...styles.listItem,
          borderColor: colors.borderColor,
          backgroundColor: colors.bgLight,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Image
            style={{
              height: 35,
              width: 35,
              marginRight: 10,
              resizeMode: "contain",
            }}
            source={icon}
          />
          <View>
            <Text style={{ ...FONTS.h6, color: colors.title, marginBottom: 4 }}>
              {coin}
            </Text>
            <Text style={{ ...FONTS.fontSm, color: colors.text }}>
              {subTitle}
            </Text>
          </View>
        </View>
        <View style={{ alignItems: "flex-end" }}>
          <Text style={{ ...FONTS.h6, color: colors.title, marginBottom: 2 }}>
            {amount}
          </Text>
          <Text style={{ ...FONTS.fontSm, color: COLORS.success }}>{rate}</Text>
        </View>
      </View>
    </Swipeable>
  );
};

function ButtonContainer({ buttons, onClick, scrollX }) {
  const [btnContainerWidth, setWidth] = useState(0);
  const btnWidth = btnContainerWidth / buttons.length;
  const translateX = scrollX.interpolate({
    inputRange: [0, width],
    outputRange: [0, btnWidth],
  });
  const translateXOpposit = scrollX.interpolate({
    inputRange: [0, width],
    outputRange: [0, -btnWidth],
  });
  const { colors } = useTheme();

  return (
    <View
      style={{ ...styles.btnContainer, backgroundColor: colors.bgLight }}
      onLayout={(e) => setWidth(e.nativeEvent.layout.width)}
    >
      {buttons.map((btn, i) => (
        <TouchableOpacity
          key={btn}
          style={styles.btn}
          onPress={() => onClick(i)}
        >
          <Text
            style={{ ...FONTS.font, ...FONTS.fontMedium, color: colors.text }}
          >
            {btn}
          </Text>
        </TouchableOpacity>
      ))}
      <Animated.View
        style={[
          styles.animatedBtnContainer,
          { width: btnWidth, transform: [{ translateX }] },
        ]}
      >
        {buttons.map((btn) => (
          <Animated.View
            key={btn}
            style={[
              styles.animatedBtn,
              {
                width: btnWidth,
                transform: [{ translateX: translateXOpposit }],
              },
            ]}
          >
            <Text
              style={{
                ...FONTS.font,
                ...FONTS.fontMedium,
                color: COLORS.white,
              }}
            >
              {btn}
            </Text>
            <View
              style={{
                height: 45,
                width: btnWidth,
                backgroundColor: COLORS.primary,
                position: "absolute",
                zIndex: -1,
                bottom: 0,
              }}
            />
          </Animated.View>
        ))}
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    height: 45,
    //overflow: 'hidden',
    flexDirection: "row",
    width: "100%",
    borderRadius: 30,
  },
  btn: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  animatedBtnContainer: {
    height: 45,
    flexDirection: "row",
    position: "absolute",
    borderRadius: 30,
    overflow: "hidden",
  },
  animatedBtn: {
    height: 45,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTextActive: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    width: width,
  },
  inputBox: {
    borderRadius: SIZES.radius,
    width: SIZES.width - 110,
    height: 45,
    borderWidth: 2,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  inputBoxInner: {
    position: "absolute",
    zIndex: -1,
  },
  listItem: {
    flexDirection: "row",
    marginHorizontal: 15,
    paddingVertical: 12,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderRadius: SIZES.radiusLg,
    marginBottom: 8,
    paddingHorizontal: 14,
  },

  modalContainer: {
    backgroundColor: "rgba(0,0,0,.4)",
    flex: 1,
    justifyContent: "center",
    padding: 15,
  },

  swipeBtn: {
    backgroundColor: "rgba(255,255,255,.1)",
    height: 40,
    borderRadius: 7,
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 12,
    marginRight: 5,
  },

  scrollView: {
    paddingLeft: (SIZES.width - itemWidth) / 2,
    paddingRight: (SIZES.width - itemWidth) / 2 - 10,
    alignItems: "center",
    paddingBottom: 20,
    paddingTop: 20,
  },
});

export default HomeScreen;
