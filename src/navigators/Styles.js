import { StyleSheet, Platform } from 'react-native'
import { Constants } from 'expo'
import Metrics from 'src/themes/Metrics'


const styles = StyleSheet.create({
  headerStyles: {
    height: Metrics.navBarHeight,
    // paddingTop: Constants.statusBarHeight,
    // backgroundColor: 'deepskyblue',
    // justifyContent: 'center',
    // borderRadius: 3,
    // borderColor: 'aqua',
    // borderWidth: 6,
    // paddingBottom: 10
  },
  leftIcon: {
    paddingHorizontal: 10
  }
})

export default styles