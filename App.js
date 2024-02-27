import * as React from 'react'; import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


function HomeScreen({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Annely</Text>
<Button title="Pietra" onPress={() => navigation.navigate('Pietra')} />
<Button title="Alice" onPress={() => navigation.push('Alice')}/>
</View>
 );
}


function PietraScreen({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Pietra</Text>
<Text>
 eu confio nela porque ela compartilha das mesmas loucuras comigo, ela me entendo, não me julga, ri das mesmas coisas que eu e aceita as ideias malucas
</Text>
<Text>
quero que ela imite uma passista de samba
</Text>
<Button title="Go to Home" onPress={() => navigation.navigate('Home')}  />
</View>
);
}


function AliceScreen({ navigation }) {
return (
<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
<Text>Alice</Text>
<Text>
 eu confio nela porque ela compartilha fofocas comigo, pensamos muito parecido e temos opiniões semelhantes
</Text>

<Text>
 quero que ela imite um pombo
</Text>
<Button title="Go to Home" onPress={() => navigation.navigate('Home')}  />
</View>
);
}


const Stack = createNativeStackNavigator();
function App() {
return (
<NavigationContainer>
<Stack.Navigator initialRouteName="Home">
<Stack.Screen name="Home" component={HomeScreen} />
<Stack.Screen name="Pietra" component={PietraScreen} />
<Stack.Screen name="Alice" component={AliceScreen} />
</Stack.Navigator>
</NavigationContainer>
);
}


export default App;


