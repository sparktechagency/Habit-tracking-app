import tw from '@/src/lib/tailwind';
import React from 'react';
import { Text, View } from 'react-native';

interface ProgressItem {
    label: string;
    value: number;
    color: string;
}

const progressData: ProgressItem[] = [
    { label: 'Complete todo list', value: 33, color: 'green-500' },
    { label: 'Learn spanish', value: 28, color: 'orange-400' },
    { label: 'Learn coding', value: 18, color: 'sky-400' },
    { label: 'Meet friend', value: 14, color: 'pink-400' },
    { label: 'Send thoughtful message', value: 7, color: 'gray' },
];

const WorkoutProgress = () => {
    const total = progressData.reduce((sum, item) => sum + item.value, 0);

    return (
        <View style={tw``}>
            {/* Header */}
            <Text style={tw`text-lg font-montserrat-600 text-blackText mb-3`}>
                Total Workout <Text style={tw`font-montserrat-700 text-yellowGreen`}>{total}</Text>
            </Text>

            {/* Progress Bar */}
            <View style={tw`flex-row h-3 rounded  overflow-hidden mb-4`}>
                {progressData.map((item, index) => (
                    <View
                        key={`progress-${index}`}
                        style={[
                            { width: `${(item.value / total) * 100}%` },
                            tw`h-full`,
                            { backgroundColor: tw.color(item.color) }
                        ]}
                    />
                ))}
            </View>

            {/* Labels */}
            <View style={tw``}>
                {progressData.map((item, index) => (
                    <View key={`label-${index}`} style={tw`flex-row items-center gap-3 justify-between`}>
                        <View style={tw`flex-row items-center mb-2`}>
                            <View
                                style={[
                                    tw`w-2.5 h-2.5 rounded-full mr-2.5`,
                                    { backgroundColor: tw.color(item.color) }
                                ]}
                            />
                            <Text style={tw`text-sm text-blackText`}>{item.label}</Text>
                        </View>
                        <Text
                            style={[
                                tw`text-sm font-montserrat-500`,
                                { color: tw.color(item.color) }
                            ]}
                        >
                            {item.value}
                        </Text>
                    </View>
                ))}
            </View>
        </View>
    );
};

export default WorkoutProgress;