
import React, { useCallback, useState } from 'react';
import {
    Alert,
    FlatList,
    Pressable,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { NestableDraggableFlatList, NestableScrollContainer, ScaleDecorator } from 'react-native-draggable-flatlist';
import { SvgXml } from 'react-native-svg';

import {
    IconsArchived,
    IconsDeleted,
    IconsSquer,
    IconsStart
} from '@/assets/icons';
import NewAddedModal from '@/src/components/ui/NewAddedModal';
import { habits } from '@/src/constants/tabs';
import tw from '@/src/lib/tailwind';
import { router } from 'expo-router';

// Constants
const NUM_ITEMS = 5;

const getColor = (index: number) => {
    const multiplier = 255 / (NUM_ITEMS - 1);
    const colorVal = index * multiplier;
    return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
};

type Item = {
    key: string;
    label: string;
    height: number;
    width: number;
    backgroundColor: string;
    description: string;
};

const generateInitialData = (): Item[] =>
    Array.from({ length: NUM_ITEMS }, (_, index) => ({
        key: `item-${index}`,
        label: `${index}`,
        height: 100,
        width: 60 + Math.random() * 40,
        backgroundColor: getColor(index),
        description: `Item number ${index} - drag me!`,
    }));

type DraggableItemProps = {
    item: Item;
    drag: () => void;
    isActive: boolean;
    deleted: boolean;
    onDelete: () => void;
    onArchive: () => void;
    handleDone: () => void;
    isEdited: boolean;

};

const DraggableItem: React.FC<DraggableItemProps> = ({
    drag,
    isActive,
    deleted,
    onDelete,
    onArchive,
    handleDone,
    isEdited
}) => (
    <ScaleDecorator>
        <View style={tw`px-5 flex-row gap-4 items-center border-b border-gray py-3`}>
            {
                isEdited && (
                    <TouchableOpacity
                        onLongPress={drag}
                        disabled={isActive}
                        style={tw`items-center justify-center rounded bg-${isActive ? '[#D6DF22]' : '[#EEEEEE]'}`}
                        accessibilityLabel="Drag to reorder"
                    >
                        <View style={tw`p-1 rounded`}>
                            <SvgXml xml={IconsSquer} width={25} height={25} />
                        </View>
                    </TouchableOpacity>
                )
            }

            <View style={tw`flex-1`}>
                <View style={tw`flex-row items-center justify-between`}>
                    <View style={tw`gap-1.5`}>
                        <View style={tw`flex-col gap-1`}>
                            <Text style={tw`text-base text-blackText`}>Complete todo list</Text>
                            <View style={tw`flex-row gap-1 items-center`}>
                                <SvgXml xml={IconsStart} width={14} height={14} />
                                <Text style={tw`text-gray-500 text-sm`}>1 item</Text>
                            </View>
                        </View>
                        {!deleted && (
                            <Pressable
                                onPress={onArchive}
                                style={tw`border-blackish border w-[65%] items-center px-2 py-1 rounded`}
                                accessibilityLabel="Mark as archived"
                            >
                                <Text style={tw`text-blackish text-sm font-montserrat-600`}>Archive</Text>
                            </Pressable>
                        )}
                    </View>

                    {deleted ? (
                        <Pressable onPress={onDelete} accessibilityLabel="Delete item">
                            <SvgXml xml={IconsDeleted} width={20} height={20} />
                        </Pressable>
                    ) : <Pressable
                        onPress={handleDone}
                        style={tw`bg-blackish px-3 py-1 rounded`}
                        accessibilityLabel="Mark done"
                    >
                        <Text style={tw`text-white text-sm font-montserrat-600`}>Done</Text>
                    </Pressable>
                    }

                </View>
            </View>

        </View>

    </ScaleDecorator>
);

type HabitItem = {
    id: number;
    name: string;
};

export default function HabitsScreen() {
    const [isEditing, setIsEditing] = useState(false);
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [data, setData] = useState<Item[]>(generateInitialData);


    const handleDelete = (() => {
        Alert.alert('Delete Entry', 'Are you sure you want to delete this entry?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Delete',
                onPress: () => console.log('Entry deleted'),
                style: 'destructive',
            },
        ]);
    });

    const handleArchive = (() => {
        Alert.alert('Archive Entry', 'Are you sure you want to archive this entry?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Archive',
                onPress: () => console.log('Entry archived'),
                style: 'destructive',
            },
        ]);
    });

    const handleDone = (() => {
        Alert.alert('Mark as Done', 'Are you sure you want to mark this entry as done?', [
            { text: 'Cancel', style: 'cancel' },
            {
                text: 'Done',
                onPress: () => console.log('Entry marked as done'),
                style: 'default',
            },
        ]);
    });


    const toggleEditMode = useCallback(() => setIsEditing((prev) => !prev), []);

    const renderHabitItem = ({ item }: { item: HabitItem }) => (
        <View style={tw`mb-6 px-4`}>

            {(
                <View style={tw`bg-primaryBg border border-gray rounded-lg mt-2 overflow-hidden`}>
                    <NestableDraggableFlatList
                        data={data}
                        onDragEnd={({ data }) => setData(data)}
                        keyExtractor={(item) => item.key}
                        renderItem={({ item, drag, isActive }) => (
                            <DraggableItem
                                item={item}
                                drag={drag}
                                isActive={isActive}
                                deleted={isEditing}
                                onDelete={handleDelete}
                                onArchive={handleArchive}
                                handleDone={handleDone}
                                isEdited={isEditing}
                            />
                        )}
                        showsVerticalScrollIndicator={false}
                        nestedScrollEnabled={false}
                    />
                    {isEditing && (
                        <Pressable
                            style={tw`flex-row items-center p-4`}
                            onPress={() => setIsModalVisible(!isModalVisible)}
                            accessibilityLabel="Add new habit"
                        >
                            <Text style={tw`text-yellow-400 text-lg font-montserrat-700 mr-1`}>+</Text>
                            <Text style={tw`text-yellow-400 text-base font-montserrat-600`}>
                                Add New Habit
                            </Text>
                        </Pressable>
                    )}

                </View>
            )}

        </View>
    );

    return (
        <NestableScrollContainer showsVerticalScrollIndicator={false} >
            <View style={tw`flex-1 bg-primaryBg`}>
                <View style={tw`p-4 flex-col gap-4`}>
                    <View style={tw`flex-row items-center justify-between`}>
                        <Text style={tw`text-blackish font-montserrat-600 text-xl`}>My Habits</Text>
                        <TouchableOpacity
                            style={tw`px-2 py-2 bg-blackText rounded flex-row items-center gap-2.5`}
                            onPress={toggleEditMode}
                            accessibilityLabel={isEditing ? 'Done editing' : 'Edit habits'}
                        >
                            <Text style={tw`text-white text-xs font-montserrat-400`}>{isEditing ? 'Done' : 'Edit'}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                {
                    isEditing && (
                        <View style={tw`bg-yellowGreen/20 py-2 pl-4 `}>
                            <Text style={tw` items-center text-sm text-gray font-montserrat-500`}>
                                the <SvgXml xml={IconsSquer} width={10} height={10} /> icon to reorder. Touch elsewhere to scroll.</Text>
                        </View>
                    )
                }
                <View style={tw`p-4 flex-col gap-4`}>

                    <TextInput
                        style={tw`py-3 px-4 font-montserrat-600 border border-gray rounded-full text-blackish`}
                        placeholder="Search habits"
                        placeholderTextColor="#3e3e3f80"
                        returnKeyType="search"
                        clearButtonMode="while-editing"
                        accessibilityLabel="Search habits"
                    />

                    <TouchableOpacity
                        onPress={() => router.push('/archived')}
                        style={tw`flex-row items-center gap-2`}
                        accessibilityLabel="View archived habits"
                    >
                        <SvgXml xml={IconsArchived} />
                        <Text style={tw`text-sm font-montserrat-600`}>Archived</Text>
                    </TouchableOpacity>
                </View>

                <View style={tw`border-b border-gray/50`}>
                    <Text style={tw`px-4 text-sm font-montserrat-600 mb-3`}>All Habits</Text>
                </View>

                <View style={tw` pt-4 flex-1`}>
                    <FlatList
                        data={habits}
                        renderItem={renderHabitItem}
                        keyExtractor={(_, index) => String(index)}
                        ListFooterComponentStyle={tw`p-4`}
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={tw`pb-8`}
                        nestedScrollEnabled={false}

                    />
                </View>

                <NewAddedModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
            </View>
        </NestableScrollContainer>
    );
}



















