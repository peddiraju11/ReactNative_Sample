import React, { useState } from 'react';
import {
  StyleSheet, View, Text, ScrollView, RefreshControl
} from 'react-native';

const App = () => {

  const [item, setItems] = useState([
    { key: 1, value: 'item1' },
    { key: 2, value: 'item2' },
    { key: 3, value: 'item3' },
    { key: 4, value: 'item4' },
    { key: 5, value: 'item5' },
    { key: 6, value: 'item6' },
    { key: 7, value: 'item7' },
    { key: 8, value: 'item8' },
    { key: 9, value: 'item9' }
  ])

  const [isRefreshing, setRefresh] = useState(false)

  const onRefreshScroll = () => {
    setRefresh(true)
    setItems([...item, { key: 123, value: '3748' }])
    setRefresh(false)
  }

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

    < ScrollView
      style={styles.body}
      horizontal={false}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={onRefreshScroll}
          colors={['#F68F33']}
        />
      }>

      {
        item.map((item) => {
          return (
            <View style={styles.item1} key={item.key} >
              <Text style={styles.text}>{item.value}</Text>
            </View>
          )
        })
      }
    </ScrollView >
    // </View >
    //  );
  )
};

const styles = StyleSheet.create({

  body: {
    backgroundColor: '#F678FF',
  },
  text: {
    color: '#000000',
    fontSize: 20,
    margin: 20,

  },
  item1: {
    backgroundColor: '#00F000',
    justifyContent: 'center',
    alignItems: 'center',
    margin: 10
  },

});

export default App;
