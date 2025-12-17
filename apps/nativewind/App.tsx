import './global.css';

import { StatusBar, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView className="flex-1 bg-background">
        <View className="flex-1 items-center justify-center p-6 bg-gray-a3">
          <Text className="text-6 font-bold text-blue-11 mb-2">Frosted UI</Text>
          <Text className="text-2 text-magenta-11">
            React Native + NativeWind
          </Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
