import React from 'react';
import { StyleSheet, View} from 'react-native';


{/*HUSK AT SKIFTE NAVN*/}
const ButtonComponent = (props) => {
    const [active, setActive] = useState(false)
    
    return (
            <View style={styles.container}>
               {/*alt vores content*/}
            </View>
    );
}

{/*HUSK AT SKIFTE NAVN*/}
export default ButtonComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});