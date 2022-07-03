import { StyleSheet } from "react-native"
import Utils from "../../../../../helpers"

export const styles = StyleSheet.create({
  containerLoading: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center'
  },
  animation: {
    width: Utils.getWindowSize().vwWidth,
    height: Utils.getWindowSize().vwHeight * 0.30,
  },
})