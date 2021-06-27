import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './components/landingPage';
import GameScreen from './components/theGame';
import { getWords } from './utils/database';

const Stack = createStackNavigator();

function App() {
  // example of how you would call it.
  const [words, setWords] = React.useState([]);
  React.useEffect(() => {
    const loadWords = async () => {
      setWords(await getWords());
      // TODO loads the words into the state.
    };
    loadWords();
  }, []);

  return words ? (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          options={{ headerShown: false }}
          name="Home"
          component={HomeScreen}
        />
        <Stack.Screen
          name="Next"
          options={{ headerShown: false }}
          component={GameScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  ) : null;
}

export default App;
