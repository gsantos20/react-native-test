import { useEffect, useState } from 'react';
import { Keyboard, NativeSyntheticEvent, ScrollView, TextInputFocusEventData, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import { View, SafeAreaView, TextInput, Text } from '../../theme';
import { Task } from '@components/Task';
import { styles } from './styles';
import { useAsyncStorage } from '@react-native-async-storage/async-storage';
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid';

export default function TodoListScreen() {

  const { setItem, getItem } = useAsyncStorage("@todo-list:tasks")

  const [tasks, setTasks] = useState<any[]>([])

  useEffect(() => {
    getStorage()
  }, [])

  const getStorage = async () => {
    const res = await getItem()
    const data = res ? JSON.parse(res) : []
    setTasks(data)
  }

  const addTask = (title: string) => {
    const id = uuidv4()
    const newTask = {
      id,
      title,
      completed: false
    }

    const newTasks = [...tasks, newTask];
    setTasks(newTasks);
    setItem(JSON.stringify(newTasks))
  };

  const editTask = (index: number, event: NativeSyntheticEvent<TextInputFocusEventData>) => {
    const newTasks = [...tasks];
    console.log(event)
    // newTasks[index].completed = !newTasks[index].completed;
    // setTasks(newTasks);
    // setItem(JSON.stringify(newTasks))
  };

  const completeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
    setItem(JSON.stringify(newTasks))
  };

  const removeTask = (index: number) => {
    const newTasks = tasks.filter((task, i) => i !== index)
    setTasks(newTasks);
    setItem(JSON.stringify(newTasks))
  };

  function CreateTask({ addTask }: { addTask: (value: string) => void }) {
    const [value, setValue] = useState("");

    const handleSubmit = () => {
      if (!value) return;
      addTask(value);
      setValue("");
    }

    return (
      <View style={{marginTop: 8}}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <TextInput
            style={styles.textInput}
            value={value}
            placeholder="Add a new task"
            onChangeText={e => setValue(e)}
          />
        </TouchableWithoutFeedback>
        <TouchableOpacity style={styles.button} onPress={handleSubmit}>
          <Text style={styles.text}>Add</Text>
        </TouchableOpacity>
      </View>

    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={{ flexGrow: 1 }}
        showsVerticalScrollIndicator={false}
        keyboardShouldPersistTaps="handled">
        <View style={styles.content}>
          {tasks.map((task, index) => (
            <Task
              onEdit={editTask}
              onCompleted={completeTask}
              onDeleted={removeTask}
              task={task}
              index={index}
              key={index}
            />
          ))}

          <CreateTask addTask={addTask}/>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}


