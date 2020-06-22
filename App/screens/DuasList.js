import React from 'react';
import { FlatList } from 'react-native';

import { Row, Separator } from '../components/Row';
import dua from '../data/dua';

export default ({ navigation }) => (
  <FlatList
    data={dua}
    keyExtractor={item => {
      return `${item.id.value}`;
    }}
    renderItem={({ item }) => {
      const name = `${item.title} `;

      return (
        <Row
          
          title={name}
          
          onPress={() => navigation.push('DuasDetails', { dua: item })}
        />
      );
    }}
    ItemSeparatorComponent={Separator}
    ListHeaderComponent={() => <Separator />}
    ListFooterComponent={() => <Separator />}
    contentContainerStyle={{ paddingVertical: 20 }}
  />
);