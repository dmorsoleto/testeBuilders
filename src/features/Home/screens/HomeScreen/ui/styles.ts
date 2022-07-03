import { StyleSheet } from "react-native"
import Utils from "../../../../../helpers"

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        width: Utils.moderateScale(60),
        height: Utils.moderateScale(60),
        resizeMode: 'cover'
    },
    btnUpdate: {
        position: 'absolute',
        bottom: Utils.moderateScale(25),
        backgroundColor: '#fff',
        width: Utils.getWindowSize().vwWidth*0.9,
        height: Utils.moderateScale(45),
        borderRadius: Utils.moderateScale(100),
        justifyContent: 'center',
        alignItems: 'center'
    },
    textBtn: {
        fontSize: Utils.moderateScale(14)
    },
    text: {
        fontSize: Utils.moderateScale(15),
        marginBottom: Utils.moderateScale(8)
    },
    lastUpdate: {
        marginBottom: Utils.moderateScale(0),
        marginTop: Utils.moderateScale(35),
        textAlign: 'center',
        lineHeight: Utils.moderateScale(22),
    },
    loading: {
        position: 'absolute',
        bottom: Utils.moderateScale(25),
        justifyContent: 'center',
        alignItems: 'center',
        height: Utils.moderateScale(45),
    },
    bgImage: {
        width: Utils.getWindowSize().vwWidth,
        height: Utils.getWindowSize().vwHeight,
        resizeMode: 'cover',
        position: 'absolute',
        top: 0,
        left: 0,
        opacity: .5
    }
})