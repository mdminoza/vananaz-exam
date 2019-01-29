import EStyleSheet from 'react-native-extended-stylesheet';

const BORDER_RADIUS = 4;
const INPUT_HEIGHT = 48;

export default EStyleSheet.create({
  inputBorder: {},
  container: {
    marginVertical: 5,
  },
  inputContainer: {
    flexDirection: 'row',
    // width: '90%',
    borderRadius: BORDER_RADIUS,
    borderColor: '#9477cb',
    height: INPUT_HEIGHT,
    borderWidth: 2,
    backgroundColor: '$white',
    alignItems: 'center',
    marginVertical: 5,
  },
  input: {
    fontSize: 20,
    // paddingHorizontal: 10,
    color: '$inputText',
    padding: 10,
    flex: 1,
  },
  formButton: {
    backgroundColor: '#9477cb',
  },
  inputLabel: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '$inputText',
  },
  errorText: {
    color: 'red',
  },
});
