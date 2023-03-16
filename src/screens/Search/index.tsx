import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import { stylesSearch } from './styles.Search'
import Navbar from '../../components/Navbar'
import { readJson } from '../../utils/readJson'
import { IData } from '../../interfaces/IDataApi'
import HomeCards from '../../components/HomeCards'
import theme from '../../constants/theme'
import { useEffect, useState } from 'react'

const Search = () => {
  const [filter, setFilter] = useState([])
  const [search, setSearch] = useState('')
  const data = readJson()

  useEffect(() => {
    setFilter(data)
  }, [])

  return (
    <SafeAreaView style={stylesSearch.main}>
      <TextInput
        style={stylesSearch.search}
        placeholder='Pesquise por Nome'
        placeholderTextColor={theme.colors.text}
        value={search}
        onChangeText={(value) => {
          setSearch(value)
        }}
        onEndEditing={() => {
          setFilter(
            data.filter(({ title }: { title: string }) => {
              return title.toLowerCase().includes(search.toLowerCase())
            })
          )
        }}
      />

      {!filter.length ? (
        <View style={stylesSearch.nothingFound}>
          <Text style={stylesSearch.text}>Nada Encontrado</Text>
        </View>
      ) : null}

      <ScrollView>
        <View style={stylesSearch.cards}>
          {filter.length === 157
            ? data.reverse().slice(0, 10).map((curr: IData) => (
              <HomeCards data={curr} key={curr.id} />
            ))
            : filter.map((curr: IData) => (
              <HomeCards data={curr} key={curr.id} />
            ))}
        </View>
      </ScrollView>
      <Navbar />
    </SafeAreaView>
  )
}

export default Search