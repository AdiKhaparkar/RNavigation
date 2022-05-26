import React from 'react'
import { View, Text,StyleSheet, Button} from 'react-native'
import navigationStrings from '../../constants/navigationStrings';
import styles from './style';


const Profile=({navigation})=>{
    console.log("Props Available", navigation)
    return (
        <View style={styles.container}>
            <Button onPress={()=>navigation.navigate(navigationStrings.PROFILE)} title="Go to profile"></Button>
        </View>
    )
};





export default Profile;