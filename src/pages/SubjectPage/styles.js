import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },

  subjectsText: {
    fontSize: 28,
    textAlign: 'center',
    paddingTop: -24,
    paddingBottom: 40,
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

  subjectButton: {
    paddingTop: 5,
    paddingBottom: 5,
  },
});

export default styles;
