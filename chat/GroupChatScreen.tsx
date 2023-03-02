import React, { useState, useCallback, useEffect } from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  TouchableOpacity,
} from "react-native";
import colors from "../../../colors";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import {
  Bubble,
  BubbleProps,
  GiftedChat,
  IMessage,
  Send,
  SendProps,
} from "react-native-gifted-chat";
import icons from "../../../assets/iconsUrl";

export default function GroupChatScreen({ navigation }: any) {
  const [messages, setMessages] = useState<IMessage[]>([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: "Hello developer, Welcome to our group. This is a text of what we are going to achieve after developing this chat interface. Goodluck.",
        createdAt: new Date(),
        user: {
          _id: `${new Date()}`,
          name: "Samson Josh",
          avatar: "https://placeimg.com/140/140/any",
        },
      },
    ]);
  }, []);

  // On Send Action
  const onSend = useCallback((messages: IMessage[] = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(previousMessages, messages)
    );
  }, []);

  // Change Chat Bubble Color
  const renderBubble = (props: Readonly<BubbleProps<IMessage>>) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: { backgroundColor: colors.secondary, padding: 7 },
          left: { backgroundColor: colors.white, padding: 7 },
        }}
        textStyle={{
          right: { color: colors.white },
          left: { color: colors.secondary },
        }}
      />
    );
  };

  // Change Send Button
  const renderSend = (props: SendProps<IMessage>) => {
    return (
      <Send {...props}>
        <View style={{ marginBottom: 7, marginRight: 10 }}>
          <Ionicons name="send" size={26} color={colors.secondary} />
        </View>
      </Send>
    );
  };

  // Chnage scrollToBottomIcon
  const scrollToBottomIcon = () => {
    return <AntDesign name="down" size={24} color={colors.secondary} />;
  };

  return (
    <SafeAreaView style={styles.wrapper}>
      <StatusBar backgroundColor={colors.white} barStyle={"dark-content"} />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <AntDesign name="left" size={22} color={colors.secondary} />
        </TouchableOpacity>

        {/* Service and Details Icon */}
        <View style={styles.chatInfo}>
          {icons.netflix}

          <TouchableOpacity style={{ marginLeft: 15 }} onPress={() => {}}>
            <Ionicons
              name="ios-information-circle-outline"
              size={26}
              color={colors.secondary}
            />
          </TouchableOpacity>
        </View>
      </View>

      <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={(messages) => onSend(messages)}
        user={{
          _id: 1,
          name: "NIPPYSKY",
          avatar: "https://placeimg.com/140/140/any",
        }}
        renderAvatarOnTop={true}
        renderUsernameOnMessage={true}
        renderBubble={renderBubble}
        renderSend={renderSend}
        scrollToBottomComponent={scrollToBottomIcon}
        alwaysShowSend
        scrollToBottom
        showUserAvatar
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: colors.mainBG,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 10,
    backgroundColor: colors.white,
  },

  chatInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
});
