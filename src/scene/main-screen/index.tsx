import React, {Key, useMemo, useState} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {useGetDriversQuery} from '../../services/modules/drivers';
import {styles} from './styles.ts';
import Metrics from '../../utils/Metrics.ts';
import PagintaionItem from '../../components/PaginationItem.tsx';
import { StackScreenProps } from '@react-navigation/stack';
import {MainNavigationParams} from '../../navigations/main-navigation.tsx';



const Index = ({ navigation }: StackScreenProps<MainNavigationParams, 'MainScreen'>) => {
  const [page, setPage] = useState<number>(1);
  const minCountElems = useMemo(
    () => Math.floor((Metrics.screenHeight - 56) / Metrics.getHeight(60)),
    []
  );
  const { data: driversData, isLoading } = useGetDriversQuery({
    limit: minCountElems,
    offset: (page - 1) * minCountElems  ,
  },{ });

  const maxCountPage = useMemo(
    () => Math.ceil((driversData ? +driversData.MRData.total : 0) / minCountElems),
    [driversData, minCountElems]
  );

  const onPressPaginationElement = (item: number) => setPage(item);
  const onPressDriver = (driverId: string) => navigation.navigate('DriverScreen', {driverId});
  return (
    <View style={styles.container}>
      <View style={styles.tableContainer}>
        {isLoading ? (
          <View style={{alignItems: 'center'}}>
            <Text style={{fontSize: Metrics.getHeight(60)}}>LOADING</Text>
          </View>
        ) : (
          driversData?.MRData.DriverTable.Drivers.map(driver => (
            <TouchableOpacity
              style={styles.tableElement}
              onPress={() => onPressDriver(driver.driverId)}
              key={driver.driverId as Key}>
              <Text>
                {driver.givenName} {driver.familyName}
              </Text>
            </TouchableOpacity>
          ))
        )}
      </View>
      <View style={styles.paginationContainer}>
        {[
          1,
          ...(maxCountPage > 6
            ? page >= 5
              ? page >= maxCountPage - 3
                ? [
                    -2,
                    maxCountPage - 4,
                    maxCountPage - 3,
                    maxCountPage - 2,
                    maxCountPage - 1,
                    maxCountPage,
                  ]
                : [-2, page - 1, page, page + 1, -1, maxCountPage]
              : [2, 3, 4, 5, -1, maxCountPage]
            : Array(maxCountPage > 0 ? maxCountPage - 1 : 0).fill(0).map((_, index) => index + 2)),
        ].map(item => (
          <PagintaionItem
            pageNumber={item}
            selected={page === item}
            key={item}
            onPress={() => onPressPaginationElement(item)}
          />
        ))}
      </View>
    </View>
  );
};

export default Index;
