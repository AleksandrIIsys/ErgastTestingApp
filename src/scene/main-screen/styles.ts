import {StyleSheet} from 'react-native';
import Metrics from '../../utils/Metrics.ts';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tableContainer:{
    flex: 1,
    gap: Metrics.getHeight(4),
    marginTop: Metrics.getHeight(16),
  },
  tableElement: {
    padding: Metrics.getHeight(8),
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'lightgrey',
    height: Metrics.getHeight(52),
  },
  paginationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    gap: Metrics.getWidth(16),
    marginBottom: Metrics.getHeight(40),
  },
});
