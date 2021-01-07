import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

function CardComponent() {
  return (
    <View style={styles.container}>
      <View style={styles.subjectContainer}>
        <Text style={styles.subjectName}>Subject Name Here!</Text>
      </View>
    </View>
  );
}

export default CardComponent;
