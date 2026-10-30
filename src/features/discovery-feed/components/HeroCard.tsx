import { StyleSheet, Text, View } from 'react-native'

const HeroCard = () => {
  return (
    <View style={styles.container}>
      <Text>HeroCard</Text>
    </View>
  )
}

const styles = StyleSheet.create({
      container : {
            width : "100%",
            height : 400,
            backgroundColor : "gray",
      }
})

export default HeroCard