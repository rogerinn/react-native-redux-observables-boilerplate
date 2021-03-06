import { Dimensions } from 'react-native'
const {
    width,
    height,
} = Dimensions.get('window')

export const styles = {
    input: {
        backgroundColor: '#CCC',
        fontWeight: 'bold',
        padding: 10,
        paddingBottom: 5,
        marginTop: 20,
    },
    view: {
        flex: 5,
        width,
        height,
        paddingLeft: 20,
        paddingRight: 20
    },
}