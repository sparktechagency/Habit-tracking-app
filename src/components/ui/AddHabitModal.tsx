import { IconsClose } from '@/assets/icons';
import { AddHabitModalProps } from '@/src/constants/type';
import tw from '@/src/lib/tailwind';
import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Modal,
  Platform,
  Pressable,
  ScrollView,
  Text,
  TextInput,
  View
} from 'react-native';
import { SvgXml } from 'react-native-svg';

const AddHabitModal = ({ visible, onClose, addHeading }: AddHabitModalProps) => {
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

  const resetAll = () => {
    setStep(0);
    setChallengeName('');
    setHabits([]);
    setDuration('');
  };

  const handleNext = () => {
    if (canProceed() && step < 2) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 0) setStep(step - 1);
  };

  const handleCreate = () => {
    if (!canProceed()) return;

    console.log({ challengeName, habits, duration });
    resetAll();
    onClose();
  };

  const canProceed = () => {
    switch (step) {
      case 0: return challengeName.trim().length > 0;
      case 1: return habits.length > 0 && habits.every(h => h.trim().length > 0);
      case 2: return duration.length > 0;
      default: return false;
    }
  };

  const renderContent = () => {
    switch (step) {
      case 0:
        return (
          <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
            <Text style={tw`text-sm font-montserrat-600 mb-4`}>Name a Group Challenge</Text>
            <TextInput
              placeholder="30-Day Fitness Challenge"
              value={challengeName}
              onChangeText={setChallengeName}
              placeholderTextColor="#999"
              style={tw`border-gray border-[1px] p-3 rounded-lg mb-5`}
              accessibilityLabel="Challenge name input"
            />
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

          </KeyboardAvoidingView>
        );
      case 1:
        return (
          <ScrollView style={tw`max-h-64`} showsVerticalScrollIndicator={false}>
            <Text style={tw`text-sm font-montserrat-600 mb-4`}>Add habits you will focus on</Text>
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
        );
      case 2:
        return (
          <>
            <Text style={tw`text-sm font-montserrat-600 mb-4`}>Choose duration of group challenge</Text>
            <View style={tw`flex-row flex-wrap justify-between gap-2`}>
              {['7 Days', '15 Days', '30 Days', '60 Days'].map((d) => (
                <Pressable
                  key={d}
                  onPress={() => setDuration(d)}
                  style={tw`w-[48%] py-3 rounded-lg border ${duration === d ? 'bg-blackish' : 'bg-white'}`}
                  accessibilityLabel={`Select ${d} duration`}
                >
                  <Text style={tw`text-center ${duration === d ? 'text-white' : 'text-blackText'}`}>
                    {d}
                  </Text>
                </Pressable>
              ))}
            </View>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
      statusBarTranslucent
    >
      <Pressable
        style={tw`flex-1 bg-blackText/60 justify-center items-center px-5`}
        onPress={onClose}
      >
        <Pressable style={tw`w-full`} onPress={(e) => e.stopPropagation()}>
          <View style={tw`bg-white rounded-xl p-5`}>
            <View style={tw`flex-row justify-between items-center mb-5`}>
              <Text style={tw`text-blackTextish font-montserrat-700 text-xl`}>
                {addHeading}
              </Text>
              <Pressable
                onPress={() => { resetAll(); onClose(); }}
                accessibilityLabel="Close modal"
              >
                <SvgXml xml={IconsClose} />
              </Pressable>
            </View>

            {renderContent()}

            <View style={tw`flex-row justify-between mt-6`}>
              {step > 0 ? (
                <Pressable
                  onPress={handleBack}
                  style={tw`px-6 py-3 rounded-lg border border-gray-400 bg-white`}
                  accessibilityLabel="Go back to previous step"
                >
                  <Text style={tw`text-blackText font-montserrat-600`}>Back</Text>
                </Pressable>
              ) : (
                <Pressable
                  onPress={() => { resetAll(); onClose(); }}
                  style={tw`px-6 py-3 rounded-lg border border-gray-400 bg-white`}
                  accessibilityLabel="Cancel and close modal"
                >
                  <Text style={tw`text-blackText font-montserrat-600`}>Cancel</Text>
                </Pressable>
              )}

              <Pressable
                onPress={step === 2 ? handleCreate : handleNext}
                style={tw`px-6 py-3 rounded-lg ${canProceed() ? 'bg-blackish' : 'bg-gray-400'}`}
                disabled={!canProceed()}
                accessibilityLabel={step === 2 ? "Create group" : "Go to next step"}
              >
                <Text style={tw`text-white font-montserrat-600`}>
                  {step === 2 ? 'Create Group' : 'Next'}
                </Text>
              </Pressable>
            </View>
          </View>
        </Pressable>
      </Pressable>
    </Modal>
  );
};

export default AddHabitModal;