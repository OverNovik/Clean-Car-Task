import React, { useRef, useState } from "react";
import { View, Button, StyleSheet, TextInput } from "react-native";
import TodoItem from "./ToDoItem";
import ToDoInput from "./ToDoInput";

const TodoList: React.FC = () => {
  const [tasks, setTasks] = useState<
    { id: number; text: string; desc: string }[]
  >([]);

  const descrRef = useRef<TextInput>(null);

  const [text, setText] = useState("");
  const [desc, setDesc] = useState("");
  function addTask() {
    const newTask = { id: Date.now(), text, desc };
    setTasks([...tasks, newTask]);
    setText("");
    setDesc("");
  }

  function deleteTask(id: number) {
    setTasks(tasks.filter((task) => task.id !== id));
  }

  return (
    <View style={styles.container}>
      <View style={styles.inputContainer}>
        <ToDoInput
          text={text}
          setText={setText}
          title="Name:"
          onSubmitEditing={() => descrRef.current?.focus()}
          returnKeyType="next"
          blurOnSubmit={false}
        />
        <ToDoInput
          descrRef={descrRef}
          text={desc}
          setText={setDesc}
          title="Descr:"
          returnKeyType="send"
          onSubmitEditing={addTask}
        />
        <Button title="Add" onPress={addTask} />
      </View>
      {tasks.map((task) => (
        <TodoItem key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </View>
  );
};

export default TodoList;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "80%",
  },
});
