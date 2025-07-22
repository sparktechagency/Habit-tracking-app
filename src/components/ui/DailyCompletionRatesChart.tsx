import tw from '@/src/lib/tailwind';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const DailyCompletionRatesChart = () => {
    const barData = [
        { value: 20, label: 'May 14', frontColor: '#FFA500' },   // 20-30% - orange
        { value: 50, label: 'May 13', frontColor: '#FDBA74' },   // 40-50% - light orange
        { value: 90, label: 'May 12', frontColor: '#22C55E' },   // 80-100% - green
        { value: 66, label: 'May 11', frontColor: '#BBF7D0' },   // 60-70% - light green
        { value: 41, label: 'May 10', frontColor: '#FDBA74' },   // 40-50% - light orange
        { value: 5, label: 'May 9', frontColor: '#EF4444' },     // 0-10% - red
    ];

    return (
        <View style={tw`bg-white shadow-lg p-4  rounded-xl  my-2`}>
            <Text style={tw`text-blackish text-lg font-montserrat-600 mb-4`}>
                Daily Completion Rates
            </Text>

            {/* Legend */}
            <View style={tw`flex-row flex-wrap mb-4`}>
                {[
                    { label: '80-100%', color: '#22C55E' },
                    { label: '60-70%', color: '#BBF7D0' },
                    { label: '40-50%', color: '#FDBA74' },
                    { label: '20-30%', color: '#FFA500' },
                    { label: '0-10%', color: '#EF4444' },
                ].map((item, index) => (
                    <View key={index} style={tw`flex-row gap-1 items-center mr-2 mb-2`}>
                        <View style={[tw`w-3 h-3 `, { backgroundColor: item.color }]} />
                        <Text style={tw`text-gray text-xs`}>{item.label}</Text>
                    </View>
                ))}
            </View>

            {/* Bar Chart */}
            <ScrollView horizontal  >
                <BarChart
                    barWidth={30}
                    noOfSections={5}
                    data={barData}
                    barBorderRadius={12}
                    isAnimated
                    yAxisThickness={0}
                    xAxisThickness={0}
                    hideRules
                    xAxisLabelTextStyle={tw`text-xs text-black`}
                    yAxisTextStyle={tw`text-xs`}
                />
            </ScrollView>
        </View>
    );
};

export default DailyCompletionRatesChart;
