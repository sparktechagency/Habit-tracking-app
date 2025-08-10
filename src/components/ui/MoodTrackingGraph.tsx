import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const MoodTrackingGraph = () => {
    const data = [
        { value: 20, label: 'Sat' },
        { value: 25, label: 'Sun' },
        { value: 40, label: 'Mon' },
        { value: 80, label: 'Tue' },
        { value: 60, label: 'Wed' },
        { value: 30, label: 'Thu' },
        { value: 50, label: 'Fri' },
    ];

    return (
        <View style={tw` `}>
            {/* Title and Subtitle */}
            <View>
                <Text style={tw`text-lg font-montserrat-700 text-blackText mb-2 text-center`}>
                    Daily Habit Track
                </Text>
                <Text style={tw`text-sm font-montserrat-600 text-blackText mb-4 text-center`}>
                    Your mood patterns over the last week
                </Text>
            </View>

            {/* Chart Container */}
            <View style={tw` py-5`}>
                <LineChart
                    data={data}
                    height={200}
                    width={300}
                    yAxisLabelPrefix=""
                    yAxisLabelSuffix=""
                    xAxisLabelTextStyle={{ color: '#000', fontSize: 12, fontWeight: '600' }}
                    yAxisTextStyle={{ color: '#000', fontSize: 12, fontWeight: '600' }}
                    color="#1E90FF"
                    thickness={3}
                    yAxisRange={{ min: 0, max: 100, step: 20 }}
                    showGridLines
                    curved
                    dataPointsColor="#1E90FF"
                    dataPointsRadius={5}
                    startFillColor="rgba(30,144,255,0.1)"
                    endFillColor="rgba(30,144,255,0)"
                    noOfSections={5}
                    maxValue={100}
                    initialSpacing={20}
                    spacing={40}
                    endSpacing={10}
                    renderTooltip={(item: any) => (
                        <View style={tw`bg-[#1E90FF] px-2 py-1 rounded-md`}>
                            <Text style={tw`text-white text-xs font-semibold`}>{item.value}% mood</Text>
                        </View>
                    )}
                />
            </View>

            {/* Legend */}
            <View style={tw`flex-row justify-center mt-4`}>
                <View style={tw`flex-row items-center mr-6`}>
                    <View style={tw`w-3 h-3 bg-[#1E90FF] rounded-full mr-2`} />
                    <Text style={tw`text-xs text-gray-600`}>Mood Trend</Text>
                </View>
                {/* You had "Daily Points" in legend but no data for it in chart — 
            keep or remove depending on your needs */}
            </View>
        </View>
    );
};

export default MoodTrackingGraph;
