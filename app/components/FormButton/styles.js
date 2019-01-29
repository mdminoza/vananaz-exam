import EStyleSheet from 'react-native-extended-stylesheet';

const BORDER_RADIUS = 4;
const INPUT_HEIGHT = 48;

export default EStyleSheet.create({
  container: {
    // alignItems: 'center',
    // justifyContent: 'center',
    // width: '90%',
  },
  chckBxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 25,
    marginLeft: 0,
    paddingLeft: 0,
  },
  buttonContainer: {
    // flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  button: {
    flex: 1,
    borderRadius: BORDER_RADIUS,
    backgroundColor: '$primary',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    height: INPUT_HEIGHT,
  },
  buttonDisabled: {
    backgroundColor: '$disabled',
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '$white',
  },
  formCheckbox: {
    color: '$primary',
    borderWidth: 2,
    width: 20,
    height: 20,
  },
  checked: {
    padding: 0,
    margin: 0,
  },
  chckbxText: {
    fontWeight: '400',
    fontSize: 17,
  },
});
