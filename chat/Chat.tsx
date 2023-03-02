import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import NavHeader from "../../../components/NavHeader";
import colors from "../../../colors";
import SubShareText from "../../../components/SubshareText";
import icons from "../../../assets/iconsUrl";
import { chat } from "../../../dummy-data";

export default function Chat({ navigation }: { navigation: any }) {
  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor={colors.mainBG} barStyle={"dark-content"} />

      <View style={styles.body}>
        <NavHeader
          pageName={"Chat"}
          notifyNavigation={() => navigation.navigate("Notifications")}
          profileNavigation={() => navigation.navigate("MyProfile")}
        />
        <View style={{ marginVertical: 30 }}>
          <SubShareText
            text={"Groups You Belong To"}
            size={16}
            color={colors.inactive}
            family={"MontserratBold"}
            line={undefined}
          />
        </View>

        <FlatList
          showsVerticalScrollIndicator={false}
          data={chat}
          keyExtractor={(chat) => chat.id}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={styles.chatCard}
              onPress={() => navigation.navigate("GroupChat")}
            >
              <View style={styles.chatName}>
                <SubShareText
                  text={
                    item.name.length > 40
                      ? item.name.slice(0, 40) + "..."
                      : item.name
                  }
                  size={15}
                  color={colors.black}
                  family={"MontserratBold"}
                  line={undefined}
                />
              </View>

              <View style={styles.chatIcon}>
                {item.service === "Netflix"
                  ? icons.netflix
                  : item.service === "Apple Music"
                  ? icons.appleMusic
                  : item.service === "Spotify"
                  ? icons.spotify
                  : item.service === "Youtube"
                  ? icons.youTube
                  : null}
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.mainBG,
  },

  body: {
    paddingTop: 10,
    paddingBottom: 25,
    paddingHorizontal: 25,
  },

  chatCard: {
    backgroundColor: colors.white,
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderRadius: 10,
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 10,
  },

  chatName: {
    width: "70%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
  },

  chatIcon: {
    width: "30%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
