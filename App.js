// App.js

import React from 'react';
import { View } from 'react-native';
import Weather from './Weather';
import { styles } from './styles';

const App = () => {
	return (
		<View style={styles.container}>
			<Weather />
		</View>
	);
};

export default App;
