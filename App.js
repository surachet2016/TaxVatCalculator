import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import ResultPage from "./ResultPage";
import CurrencyCalculator from "./CurrencyCalculator";

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="CurrencyCalculator">
        <Stack.Screen name="คำนวณค่าภาษี" component={CurrencyCalculator} />
        <Stack.Screen name="ResultPage" component={ResultPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
