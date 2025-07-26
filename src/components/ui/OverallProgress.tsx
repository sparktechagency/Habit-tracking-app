import { IconDate } from '@/assets/icons';
import tw from '@/src/lib/tailwind';
import React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { SvgXml } from 'react-native-svg';
import DailyCompletionRatesChart from './DailyCompletionRatesChart';
import ProgressBar from './ProgressBar';

const OverallProgressCard = () => {
    return (
        <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{
            paddingHorizontal: 16,
            paddingBottom: 8,
        }} >



            {/*  */}
            <View style={tw`bg-primaryBg rounded-xl p-5 shadow-lg shadow-blackish my-2 `}>
                {/* Header Row */}
                <View style={tw`flex-col justify-between  gap-3 `}>
                    <View style={tw`flex-row justify-between items-center `}>
                        <Text style={tw`text-blackish font-montserrat-500 text-sm`}>
                            Overall Progress
                        </Text>

                    </View>

                    <View style={tw`flex-col gap-4`}>
                        <View style={tw`flex-col gap-2`}>
                            <View style={tw`flex-row  items-center justify-between`}>
                                <Text style={tw`text-blackish font-montserrat-700 text-sm  `}>Completion Rate</Text>
                                <Text style={tw`text-blackish font-montserrat-700 text-sm `}>70%</Text>
                            </View>
                            <ProgressBar height={6} progress={7 * 10} color={'#D6DF22'} />
                        </View>

                    </View>

                    <View style={tw`flex-col justify-between  gap-1 `}>
                        <View>
                            {/* Subtext */}
                            <Text style={tw`text-gray text-sm font-montserrat-400`}>
                                of 100 day challenge
                            </Text>
                        </View>

                        {/* Bottom Hint */}
                        <View style={tw`flex-row items-center mt-1`}>
                            <SvgXml xml={IconDate} width={14} height={14} />
                            <Text style={tw`text-xs text-blackish ml-1 font-montserrat-400`}>
                                5% from last week
                            </Text>
                        </View>
                    </View>
                </View>
            </View>


            {/* graph */}
            <DailyCompletionRatesChart />

        </ScrollView>
    );
};

export default OverallProgressCard;
