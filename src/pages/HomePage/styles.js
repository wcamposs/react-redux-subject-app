import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  subjectTextContainer: {
    marginBottom: 10,
  },

  subjectTextDescription: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    paddingBottom: 5,
  },

  subjectTextCounter: {
    fontSize: 14,
    fontStyle: 'italic',
    textAlign: 'center',
  },

  subjectCardContainer: {
    height: 550,
    width: 380,
    marginBottom: 20,
    borderRadius: 20,
    alignItems: 'center',
    backgroundColor: '#e6e6e6',

    //Card Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  addSubjectsButton: {
    borderRadius: 40,
    height: 60,
    width: 360,
    backgroundColor: '#8720c7',

    //Card Shadow
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.32,
    shadowRadius: 5.46,

    elevation: 9,
  },

  addSubjectsButtonText: {
    marginTop: 14,
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 22,
    color: 'white',
  },
});

export default styles;
