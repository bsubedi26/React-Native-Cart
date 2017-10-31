import { Dimensions } from 'react-native'
import { Header } from 'react-navigation'

const { width, height } = Dimensions.get('window')

const AppStyles = {
  totalHeight: height,
  centerHeight: height / 2,
  headerHeight: Header.HEIGHT,
  tabbarHeight: 49, // ios (from react-navigation)
}

export default AppStyles
