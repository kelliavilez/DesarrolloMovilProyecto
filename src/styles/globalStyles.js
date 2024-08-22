import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -70,
        backgroundColor:'#f7fef4'
    },
    header: {
        marginVertical: 38,
    },
    imagenLog: {
        width: 150,
        height: 150,
        alignSelf: 'center',
        marginBottom: 30,
        borderRadius: 150,
    },
    titleLog: {
        fontSize: 30,
        fontWeight: '800',
        color: '#333333',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitleLog:{
        fontSize: 13,
        fontWeight: '150',
        color: '#333333',
        marginBottom: 10,
        textAlign: 'left',

    },
    textInput: {
        width: 350,
        marginBottom: 16,
        backgroundColor: '#e1f1dd'
    },
    buttonLog: {
        paddingVertical: 5,
        marginBottom: 80
    },
    card: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        backgroundColor: '#7979',
        borderRadius: 10,
        padding: 20,
        margin: 10,
        elevation: 5
    },
    textLog:{
        fontSize:17,
        fontWeight:16,
        textAlign:'center',
    },
    title: {
        fontSize: 20,
    },
    photo: {
        width: 100,
        height: 100,
        borderRadius: 50,
        marginRight: 10
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold',
        marginBottom: 5,
        color: '#100f0f'
    },
    button: {
        color: '#000'
    },
    subtitle: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#000',
        margin: 25,
        padding: 10
    }
    /*text: {
        fontSize: 18,
        fontWeight: 'bold',
        fontFamily: 'System',
        color: '#100f0f',
        marginBottom: 5
    },*/
    /*button: {
        backgroundColor: '#ffe333',
        fontSize: 25
    }*/
});

export default styles;