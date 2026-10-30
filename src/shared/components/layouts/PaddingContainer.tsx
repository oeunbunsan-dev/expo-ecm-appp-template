import { View } from 'react-native'

const PaddingContainer = ({ children }: any) => {
      return (
            <View style={{ flex: 1, padding: 16 }}>
                  {children}
            </View>
      )
}

export default PaddingContainer