// ------------------------------>>>>>>>>>>>>>>>>>>>>>>>>>>>>----------------------------------
// import {
//     IconsArchived,
//     IconsDeleted,
//     IconsFaqDownArrow,
//     IconsFaqTopArrow,
//     IconsSquer,
//     IconsStart,
//     IconsWhiteStar,
// } from '@/assets/icons';
// import HabitTracker from '@/src/components/ui/HabitTracker';
// import NewAddedModal from '@/src/components/ui/NewAddedModal';
// import { habits } from '@/src/constants/tabs';
// import tw from '@/src/lib/tailwind';
// import { router } from 'expo-router';
// import React, { useCallback, useState } from 'react';
// import {
//     Alert,
//     FlatList,
//     LayoutAnimation,
//     Pressable,
//     ScrollView,
//     Text,
//     TextInput,
//     TouchableOpacity,
//     View
// } from 'react-native';
// import DraggableFlatList, { ScaleDecorator } from 'react-native-draggable-flatlist';
// import { SvgXml } from 'react-native-svg';

// // Constants for item generation
// const NUM_ITEMS = 10;

// const getColor = (index: number) => {
//     const multiplier = 255 / (NUM_ITEMS - 1);
//     const colorVal = index * multiplier;
//     return `rgb(${colorVal}, ${Math.abs(128 - colorVal)}, ${255 - colorVal})`;
// };

