// Librarys
import React from 'react';
import {Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

//Components
import CardComponent from '../../components/Card/CardComponent';

// Styles
import styles from './styles';

class HomePage extends React.PureComponent {
  state = {
    current: this.props.current,
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.subjectTextContainer}>
          <Text style={styles.subjectTextDescription}>Your Subjects:</Text>

          <Text style={styles.subjectTextCounter}>
            You have {this.state.current.current.length} subject(s).
          </Text>
        </View>

        <View style={styles.subjectCardContainer}>
          <CardComponent />
        </View>

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
