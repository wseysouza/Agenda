import React from 'react';
import { Text, View } from 'react-native';

export function SchedOfTheDay({ route }) {
    console.log(route)
    const date = route.params.date;
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text>{date.dateString}</Text>

        </View>
    )
}