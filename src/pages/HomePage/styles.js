import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
  },

  subjectTextDescription: {
    paddingTop: 150,
    paddingBottom: 150,
    fontSize: 22,
    textAlign: 'center',
  },

  addSubjectsButton: {
    marginLeft: 40,
    borderRadius: 80,
    height: 80,
    width: 300,
    backgroundColor: 'green',
  },

  addSubjectsButtonText: {
    marginTop: 23,
    textAlign: 'center',
    fontSize: 22,
    color: 'white',
  },
});

export default styles;
