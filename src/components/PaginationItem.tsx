import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import Metrics from '../utils/Metrics.ts';

type PaginationItemProps = {
  pageNumber: number;
  selected?: boolean;
  onPress?: () => void;
}

const styles = StyleSheet.create({
  container: {
    borderStyle: 'solid',
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    minWidth: 28,
    paddingHorizontal: 4,
    height: 28,
    borderRadius: 8},
  selected: {
    backgroundColor: 'lightgray',
  }
});

const PaginationItem = ({pageNumber, selected, onPress}: PaginationItemProps) => {
  return (
    <TouchableOpacity style={[styles.container, selected ? styles.selected : {}]} onPress={onPress} disabled={pageNumber === -1}>
      <Text>{pageNumber < 0 ? '...' : pageNumber}</Text>
    </TouchableOpacity>
  );
};

export default PaginationItem;
