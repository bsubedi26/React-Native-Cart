import { Dimensions } from 'react-native'
import { Header } from 'react-navigation'

const { width, height } = Dimensions.get('window')

const AppStyles = {
  totalHeight: height,
  centerHeight: height / 2,
  // headerHeight: Header.HEIGHT, // react navigation deprecated warning
  headerHeight: 40,
  tabbarHeight: 49, // ios (from react-navigation)
}

export default AppStyles
