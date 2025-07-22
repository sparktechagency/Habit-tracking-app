import HeadingTop from '@/src/components/ui/HeadingTop'
import UserProgressRow from '@/src/components/ui/UserProgressRow'
import Wrapper from '@/src/components/Wrapper'
import tw from '@/src/lib/tailwind'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

const users = [
    { name: 'You', progress: 70 },
    { name: 'Lara Croft', progress: 55 },
    { name: 'John Doe', progress: 60 },
    { name: 'Alice Smith', progress: 40 },
    { name: 'Tom Hardy', progress: 85 },
    { name: 'Emily Rose', progress: 33 },
    { name: 'Bruce Wayne', progress: 50 },
    { name: 'Clark Kent', progress: 72 },
    { name: 'Tony Stark', progress: 91 },
    { name: 'Natasha Romanoff', progress: 65 },
    { name: 'Diana Prince', progress: 76 },
    { name: 'Peter Parker', progress: 59 },
    { name: 'Steve Rogers', progress: 68 },
    { name: 'Wanda Maximoff', progress: 48 },
    { name: 'Stephen Strange', progress: 79 },
    { name: 'Scott Lang', progress: 36 },
    { name: 'Bucky Barnes', progress: 62 },
    { name: 'Sam Wilson', progress: 43 },
    { name: 'Nick Fury', progress: 52 },
    { name: 'Gamora', progress: 71 },
];


export default function GroupCompletion() {
    return (
        <View style={tw`bg-primaryBg flex-1`}>
            <HeadingTop />

            {/*  */}
            <Wrapper>
                <View style={tw`flex-row justify-between items-center py-3 border-b-[1px] border-gray`}>
                    <View style={tw`flex-1`}>
                        <Text style={tw`text-blackish font-montserrat-600 text-base`}>
                            Thu, Mar 15
                        </Text>
                        <Text style={tw`text-gray text-xs font-montserrat-400`}>
                            Day 6
                        </Text>
                    </View>
                    <Text style={tw`text-gray text-sm font-montserrat-400`}>
                        Group Completion{' '}
                        <Text style={tw`font-montserrat-700 text-blackish`}>38%</Text>
                    </Text>
                </View>

                {/* User: Lara Croft */}
                <View style={tw` flex-row justify-between `}>
                    <View style={tw`  `} >
                        <Text style={tw`text-blackish font-montserrat-700 py-5 text-base`}>
                            Name
                        </Text>
                        {/* Name  */}

                    </View>
                    <View style={tw`  `}>
                        <Text style={tw`text-blackish font-montserrat-700 py-5 text-base`}>
                            Progress
                        </Text>

                    </View>
                    <View style={tw`  `}>
                        <Text style={tw`text-blackish font-montserrat-700 py-5 text-base`}>
                            Rate
                        </Text>

                    </View>
                </View>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                    contentContainerStyle={tw`pb-8`}
                >
                    {users.map((user, index) => (
                        <UserProgressRow
                            key={index}
                            name={user.name}
                            progressPercent={user.progress}

                        />
                    ))}
                </ScrollView>


            </Wrapper>
        </View>
    )
}