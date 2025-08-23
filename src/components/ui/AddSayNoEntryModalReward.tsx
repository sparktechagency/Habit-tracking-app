import { AddSayHabitModalProps } from '@/src/constants/type';
import tw from '@/src/lib/tailwind';
import DateTimePicker from '@react-native-community/datetimepicker';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';

import {
    Modal,
    Platform,
    Pressable,
    ScrollView,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

const AddSayNoEntryModalReward = ({ visible, onClose }: AddSayHabitModalProps) => {
    const [participants, setParticipants] = useState<string>('');
    const [step, setStep] = useState(0);
    const [challengeName, setChallengeName] = useState('');
    const [habits, setHabits] = useState<string[]>([]);
    const [duration, setDuration] = useState('');



    const addHabit = () => {
        setHabits([...habits, '']);
    };

    const removeHabit = (index: number) => {
        const updated = [...habits];
        updated.splice(index, 1);
        setHabits(updated);
    };

    const updateHabit = (index: number, value: string) => {
        const updated = [...habits];
        updated[index] = value;
        setHabits(updated);
    };


    const [date, setDate] = useState(new Date());
    const [show, setShow] = useState(false);

    const onChange = (event: any, selectedDate: any) => {
        if (selectedDate) {
            setDate(selectedDate);
        }
        setShow(false);
    };

    return (
        <Modal transparent visible={visible} animationType="fade">
            <View style={tw`flex-1  justify-center items-center`}>
                <View style={tw`bg-white shadow-2xl rounded-lg p-6 w-80`}>
                    {/* Header */}
                    <View style={tw`flex-row justify-between items-center mb-4`}>
                        <Text style={tw`text-xl  font-montserrat-700`}>Add Reward</Text>
                        <Pressable onPress={onClose}>
                            <Text style={tw`text-2xl font-montserrat-600`}>×</Text>
                        </Pressable>
                    </View>


                    <View style={tw`mb-4`}>
                        <Text style={tw`mb-1 text-sm  font-montserrat-600`}>Reward Title</Text>
                        <TextInput
                            style={tw`border-[1px]  border-blackish rounded px-3 py-2`}
                            value={duration}
                            onChangeText={setDuration}
                            keyboardType="numeric"
                        />
                    </View>

                    <View style={tw`mb-4`}>
                        <Text style={tw`text-sm font-montserrat-600 mb-4`}>Challenge Type</Text>
                        <View style={tw`border border-blackish/40 rounded`}>
                            <Picker
                            >
                                {/* Extra Categories */}
                                <Picker.Item label="Health" value="Health" />
                                <Picker.Item label="Fitness" value="Fitness" />
                                <Picker.Item label="Productivity" value="Productivity" />
                                <Picker.Item label="Learning" value="Learning" />
                            </Picker>
                        </View>
                    </View>

                    <View style={tw`mb-6`}>
                        <Text style={tw`mb-1 text-sm  font-montserrat-600`}>Point</Text>
                        <TextInput
                            style={tw`border-[1px]  border-blackish rounded px-3 py-2`}
                            value={participants}
                            onChangeText={setParticipants}
                            placeholder="Point"
                            keyboardType="numeric"
                        />
                    </View>



                    {/* Form fields */}
                    <View style={tw`mb-4`}>
                        <View style={tw`mt-4`}>
                            {/* <Text style={tw`text-blackish mb-2 font-semibold`}>Select a Date</Text> */}

                            <ScrollView style={tw`max-h-64`} showsVerticalScrollIndicator={false}>
                                <Text style={tw`text-sm font-montserrat-600 mb-4`}>Description</Text>
                                {habits.map((habit, index) => (
                                    <View key={index} style={tw`flex-row items-center mb-3`}>
                                        <TextInput
                                            value={habit}
                                            onChangeText={(text) => updateHabit(index, text)}
                                            placeholder={`Habit ${index + 1}`}
                                            style={tw`flex-1 border-gray border-[1px] p-3 rounded-lg text-blackText`}
                                            placeholderTextColor="#999"
                                            accessibilityLabel={`Habit ${index + 1} input`}
                                        />
                                        <Pressable
                                            onPress={() => removeHabit(index)}
                                            style={tw`ml-2 w-10 h-10 rounded-full bg-blackish items-center justify-center`}
                                            accessibilityLabel={`Remove habit ${index + 1}`}
                                        >
                                            <Text style={tw`text-3xl font-montserrat-500 text-white`}>×</Text>
                                        </Pressable>
                                    </View>
                                ))}


                                <Pressable
                                    onPress={addHabit}
                                    style={tw`bg-blackish px-4 py-3 rounded-lg mt-1 self-end`}
                                    accessibilityLabel="Add new habit"
                                >
                                    <Text style={tw`text-white font-montserrat-600`}>Add Habit</Text>
                                </Pressable>
                            </ScrollView>

                            <Pressable onPress={() => setShow(true)}>
                                <Text style={tw`mb-1 text-sm  font-montserrat-600`}>Expiration Date</Text>

                                <TextInput
                                    style={tw`border-[1px] border-blackish rounded px-3 py-2 bg-white`}
                                    value={date.toLocaleDateString()}
                                    placeholder="Select date"
                                    editable={false}
                                    pointerEvents="none"
                                />
                            </Pressable>

                            {show && (
                                <DateTimePicker
                                    value={date}
                                    mode="date"
                                    display={Platform.OS === 'ios' ? 'spinner' : 'default'}
                                    onChange={onChange}
                                />
                            )}
                        </View>
                    </View>



                    {/* <View style={tw`mb-6`}>
                        <Text style={tw`mb-1 text-sm  font-montserrat-600`}>Why did you say no?</Text>
                        <TextInput
                            style={tw`border-[1px]  border-blackish rounded px-3 py-2`}
                            value={participants}
                            onChangeText={setParticipants}
                            placeholder="Why did you say no?"
                            keyboardType="numeric"
                        />
                    </View> */}
                    <View style={tw`mb-4`}>
                        <Text style={tw`mb-1 text-sm  font-montserrat-600`}>Purchase Point</Text>
                        <TextInput
                            style={tw`border-[1px]  border-blackish rounded px-3 py-2`}
                            value={duration}
                            onChangeText={setDuration}
                            keyboardType="numeric"
                        />
                    </View>


                    {/* Save button */}
                    <TouchableOpacity
                        style={tw`bg-blackish px-4 py-2 rounded self-end`}
                        onPress={() =>
                            // onSave({ habitName, description, goal, duration, participants })
                            onClose()
                        }
                    >
                        <Text style={tw`text-white  font-montserrat-400 text-sm`}>Save Entry</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    )
}

export default AddSayNoEntryModalReward;