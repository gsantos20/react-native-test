import { Button, NativeSyntheticEvent, Pressable, TextInputFocusEventData, TouchableOpacity, ViewProps } from 'react-native';
import { Text, TextInput, View } from '../../theme';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

export type Task = {
  title: string
  completed: boolean
}

type Props = ViewProps & {
  task: Task;
  index: number;
  onEdit: (index: number, event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  onCompleted: (index: number) => void;
  onDeleted: (index: number) => void;
}

export function Task({ task, index, onEdit, onCompleted, onDeleted }: Props) {

  const [isFocused, setIsFocused] = useState(false);

  return (
    <View style={styles.container}>
      <TextInput
        style={[{
          textDecorationLine: task.completed ? "line-through" : "none"},
          styles.textInput,
          isFocused ? styles.focusedInput : null
        ]}
        value={task.title}
        onBlur={e => { onEdit(index, e);setIsFocused(false) } }
        onFocus={() => setIsFocused(true)}
      >

      </TextInput>

      {/* <Button onPress={() => (onCompleted(index))} title={task.completed ? "Undone" : "Done"}/> */}

      <View style={{ flexDirection: 'row', flexWrap:'wrap', gap: 16 }}>
        <Pressable
          style={styles.confirmIconContainer}
          onPress={() => (onCompleted(index))}
        >
          { task.completed
            ? <MaterialIcons name="check" size={30} color="green" />
            : <MaterialIcons name="close" size={30} color="red" /> }
        </Pressable>
        <Pressable
          style={styles.confirmIconContainer}
          onPress={() => (onDeleted(index))}
        >
          <MaterialIcons name="delete" size={30} color="red" />
        </Pressable>
      </View>
    </View>
  );
}
