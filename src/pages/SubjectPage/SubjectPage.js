import React from 'react';
import {Text, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
import {connect} from 'react-redux';

import {addSubject} from '../../store/actions/SubjectsActions';

import styles from './styles';

class SubjectPage extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.subjectsText}>Select subjects below!</Text>

        <View style={styles.subjectCardContainer}>
          <ScrollView>
            {this.props.subjects.all_subjects.map((subject) => (
              <TouchableOpacity
                style={styles.subjectButton}
                key={subject}
                onPress={() => {
                  this.props.addedSubject(subject);
                  this.props.navigation.goBack();
                }}>
                <Text>{`Add ${subject}`}</Text>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      </View>
    );
  }
}

const mapStateToProps = (state) => {
  const {subjects} = state;
  return {subjects};
};

const mapDispatchToProps = (dispatch) => {
  return {
    addedSubject: (subject) => {
      dispatch(addSubject(subject));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SubjectPage);
