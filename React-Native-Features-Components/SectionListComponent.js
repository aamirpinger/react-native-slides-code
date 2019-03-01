import React from 'react';
import { Text, View, SectionList } from 'react-native'

function SectionListComponent() {
    return (
        <View>
            <SectionList
                renderItem={({ item, index, section }) => <Text key={index}>{item}</Text>}
                renderSectionHeader={({ section: { title } }) => (
                    <Text style={{ fontWeight: 'bold' }}>{'\n'}{title}{'\n'}</Text>
                )}
                sections={[
                    { title: 'Sindh', data: ['Karachi', 'Hyderabad'] },
                    { title: 'Punjab', data: ['Lahore', 'Islamabad'] },
                    { title: 'KPK', data: ['Hunza', 'Pehsawar'] },
                    { title: 'Balochistan', data: ['Quetta', 'Hub'] },
                ]}
                keyExtractor={(item, index) => item + index}
            />
        </View>
    )
}

export default SectionListComponent