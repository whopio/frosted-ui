import './global.css';

import { StatusBar, Text, View, useColorScheme } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <SafeAreaView className="flex-1 bg-white">
        <View className="flex-1 items-center justify-center p-6">
          <Text className="text-3xl font-bold text-red-900 mb-2">
            React Native
          </Text>
          <Text className="text-lg text-gray-600">with NativeWind</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

export default App;
