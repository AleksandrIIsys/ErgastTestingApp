import React from 'react';
import {FlatList, ScrollView, Text, Touchable, TouchableOpacity, View} from 'react-native';
import {MainNavigationParams} from '../../navigations/main-navigation.tsx';
import {StackScreenProps} from '@react-navigation/stack';
import {useGetDriverByIdQuery, useGetDriverResultsQuery} from '../../services/modules/drivers';
import {styles} from './styles.ts';
import Metrics from '../../utils/Metrics.ts';

const Index = ({navigation, route} : StackScreenProps<MainNavigationParams, 'DriverScreen'>) => {
  const { driverId } = route.params;
  const { data: driverData, isLoading: isLoadingDriver, isError: isErrorDriver } = useGetDriverByIdQuery({id: driverId},{});
  const { data: driverResultsData, isLoading: isLoadingDriverResults, isError: isErrorDriverResults } = useGetDriverResultsQuery({id: driverId},{});
  console.log(driverResultsData);
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.buttonBack}
        onPress={() => navigation.goBack()}>
        <Text style={styles.text24}>Go Back</Text>
      </TouchableOpacity>
      {isLoadingDriver && (
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: Metrics.getHeight(60)}}>LOADING</Text>
        </View>
      )}
      {isErrorDriver && (
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: Metrics.getHeight(60)}}>ERROR</Text>
        </View>
      )}
      {!isLoadingDriver && !isErrorDriver && driverData && (
        Object.keys(driverData.MRData.DriverTable.Drivers[0]).map(key => (
          <View key={key} style={{flexDirection: 'row'}}>
            <Text style={styles.textBold}>{key}</Text>
            <Text>
              : {(driverData.MRData.DriverTable.Drivers[0] as any)[key]}
            </Text>
          </View>
        ))
      )}
      <Text style={styles.text24}>Races:</Text>
      {isLoadingDriverResults && (
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: Metrics.getHeight(60)}}>LOADING</Text>
        </View>
      )}
      {isErrorDriverResults && (
        <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: Metrics.getHeight(60)}}>ERROR</Text>
        </View>
      )}
      <FlatList
        data={
          !driverResultsData && isLoadingDriverResults && !isErrorDriverResults ? [] : driverResultsData.MRData.RaceTable.Races
        }
        renderItem={({item, index}) => (
          <TouchableOpacity key={index+'1'}>
            {Object.keys(item).map((key) =>
              typeof (item as any)[key] === 'string' ? (
                <View key={key} style={styles.textBlock}>
                  <Text style={styles.textBold}>{key}</Text>
                  <Text>:</Text>
                  <Text>{(item as any)[key]}</Text>
                </View>
              ) : (
                <></>
              ),
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Index;
