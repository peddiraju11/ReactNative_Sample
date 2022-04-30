import React, { useState } from 'react';
import {
  StyleSheet, View, Text, SectionList, RefreshControl
} from 'react-native';

const App = () => {

  const [Sections, setSections] = useState([
    {
      title: 'Title 1',
      data: ['Item 1-1', 'Item 1-2'],
    },
  ]);

  const [isRefreshing, setRefresh] = useState(false)

  const clickOnRefresh = () => {
    setRefresh(true)
    const sectionLenght = Sections.length + 1
    setSections([...Sections,
    {
      title: 'Title ' + sectionLenght,
      data: ['Item  ' + sectionLenght + '-1', 'Item  ' + sectionLenght + '-2']
    }
    ])
    setRefresh(false)
  }
  return (
    <SectionList
      keyExtractor={(item, index) => index}
      sections={Sections}
      renderItem={({ item }) => (
        <View style={styles.item}>
          <Text style={styles.text_item}>{item}</Text>
        </View >
      )}
      renderSectionHeader={({ section }) => (
        <View style={styles.header}>
          <Text style={styles.text_header}>{section.title}</Text>
        </View >
      )}
      refreshControl={
        <RefreshControl
          refreshing={isRefreshing}
          onRefresh={clickOnRefresh}
        />
      }

    />
  );
};

const styles = StyleSheet.create({

  header: {
    backgroundColor: '#4ae1fa',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
  },
  item: {
    borderBottomWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text_header: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  },
  text_item: {
    color: '#000000',
    fontSize: 35,
    margin: 5,
  },

});

export default App;
