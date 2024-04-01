import React, { useEffect, useMemo, useState } from "react";
import { SafeAreaView, ScrollView, Text, TextInput, View } from "react-native";
import { stylesSearch } from "./styles.Search";
import { IData } from "../../interfaces/IDataApi";
import Card from "../../components/Card";
import { MaterialIcons } from "@expo/vector-icons";
import { sermoesData } from "../../data/sermoes";
import { defaultTheme } from "../../hooks/useTheme";

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

      <ScrollView>
        <View style={stylesSearch.cards}>
          {audioData.length === sermoesData.length
            ? audioData
                .slice(0, 10)
                .map((curr: IData) => <Card data={curr} key={curr.id} />)
            : audioData.map((curr: IData) => (
                <Card data={curr} key={curr.id} />
              ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Search;
