import React from 'react';
import { StyleSheet, View, Text} from 'react-native';


{/*HUSK AT SKIFTE NAVN*/}
const PropsComponent = (props) => {
    const {name} = props
    return (
            <View style={styles.container}>
               <Text>{name}</Text>
            </View>
    );
}

{/*HUSK AT SKIFTE NAVN*/}
export default PropsComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});