import { AddHabitModalProps } from '@/src/constants/type';
import tw from '@/src/lib/tailwind';
import { Picker } from '@react-native-picker/picker'; // make sure to install this package
import React, { useState } from 'react';
import {
  Modal,
  Pressable,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';



const AddHabitModal = ({ visible, onClose, onSave, addHeading }: AddHabitModalProps) => {
  const [habitName, setHabitName] = useState<string>('');
  const [description, setDescription] = useState<string>('Health');
  const [goal, setGoal] = useState<string>('None (Main Category)');
  const [duration, setDuration] = useState<string>('');
  const [participants, setParticipants] = useState<string>('');



  // const [groupView, setGroupView] = useState(addHeading === 'Add Group Challenge');
  const groupView = addHeading === 'Add Group Challenge';

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View style={tw`flex-1 bg-black bg-opacity-50 justify-center items-center`}>
        <View style={tw`bg-white rounded-lg p-6 w-80`}>
          {/* Header */}
          <View style={tw`flex-row justify-between items-center mb-4`}>
            <Text style={tw`text-xl  font-montserrat-700`}>{addHeading}</Text>
            <Pressable onPress={onClose}>
              <Text style={tw`text-2xl font-montserrat-600`}>×</Text>
            </Pressable>
          </View>

          {/* Form fields */}
          {groupView && <View style={tw`mb-4`}>
            <Text style={tw`mb-1 text-sm  font-montserrat-600`}>Challenge Name</Text>
            <TextInput
              style={tw`border-[1px]  border-blackish rounded px-3 py-2`}
              value={habitName}
              onChangeText={setHabitName}
              placeholder="Enter habit name"
            />
          </View>}
          {/* Form fields */}
          <View style={tw`mb-4`}>
            <Text style={tw`mb-1 text-sm  font-montserrat-600`}>Habit Name</Text>
            <TextInput
              style={tw`border-[1px]  border-blackish rounded px-3 py-2`}
              value={habitName}
              onChangeText={setHabitName}
              placeholder="Enter habit name"
            />
          </View>

          <View style={tw`mb-4`}>
            <Text style={tw`mb-1 text-sm  font-montserrat-600`}>Description</Text>
            <View style={tw`border-[1px]  border-blackish rounded`}>
              <Picker
                selectedValue={description}
                onValueChange={(itemValue) => setDescription(itemValue)}
              >
                <Picker.Item label="Health" value="Health" />
                <Picker.Item label="Fitness" value="Fitness" />
                <Picker.Item label="Productivity" value="Productivity" />
                <Picker.Item label="Learning" value="Learning" />
                {/* Add more options here */}
              </Picker>
            </View>
          </View>

          <View style={tw`mb-4`}>
            <Text style={tw`mb-1 text-sm  font-montserrat-600`}>Goal</Text>
            <View style={tw`border-[1px]  border-blackish rounded`}>
              <Picker
                selectedValue={goal}
                onValueChange={(itemValue) => setGoal(itemValue)}
              >
                <Picker.Item label="None (Main Category)" value="None (Main Category)" />
                <Picker.Item label="Health" value="Health" />
                <Picker.Item label="Productivity" value="Productivity" />
                <Picker.Item label="Gym" value="Gym" />
                {/* Add more options here */}
              </Picker>
            </View>
          </View>

          <View style={tw`mb-4`}>
            <Text style={tw`mb-1 text-sm  font-montserrat-600`}>Duration</Text>
            <TextInput
              style={tw`border-[1px]  border-blackish rounded px-3 py-2`}
              value={duration}
              onChangeText={setDuration}
              placeholder="Enter duration"
              keyboardType="numeric"
            />
          </View>

          {groupView && <View style={tw`mb-4`}>
            <Text style={tw`mb-1 text-sm  font-montserrat-600`}>Points</Text>
            <TextInput
              style={tw`border-[1px]  border-blackish rounded px-3 py-2`}
              value={duration}
              onChangeText={setDuration}
              placeholder="Enter duration"
              keyboardType="numeric"
            />
          </View>}

          <View style={tw`mb-6`}>
            <Text style={tw`mb-1 text-sm  font-montserrat-600`}>Participants</Text>
            <TextInput
              style={tw`border-[1px]  border-blackish rounded px-3 py-2`}
              value={participants}
              onChangeText={setParticipants}
              placeholder="Enter number of participants"
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
            <Text style={tw`text-white  font-montserrat-400 text-sm`}>Save Habit</Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}

export default AddHabitModal