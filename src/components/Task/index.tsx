import { Button, TouchableOpacity, ViewProps } from 'react-native';
import { Text, View } from '../../theme';
import { styles } from './styles';
import { MaterialIcons } from '@expo/vector-icons';

export type Task = {
  title: string
  completed: boolean
}

type Props = ViewProps & {
  task: Task;
  index: number;
  onCompleted: (index: number) => void;
}

export function Task({ task, index, onCompleted }: Props) {
  return (
    <View style={styles.container}>
      <Text style={[{textDecorationLine: task.completed ? "line-through" : "none"}, styles.text]}>{task.title}</Text>

      {/* <Button onPress={() => (onCompleted(index))} title={task.completed ? "Undone" : "Done"}/> */}
      <TouchableOpacity
        style={styles.confirmIconContainer}
        onPress={() => (onCompleted(index))}
      >
        { task.completed
          ? <MaterialIcons name="check" size={30} color="green" />
          : <MaterialIcons name="close" size={30} color="red" /> }
      </TouchableOpacity>
    </View>
  );
}
