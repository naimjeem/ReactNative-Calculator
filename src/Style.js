import { StyleSheet } from 'react-native';

var Style = StyleSheet.create({
    rootContainer: {
        flex: 1
    },

    displayContainer: {
        flex: 2,
        backgroundColor: '#311b92'
    },

    inputContainer: {
        flex: 8,
        backgroundColor: '#4527a0'
    },
    inputButton: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    
    inputButtonHighlighted: {
        backgroundColor: '#311b92'
    },

    inputButtonText: {
        fontSize: 22, 
        fontWeight: 'bold',
        color: 'white'
    },

    inputRow: {
        flex: 1,
        flexDirection: 'row'
    },

    displayText: {
        color: '#FFF',
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'right',
        padding: 20
    }
});

export default Style;