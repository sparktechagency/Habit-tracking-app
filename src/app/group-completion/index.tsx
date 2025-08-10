import ConModal from '@/src/components/ui/ConModal'
import HeadingTop from '@/src/components/ui/HeadingTop'
import ProgressBar from '@/src/components/ui/ProgressBar'
import Wrapper from '@/src/components/Wrapper'
import tw from '@/src/lib/tailwind'
import React, { useState } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

const users = [
    { name: 'You', progress: 100 },
    { name: 'Lara Croft', progress: 55 },
    { name: 'John Doe', progress: 60 },
    { name: 'Alice Smith', progress: 40 },
    { name: 'Tom Hardy', progress: 85 },
    { name: 'Emily Rose', progress: 33 },
    { name: 'Bruce Wayne', progress: 100 },
    { name: 'Clark Kent', progress: 72 },
    { name: 'Tony Stark', progress: 91 },
    { name: 'Natasha Romanoff', progress: 65 },
    { name: 'Diana Prince', progress: 76 },
    { name: 'Peter Parker', progress: 100 },
    { name: 'Steve Rogers', progress: 68 },
    { name: 'Wanda Maximoff', progress: 48 },
    { name: 'Stephen Strange', progress: 79 },
    { name: 'Scott Lang', progress: 36 },
    { name: 'Bucky Barnes', progress: 62 },
    { name: 'Sam Wilson', progress: 43 },
    { name: 'Nick Fury', progress: 100 },
    { name: 'Gamora', progress: 71 },
];


export default function GroupCompletion() {

    const [visivale, setvisivale] = useState<boolean>(false);

    return (
        <View style={tw`bg-primaryBg flex-1`}>
            <HeadingTop />

            {/*  */}
            <Wrapper>
                <View style={tw`flex-row justify-between items-center py-2`}>
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
                <View style={tw`flex-col gap-1`}>

                    <View style={tw`flex-col gap-1 border-b border-[#A5A5A5] pb-3`}>
                        <Text style={tw`text-xs font-montserrat-400`}>(Sunshine Cafe)</Text>
                        <Text style={tw`text-xs font-montserrat-400`}>Enjoy a free coffee when you redeem your reward points.</Text>
                    </View>
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
                    {/* {users.map((user, index) => (
                        <UserProgressRow
                            key={index}
                            name={user.name}
                            progressPercent={user.progress}

                        />
                    ))} */}
                    {users.map((user, index) => (
                        <TouchableOpacity onPress={() => user?.progress === 100 && setvisivale(!visivale)} key={index} style={tw`flex-row justify-between items-center py-2`}>
                            <View style={tw`w-[20%]`}>
                                <Text style={tw`text-blackish font-montserrat-600 text-base`}>{user.name.substring(0, 5)}</Text>
                            </View>
                            <View style={tw`w-[65%]`}>
                                <ProgressBar progress={user?.progress} height={8} color={'#D6DF22'} />
                            </View>
                            <View style={tw`w-[15%] items-end`}>
                                <Text style={tw`text-blackish font-montserrat-600 text-base`}>{user?.progress}%</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </ScrollView>

                <ConModal prors={'celebrate'} visible={visivale} onClose={() => setvisivale(!visivale)} />

            </Wrapper>
        </View>
    )
}