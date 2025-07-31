import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, View } from 'react-native';
import { BarChart } from 'react-native-gifted-charts';

const ProductivityInsightsGraph = () => {
    const barData = [
        { value: 30, label: 'Jan', frontColor: '#4ABFF4' },
        { value: 80, label: 'Feb', frontColor: '#79C3DB' },
        { value: 95, label: 'Mar', frontColor: '#28B2B3' },
        { value: 50, label: 'Apr', frontColor: '#4ADDBA' },
        { value: 20, label: 'May', frontColor: '#91E3E3' },
        { value: 60, label: 'Jun', frontColor: '#4ABFF4' },
        { value: 75, label: 'Jul', frontColor: '#79C3DB' },
        { value: 85, label: 'Aug', frontColor: '#28B2B3' },
        { value: 55, label: 'Sep', frontColor: '#4ADDBA' },
        { value: 65, label: 'Oct', frontColor: '#91E3E3' },
        { value: 40, label: 'Nov', frontColor: '#4ABFF4' },
        { value: 90, label: 'Dec', frontColor: '#79C3DB' }
    ];

    return (
        <View style={tw``}>
            <View>
                <Text style={tw`text-lg  font-montserrat-700 text-blackText mb-2 text-center`}>
                    Productivity Insights
                </Text>
                <Text style={tw`text-sm font-montserrat-600 text-blackText mb-4 text-center`}>
                    Your most productive times this yearly
                </Text>
            </View>
            <BarChart
                showYAxisIndices
                noOfSections={5}
                maxValue={90}
                data={barData}
                isAnimated
                animationDuration={1500}
                yAxisColor={tw.color('gray')}
                xAxisColor={tw.color('gray')}

                yAxisTextStyle={tw`text-blackish`}
                xAxisLabelTextStyle={tw`text-blackish text-xs`}
                spacing={20}
                barWidth={16}
                roundedTop
                roundedBottom
                hideRules
                initialSpacing={10}
                yAxisOffset={10}
                renderTooltip={(item: any) => (
                    <View style={tw`bg-gray px-2 py-1 rounded`}>
                        <Text style={tw`text-white text-xs`}>{item.value}%</Text>
                    </View>
                )}
            />
        </View>
    );
};

export default ProductivityInsightsGraph;