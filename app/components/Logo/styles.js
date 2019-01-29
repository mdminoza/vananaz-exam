import { Dimensions } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';

const imageWidth = Dimensions.get('window').width - 140;

console.log(imageWidth);

export default EStyleSheet.create({
  container: {
    alignItems: 'center',
    // marginBottom: 0,
  },
  containerImage: {
    width: imageWidth,
    height: imageWidth,
  },
  text: {
    fontWeight: '600',
    fontSize: 28,
    letterSpacing: -0.5,
    marginTop: 15,
    color: '$white',
  },
});
