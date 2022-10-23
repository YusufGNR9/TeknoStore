import { View, TextInput } from 'react-native'
import React from 'react'
import styles from "./SearchBar.style"

const SearchBar = () => {
  return (
    <View>
      <TextInput 
        style={styles.searchBarContainer}
        placeholder="Ara..." 
        placeholderTextColor="grey"
      />
    </View>
  )
}

export default SearchBar