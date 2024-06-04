import React, { useMemo, useState } from "react";
import {
  FlatList,
  SafeAreaView,
  Text,
  TextInput,
  View,
} from "react-native";
import { stylesSearch } from "./styles.Search";
import { IData } from "../../interfaces/IDataApi";
import Card from "../../components/Card";
import { MaterialIcons } from "@expo/vector-icons";
import { sermoesData } from "../../data/sermoes";
import { defaultTheme } from "../../hooks/useTheme";
import Separate from "../../components/Separate";

const Search = () => {
  const [search, setSearch] = useState("");

  const audioData = useMemo(() => {
    return sermoesData.filter(({ title }) =>
      title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <SafeAreaView style={stylesSearch.main}>
      <View style={stylesSearch.searchContainer}>
        <TextInput
          style={stylesSearch.search}
          placeholder="Pesquise por Titulo"
          placeholderTextColor={defaultTheme.colors.color1}
          value={search}
          onChangeText={(value) => {
            setSearch(value);
          }}
        />
        <MaterialIcons
          style={stylesSearch.searchIcon}
          name="search"
          size={30}
          color={defaultTheme.colors.color1}
        />
      </View>

      {!audioData.length ? (
        <View style={stylesSearch.nothingFound}>
          <Text style={stylesSearch.text}>Nada Encontrado</Text>
        </View>
      ) : null}

      <FlatList
        data={audioData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <Card data={item} />}
        ItemSeparatorComponent={() => <Separate />}
      />
    </SafeAreaView>
  );
};

export default Search;
