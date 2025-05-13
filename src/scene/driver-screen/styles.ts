import {StyleSheet} from 'react-native';
import Metrics from '../../utils/Metrics.ts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: Metrics.getWidth(20),
  },
  containerScroll: {
    flex: 1,
  },
  buttonBack: {
    marginBottom: Metrics.getHeight(20),
    backgroundColor: 'lightgrey',
    alignSelf: 'flex-start',
    padding: 4,
    borderRadius: 12,
  },
  textBlock: {flexDirection: 'row', flexWrap:'wrap'},
  textBold: {
    fontWeight: '900',
  },
  text24: {
    fontSize: 24,
  },
});