// type Item = {
//     key: string;
//     label: string;
//     height: number;
//     width: number;
//     backgroundColor: string;
//     description: string;
// };

// const generateInitialData = (): Item[] =>
//     Array.from({ length: NUM_ITEMS }, (_, index) => ({
//         key: `item-${index}`,
//         label: String(index),
//         height: 100,
//         width: 60 + Math.random() * 40,
//         backgroundColor: getColor(index),
//         description: `Item number ${index} - drag me!`,
//     }));

// type DraggableItemProps = {
//     item: Item;
//     drag: () => void;
//     isActive: boolean;
//     deleted: boolean;
//     onDelete: () => void;
//     onArchive: () => void;
// };

// const DraggableItem: React.FC<DraggableItemProps> = (
//     ({ item, drag, isActive, deleted, onDelete, onArchive }) => (
//         <ScaleDecorator>
//             <View style={tw`px-5 flex-row gap-4 items-center border-b border-gray py-3`}>
//                 <TouchableOpacity
//                     onLongPress={drag}
//                     disabled={isActive}
//                     style={tw`items-center justify-center rounded bg-${isActive ? '[#D6DF22]' : '[#EEEEEE]'}`}
//                     accessibilityLabel="Drag to reorder"
//                 >
//                     <View style={tw`p-1 rounded`}>
//                         <SvgXml xml={IconsSquer} width={25} height={25} />
//                     </View>
//                 </TouchableOpacity>

//                 <ScrollView showsVerticalScrollIndicator={false} style={tw`flex-1`}>
//                     <View style={tw`flex-row items-center justify-between`}>
//                         <View style={tw`gap-1.5`}>
//                             {/* <Text style={tw`text-base font-montserrat-600 text-blackish`}>{item.label}</Text> */}
//                             <View style={tw`flex-col gap-1 `}>
//                                 <Text style={tw`text-base text-blackText `}>Complete todo list</Text>
//                                 <View style={tw`flex-row gap-1 items-center`}>
//                                     <SvgXml xml={IconsStart} width={14} height={14} />
//                                     <Text style={tw`text-gray-500 text-sm`}>1 item</Text>
//                                 </View>
//                             </View>
//                             {!deleted && (
//                                 <Pressable
//                                     onPress={onArchive}
//                                     style={tw`border-blackish border w-[65%] items-center px-2 py-1 rounded`}
//                                     accessibilityLabel="Mark as archived"
//                                 >
//                                     <Text style={tw`text-blackish text-sm font-montserrat-600`}>Archive</Text>
//                                 </Pressable>
//                             )}
//                         </View>
//                         {deleted && (
//                             <Pressable onPress={onDelete} accessibilityLabel="Delete item">
//                                 <SvgXml xml={IconsDeleted} width={20} height={20} />
//                             </Pressable>
//                         )}
//                     </View>
//                 </ScrollView>
//             </View>
//         </ScaleDecorator>
//     )
// );



// type HabitItem = {
//     id: number;
//     name: string;
// };

// export default function HabitsScreen() {
//     const [expandedAccordion, setExpandedAccordion] = useState<number | null>(null);
//     const [isEditing, setIsEditing] = useState(false);
//     const [isModalVisible, setIsModalVisible] = useState(false);
//     const [data, setData] = useState<Item[]>(generateInitialData);

//     const toggleAccordion = useCallback((id: number) => {
//         LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
//         setExpandedAccordion((prev) => (prev === id ? null : id));
//     }, []);

//     const handleDelete = useCallback(() => {
//         Alert.alert('Delete Entry', 'Are you sure you want to delete this entry?', [
//             { text: 'Cancel', style: 'cancel' },
//             {
//                 text: 'Delete',
//                 onPress: () => console.log('Entry deleted'),
//                 style: 'destructive',
//             },
//         ]);
//     }, []);

