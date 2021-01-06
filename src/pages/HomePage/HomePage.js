import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

import styles from './styles';

class HomePage extends React.PureComponent {
  state = {
    current: this.props.current,
  };

  render() {
    console.log(this.props.current, this.state);
    return (
      <View style={styles.container}>
        <Text style={styles.subjectTextDescription}>
          You have {this.state.current.current.length} subjects.
        </Text>

        <TouchableOpacity
          style={styles.addSubjectsButton}
          onPress={() => this.props.navigation.navigate('SubjectPage')}>
          <Text style={styles.addSubjectsButtonText}>Add more subjects!</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    current: state.subjects,
  };
};

export default connect(mapStateToProps)(HomePage);
