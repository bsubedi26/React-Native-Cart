import { StyleSheet, Platform } from 'react-native'
import { Constants } from 'expo'
import AppStyles from 'src/constants/AppStyles'

const styles = StyleSheet.create({
  headerStyles: {
    paddingTop: Constants.statusBarHeight,
    height: (Platform.OS === 'android') ? AppStyles.headerHeight + 20 : AppStyles.headerHeight,
    // backgroundColor: 'deepskyblue'
  },
  leftIcon: {
    paddingHorizontal: 10
  }
})

export default styles