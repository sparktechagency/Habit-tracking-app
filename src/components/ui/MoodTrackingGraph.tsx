import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, View } from 'react-native';
import { LineChart } from 'react-native-gifted-charts';

const MoodTrackingGraph = () => {
    const lineData = [
        { value: 0, label: 'Mon', dataPointText: '0', dataPointColor: '#FFD700' },
        { value: 20, label: 'Tue', dataPointText: '20', dataPointColor: '#FFD700' },
        { value: 18, label: 'Wed', dataPointText: '18', dataPointColor: '#FFD700' },
        { value: 40, label: 'Thu', dataPointText: '40', dataPointColor: '#FFD700' },
        { value: 36, label: 'Fri', dataPointText: '36', dataPointColor: '#FFD700' },
        { value: 60, label: 'Sat', dataPointText: '60', dataPointColor: '#FFD700' },
        { value: 54, label: 'Sun', dataPointText: '54', dataPointColor: '#FFD700' },
        { value: 85, label: 'Mon', dataPointText: '85', dataPointColor: '#FFD700' }
    ];

    return (
        <View style={tw`bg-primaryBg border-b-2 flex-col gap-4 border-[#d9d9d9] justify-center rounded-xl shadow-md  items-center py-5 `}>
            <View>
                <Text style={tw`text-lg  font-montserrat-700 text-blackText mb-2 text-center`}>
                    Mood Tracking
                </Text>
                <Text style={tw`text-sm font-montserrat-600 text-blackText mb-4 text-center`}>
                    Your mood patterns over the last week
                </Text>
            </View>

            <View style={tw` rounded-lg p-2`}>
                <LineChart
                    data={lineData}
                    isAnimated
                    animationDuration={1200}
                    curved
                    thickness={4}
                    spacing={40}
                    initialSpacing={20}
                    endSpacing={10}
                    color="#00E0FF"
                    dataPointsColor="#000"
                    dataPointsRadius={6}
                    textColor="#000"
                    textShiftY={-10}
                    textShiftX={-5}
                    textFontSize={12}
                    hideRules
                    hideYAxisText
                    yAxisColor="#00E0FF"
                    xAxisColor="#00E0FF"
                    showVerticalLines
                    verticalLinesColor="rgba(0,224,255,0.3)"
                    // verticalLinesColor="#000"
                    xAxisLabelTextStyle={tw`text-blackText text-xs`}
                    areaChart
                    startFillColor="rgba(0,224,255,0.1)"
                    endFillColor="rgba(0,224,255,0.1)"
                    startOpacity={0.8}
                    endOpacity={0.1}
                    noOfSections={5}
                    maxValue={100}
                    renderTooltip={(item: any) => (
                        <View style={tw` px-2 py-1 rounded-md`}>
                            <Text style={tw`text-amber-300 text-xs font-medium`}>
                                {item.value}% mood
                            </Text>
                        </View>
                    )}
                />
            </View>

            <View style={tw`flex-row justify-center mt-3`}>
                <View style={tw`flex-row items-center mr-4`}>
                    <View style={tw`w-3 h-3 bg-[#00E0FF] rounded-full mr-1`} />
                    <Text style={tw`text-xs text-gray-600`}>Mood Trend</Text>
                </View>
                <View style={tw`flex-row items-center`}>
                    <View style={tw`w-3 h-3 bg-[#FFD700] rounded-full mr-1`} />
                    <Text style={tw`text-xs text-gray-600`}>Daily Points</Text>
                </View>
            </View>
        </View>
    );
};

export default MoodTrackingGraph;