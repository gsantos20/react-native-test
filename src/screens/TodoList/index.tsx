import { useState } from 'react';
import { Button, ScrollView } from 'react-native';
import { View, SafeAreaView, TextInput } from '../../theme';
import { Task } from '@components/Task';
import { styles } from './styles';

export default function TodoListScreen() {

  const [tasks, setTasks] = useState([
    {
      title: "Grab some Pizza",
      completed: true
    },
    {
      title: "Do your workout",
      completed: true
    },
    {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },
        {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },

    {
      title: "Hangout with friends",
      completed: false
    },
        {
      title: "Hangout with friends",
      completed: false
    },
    {
      title: "Hangout with friends",
      completed: false
    },
  ]);

  const addTask = (title: string) => {
    const newTasks = [...tasks, {title, completed: false}];
    setTasks(newTasks);
  };

  const completeTask = (index: number) => {
    const newTasks = [...tasks];
    newTasks[index].completed = !newTasks[index].completed;
    setTasks(newTasks);
  };

  function CreateTask(props: { addTask: (value: string) => void }) {
    const [value, setValue] = useState("");

    const handleSubmit = () => {
      if (!value) return;
      props.addTask(value);
      setValue("");
    }

    return (
      <View style={{marginTop: 8}}>
        <TextInput
          style={styles.textInput}
          value={value}
          placeholder="Add a new task"
          onChangeText={e => setValue(e)}
        />
        <Button onPress={handleSubmit} title={"Add"}/>
      </View>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.content}>
          {tasks.map((task, index) => (
            <Task
              onCompleted={completeTask}
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


