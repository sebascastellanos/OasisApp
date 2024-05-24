import React, { useState, useEffect } from "react";
import * as GoogleGenerativeAI from "@google/generative-ai";
import {
  View,
  Text,
  TextInput,
  FlatList,
  StyleSheet,
} from "react-native";
import FlashMessage, { showMessage } from "react-native-flash-message";

const speakText = (text) => {
  console.log("Texto a reproducir:", text);
};

const GeminiChat = () => {
  const [messages, setMessages] = useState([]);
  const [userInput, setUserInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showStopIcon, setShowStopIcon] = useState(false);

  const APIKEY = "AIzaSyBipy1SCCIk774zNGeFnk5CeibfrbOVDFM";

  useEffect(() => {
    const startChat = async () => {
      const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(APIKEY);
      const model = genAI.getGenerativeModel({ model: "gemini-pro" });
      const prompt = "Preguntame '¿En dónde te encuentras? Si necesitas información sobre algún hospedaje o sitio túristico puedes preguntarme'";
      const result = await model.generateContent(prompt);
      const response = result.response;
      const text = response.text();
      console.log(text);
      showMessage({
        message: "Bienvenido al chatbot 🤖",
        description: text,
        type: "info",
        icon: "info",
        duration: 2000,
      });
      setMessages([
        {
          text,
          user: false,
        },
      ]);
    };
    startChat();
  }, []);

  const toggleSpeech = () => {
    setIsSpeaking(!isSpeaking);
    if (!isSpeaking) {
      const lastMessage = messages[messages.length - 1];
      speakText(lastMessage.text);
    }
  };

  const sendMessage = async () => {
    setLoading(true);
    const userMessage = { text: userInput, user: true };
    setMessages([...messages, userMessage]);

    const genAI = new GoogleGenerativeAI.GoogleGenerativeAI(APIKEY);
    const model = genAI.getGenerativeModel({ model: "gemini-pro" });
    const prompt = userMessage.text;
    const result = await model.generateContent(prompt);
    const response = result.response;
    const text = response.text();
    setMessages([
      ...messages,
      { text: userInput, user: true },
      { text, user: false },
    ]);
    setLoading(false);
    setUserInput("");
  };

  const ClearMessage = () => {
    setMessages([]);
    setIsSpeaking(false);
  };

  const renderMessage = ({ item }) => (
    <View style={item.user ? styles.userMessageContainer : styles.botMessageContainer}>
      <Text style={[styles.messageText, item.user && styles.userMessageText]}>
        {item.text}
      </Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.chatContainer}>
        <FlatList
          data={messages}
          renderItem={renderMessage}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Escribe un mensaje"
          onChangeText={setUserInput}
          value={userInput}
          onSubmitEditing={sendMessage}
          style={styles.input}
          placeholderTextColor="#000"
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#fff" },
  chatContainer: { flex: 1 },
  userMessageContainer: { alignSelf: "flex-end", backgroundColor: "#8DD68F", padding: 10, marginHorizontal: 15, marginTop: 10, borderRadius: 10 },
  botMessageContainer: { alignSelf: "flex-start", backgroundColor: "#DEFEDE", padding: 10,  marginHorizontal: 15, marginTop: 10, borderRadius: 10 },
  messageText: { fontSize: 13, color: "black" },
  userMessageText: { fontSize: 13, color: "black" },
  inputContainer: { flexDirection: "row", alignItems: "center", padding: 10 },
  input: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 10,
    height: 50,
    color: "black",
  },
});

export default GeminiChat;
