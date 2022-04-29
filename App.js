import React, { useState } from 'react';
import {
  StyleSheet, View, Text, ScrollView,
  RefreshControl, FlatList, SectionList, SafeAreaView
} from 'react-native';

const App = () => {

  const [item, setItems] = useState([
    { value: 'item1' },
    { value: 'item2' },
    { value: 'item3' },
    { value: 'item4' },
    { value: 'item5' },
    { value: 'item6' },
    { value: 'item7' },
    { value: 'item8' },
    { value: 'item9' }
  ])

  const [isRefreshing, setRefresh] = useState(false)

  const onRefreshScroll = () => {
    setRefresh(true)
    setItems([...item, { value: '3748' }])
    setRefresh(false)
  }

  const DATA = [
    {
      title: 'item1',
      data: ['item 1-1', 'item 1-2', 'item 1-3']
    },
    {
      title: 'item2',
      data: ['item 2-1', 'item 2-2', 'item 2-3']
    },
    {
      title: 'item3',
      data: ['item 3-1', 'item 3-2']
    },
    {
      title: 'item4',
      data: ['item 4-1']
    },
    {
      title: 'item5',
      data: ['item 5-1', 'item 5-2', 'item 5-3']
    },
    {
      title: 'item6',
      data: ['item 6-1', 'item 6-2', 'item 6-3']
    },
    {
      title: 'item7',
      data: ['item 7-1', 'item 7-2', 'item 7-3']
    },
  ]

  // const DATA11 = [
  //   {
  //     title: 'Title 1',
  //     data: ['Item 1-1', 'Item 1-2', 'Item 1-3'],
  //   },
  //   {
  //     title: 'Title 2',
  //     data: ['Item 2-1', 'Item 2-2', 'Item 2-3'],
  //   },
  //   {
  //     title: 'Title 3',
  //     data: ['Item 3-1'],
  //   },
  //   {
  //     title: 'Title 4',
  //     data: ['Item 4-1', 'Item 4-2'],
  //   },
  // ]

  return (
    // <View style={styles.body}>
    /*  { <View style={styles.item1}>
          <Text style={styles.text}>Item1</Text>
        </View>
        <View style={styles.item1}>
          <Text style={styles.text}>Item2</Text>
        </View>
        <View style={styles.item1}>
          <Text style={styles.text}>Item3</Text>
        </View>
        <View style={styles.item1}>
          <Text style={styles.text}>Item4</Text>
        </View>
        <View style={styles.item1}>
          <Text style={styles.text}>Item5</Text>
        </View>
        <View style={styles.item1}>
          <Text style={styles.text}>Item6</Text>
        </View>
        <View style={styles.item1}>
          <Text style={styles.text}>Item7</Text>
        </View>
        <View style={styles.item1}>
          <Text style={styles.text}>Item8</Text>
        </View>
        <View style={styles.item1}>
          <Text style={styles.text}>Item9</Text>
        </View> */

    // < ScrollView
    //   style={styles.body}
    //   horizontal={false}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={isRefreshing}
    //       onRefresh={onRefreshScroll}
    //       colors={['#F68F33']}
    //     />
    //   }>

    //   {
    //     item.map((item) => {
    //       return (
    //         <View style={styles.item1} key={item.key} >
    //           <Text style={styles.text}>{item.value}</Text>
    //         </View>
    //       )
    //     })
    //   }
    // </ScrollView >
    // </View >
    //  );
    // <FlatList
    //   //numColumns={3}
    //   //horizontal
    //   //inverted={true}
    //   keyExtractor={(item, index) => index}
    //   data={item}
    //   renderItem={({ item }) => (
    //     <View style={styles.item1} >
    //       <Text style={styles.text}>{item.value}</Text>
    //     </View>
    //   )}
    //   refreshControl={
    //     <RefreshControl
    //       refreshing={isRefreshing}
    //       onRefresh={onRefreshScroll}
    //       colors={['#F68F33']}
    //     />
    //   }
    // />

    <SectionList
      style={styles.body}
      scrollEnabled
      keyExtractor={(item, index) => index.toString()}
      sections={DATA}
      renderItem={({ item }) => (
        <Text style={styles.text}>{item}</Text>
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.item1} >
          <Text style={styles.text}>{section.title}</Text>
        </View>
      )}
    />

  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16
  },
  body: {
    backgroundColor: '#F678FF',
    flex: 1
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 20,
    flex: 1

  },
  item1: {
    backgroundColor: '#00F000',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10,
    flex: 1
  },

});

export default App;