//     const handleArchive = useCallback(() => {
//         Alert.alert('Archive Entry', 'Are you sure you want to archive this entry?', [
//             { text: 'Cancel', style: 'cancel' },
//             {
//                 text: 'Archive',
//                 onPress: () => console.log('Entry archived'),
//                 style: 'destructive',
//             },
//         ]);
//     }, []);

//     const toggleEditMode = useCallback(() => setIsEditing((prev) => !prev), []);

//     const renderHabitItem = ({ item }: { item: HabitItem }) => (
//         <View style={tw`mb-6 px-4`}>
//             <Pressable
//                 onPress={() => toggleAccordion(item.id)}
//                 style={tw`border-l-4 border-gray flex-row justify-between items-center bg-white shadow-md p-4 rounded-lg`}
//                 accessibilityLabel={`${item.name} habit`}
//                 accessibilityRole="button"
//             >
//                 <View style={tw`flex-row gap-2 items-center`}>
//                     <View style={tw`bg-gray/50 p-1 rounded`}>
//                         <SvgXml xml={IconsSquer} width={20} height={20} />
//                     </View>
//                     <View style={tw`bg-yellowGreen p-2 rounded-full`}>
//                         <SvgXml xml={IconsWhiteStar} width={16} height={16} />
//                     </View>
//                     <Text style={tw`text-lg font-montserrat-600`}>{item.name}</Text>
//                 </View>
//                 <SvgXml
//                     xml={expandedAccordion === item.id ? IconsFaqTopArrow : IconsFaqDownArrow}
//                     width={16}
//                     height={16}
//                 />
//             </Pressable>

//             {expandedAccordion === item.id && (
//                 <View style={tw`bg-primaryBg border border-gray rounded-lg mt-2 overflow-hidden`}>
//                     <DraggableFlatList
//                         data={data}
//                         onDragEnd={({ data }) => setData(data)}
//                         keyExtractor={(item) => item.key}
//                         renderItem={({ item, drag, isActive }) => (
//                             <DraggableItem
//                                 item={item}
//                                 drag={drag}
//                                 isActive={isActive}
//                                 deleted={isEditing}
//                                 onDelete={handleDelete}
//                                 onArchive={handleArchive}
//                             />
//                         )}
//                     />
//                 </View>
//             )}
//         </View>
//     )

//     return (
//         <View style={tw`flex-1 bg-primaryBg`}>
//             <View style={tw`p-4 flex-col gap-4`}>
//                 <View style={tw`flex-row items-center justify-between`}>
//                     <Text style={tw`text-blackish font-montserrat-600 text-xl`}>My Habits</Text>
//                     <TouchableOpacity
//                         style={tw`px-2 py-2 bg-blackText rounded flex-row items-center gap-2.5`}
//                         onPress={toggleEditMode}
//                         accessibilityLabel={isEditing ? 'Done editing' : 'Edit habits'}
//                     >
//                         <Text style={tw`text-white text-xs font-montserrat-400`}>{isEditing ? 'Done' : 'Edit'}</Text>
//                     </TouchableOpacity>
//                 </View>

//                 <TextInput
//                     style={tw`py-3 px-4 font-montserrat-600 border border-gray rounded-full text-blackish`}
//                     placeholder="Search habits"
//                     placeholderTextColor="#3e3e3f80"
//                     returnKeyType="search"
//                     clearButtonMode="while-editing"
//                     accessibilityLabel="Search habits"
//                 />

//                 <TouchableOpacity
//                     onPress={() => router.push('/archived')}
//                     style={tw`flex-row items-center gap-2`}
//                     accessibilityLabel="View archived habits"
//                 >
//                     <SvgXml xml={IconsArchived} />
//                     <Text style={tw`text-sm font-montserrat-600`}>Archived</Text>
//                 </TouchableOpacity>
//             </View>

//             <View style={tw`border-b border-gray/50`}>
//                 <Text style={tw`px-4 text-sm font-montserrat-600 mb-3`}>All Habits</Text>
//             </View>

//             <FlatList
//                 data={habits}
//                 renderItem={renderHabitItem}
//                 keyExtractor={(item) => item.id.toString()}
//                 ListFooterComponent={<HabitTracker />}
//                 ListFooterComponentStyle={tw`p-4`}
//                 showsVerticalScrollIndicator={false}
//             />

//             <NewAddedModal visible={isModalVisible} onClose={() => setIsModalVisible(false)} />
//         </View>
//     );
// }