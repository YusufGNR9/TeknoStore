import { View, Text } from 'react-native'
import React from 'react'
import styles from "./Header.style"

const Header = () => {
  return (
    <View style={styles.headerContainer}>
      <Text style={styles.header}>TeknoStore</Text>
    </View>
  )
}

export default Header