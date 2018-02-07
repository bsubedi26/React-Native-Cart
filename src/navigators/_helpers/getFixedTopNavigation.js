import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import Colors from 'src/themes/Colors'
import { Button } from 'react-native'
import s from '../styles'
import { HeaderBackButton } from 'react-navigation'

const menuPressed = (navigation) => {
  return navigation.navigate('DrawerOpen')
}

const renderBackButton = (navigation) => <HeaderBackButton onPress={() => navigation.goBack()} />
const renderMenuIcon = (navigation) => <Ionicons style={s.leftIcon} onPress={menuPressed.bind(this, navigation)} name="md-menu" size={32} color="black" />

export default (navigationTitle, options = {}) => {
  const { childRoute, navigation } = options

  return {
    title: navigationTitle,
    headerLeft: childRoute ? renderBackButton(navigation) : renderMenuIcon(navigation),
    headerRight: <Button style={s.rightIcon} color={Colors.facebook} onPress={() => alert('Right Icon info pressed.')} title="?" />,
    headerStyle: s.headerStyles,
    // headerLeft: <Ionicons style={s.leftIcon} onPress={() => navigation.navigate('DrawerOpen')} name="md-menu" size={32} color="black" />,
    // title: `${navigation.state.params.name}'s Profile!`,
  }
}