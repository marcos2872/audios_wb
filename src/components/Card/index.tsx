import React from "react";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { stylesCard } from "./styles.Card";
import { IData } from "../../interfaces/IDataApi";
import { useNavigation } from "@react-navigation/native";

const HomeCards: React.FC<{ data: IData, type?: string }> = ({ data, type }) => {
  const { navigate } = useNavigation() as {
    navigate: (para: string, {}) => void;
  };

  return (
    <TouchableOpacity
      style={stylesCard.main}
      onPress={() => {
        if (type === "pdf") {
          return navigate("pdf", { id: data.id });
        }
        navigate("player", { id: data.id });
      }}
    >
      <Text style={stylesCard.title}>{data.title}</Text>
      <Text style={stylesCard.year}>{data.details}</Text>
    </TouchableOpacity>
  );
};

export default HomeCards;
