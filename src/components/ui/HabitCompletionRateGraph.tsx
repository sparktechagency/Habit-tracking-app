// import tw from '@/src/lib/tailwind';
// import React, { useState } from 'react';
// import { Text, View } from 'react-native';
// import { PieChart, } from 'react-native-gifted-charts';

// type PieChartData = {
//     label: string;
//     value: number;
//     color: string;
//     gradientCenterColor: string;
//     focused?: boolean;
// }

// const HabitCompletionRateGraph = () => {
//     const [selectedData, setSelectedData] = useState<PieChartData | null>(null);

//     const pieData: PieChartData[] = [
//         {
//             value: 47,
//             color: '#009FFF',
//             gradientCenterColor: '#006DFF',
//             focused: true,
//             label: 'Excellent',
//         },
//         {
//             value: 40,
//             color: '#93FCF8',
//             gradientCenterColor: '#3BE9DE',
//             label: 'Good',
//         },
//         {
//             value: 16,
//             color: '#BDB2FA',
//             gradientCenterColor: '#8F80F3',
//             label: 'Okay',
//         },
//         {
//             value: 3,
//             color: '#FFA5BA',
//             gradientCenterColor: '#FF7F97',
//             label: 'Poor',
//         },
//     ];

//     const renderDot = (color: string) => (
//         <View style={tw`h-2.5 w-2.5 rounded-full mr-2 bg-[${color}]`} />
//     );

//     const renderLegendItem = (color: string, label: string, value: number) => (
//         <View style={tw`flex-row items-center w-36 mb-3`}>
//             {renderDot(color)}
//             <Text style={tw`text-blackText text-sm`}>
//                 {label}: <Text style={tw`font-montserrat-700`}>{value}%</Text>
//             </Text>
//         </View>
//     );

//     const handlePress = (item: PieChartData) => {
//         setSelectedData(item);
//     };

//     return (
//         <View style={tw`bg-primaryBg border-b-2 flex-col gap-4 border-[#d9d9d9] justify-center rounded-xl shadow-md  items-center py-5 `}>
//             <View style={tw` items-center justify-center`}>
//                 <View>
//                     <Text style={tw`text-lg  font-montserrat-700 text-blackText mb-2 text-center`}>
//                         Habit Completion Rate
//                     </Text>
//                     <Text style={tw`text-sm font-montserrat-600 text-blackText mb-4 text-center`}>
//                         Your consistency with habits this month
//                     </Text>
//                 </View>

//                 <View style={tw`items-center `}>
//                     <PieChart
//                         data={pieData}
//                         donut
//                         showGradient
//                         sectionAutoFocus
//                         radius={100}
//                         innerRadius={70}
//                         innerCircleColor={tw.color('indigo-900')}
//                         centerLabelComponent={() => (
//                             <View style={tw`items-center  justify-center`}>
//                                 <Text style={tw`text-white text-2xl font-montserrat-700`}>
//                                     {/* {selectedData?.value || 47}% */}
//                                     47%
//                                 </Text>
//                                 <Text style={tw`text-white text-sm mt-1`}>
//                                     {selectedData?.label || pieData[0].label}
//                                 </Text>
//                             </View>
//                         )}
//                         focusOnPress
//                         labelsPosition="outward"
//                         showText
//                         textColor="white"
//                         textSize={12}


//                     />
//                 </View>

//                 <View style={tw`flex-row flex-wrap items-center  justify-around mt-2`}>
//                     {pieData.map((item) => (
//                         <View key={item?.label}>
//                             {
//                                 renderLegendItem(
//                                     item.gradientCenterColor,
//                                     item.label,
//                                     item.value

//                                 )
//                             }
//                         </View>
//                     ))}
//                 </View>
//             </View>
//         </View>
//     );
// };

// export default HabitCompletionRateGraph;
import tw from "@/src/lib/tailwind";
import React, { useMemo } from "react";
import { ScrollView, Text, View } from "react-native";
import { LineChart } from "react-native-gifted-charts";

const HabitCompletionRateGraph = () => {
    const now = new Date();
    const year = now.getFullYear();
    const month = now.getMonth(); // 0 = Jan
    const monthName = now.toLocaleString("default", { month: "short" });
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    // Example fixed values for the month — can be shorter or longer as needed
    // Fill rest with 0 if less than daysInMonth
    const exampleValues = [
        10, 30, 40, 25, 15, 60, 70, 55, 45, 20, 35, 50, 65, 80, 75, 85, 90, 60, 40, 30,
    ];

    // Pad with zeros if exampleValues length < daysInMonth
    const values = Array.from({ length: daysInMonth }, (_, i) => {
        return exampleValues[i] !== undefined ? exampleValues[i] : 0;
    });

    const data = useMemo(() => {
        return values.map((value, i) => {
            const day = i + 1;
            return {
                value,
                labelComponent: () => (
                    <Text style={{ color: "gray", fontSize: 10, marginLeft: 2 }}>
                        {day}
                    </Text>
                ),
                dataPointLabelComponent: () => (
                    <Text style={{ color: "#07BAD1", fontSize: 10, fontWeight: "600" }}>
                        {value}
                    </Text>
                ),
            };
        });
    }, [values]);

    return (
        <View style={{ backgroundColor: "#fff", paddingVertical: 10 }}>
            <View>
                <Text style={tw`text-lg font-montserrat-700 text-blackText mb-2 text-center`}>
                    Daily Habit Track
                </Text>
                <Text style={tw`text-sm font-montserrat-600 text-blackText mb-4 text-center`}>
                    Your monthly habit tracking for this month
                </Text>
            </View>
            <Text style={{ fontSize: 16, fontWeight: "600", marginLeft: 15, marginBottom: 5 }}>
                {monthName} {year} Habit Completion
            </Text>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <LineChart
                    areaChart
                    data={data}
                    startFillColor="rgb(46, 217, 255)"
                    startOpacity={0.8}
                    endFillColor="rgb(203, 241, 250)"
                    endOpacity={0.3}
                    isAnimated
                    thickness={3}
                    color="#07BAD1"
                    yAxisTextStyle={{ color: "gray" }}
                    xAxisColor="lightgray"
                    yAxisColor="lightgray"
                    backgroundColor="#fff"
                    spacing={20}
                    initialSpacing={15}
                    rulesColor="lightgray"
                    rulesType="solid"
                    xAxisLength={daysInMonth * 40}
                    maxValue={100}
                    noOfSections={5}
                    dataPointsHeight={6}
                    dataPointsWidth={6}
                    dataPointsColor="#07BAD1"
                    showValuesAsDataPointsLabel
                />
            </ScrollView>
        </View>
    );
};

export default HabitCompletionRateGraph;

