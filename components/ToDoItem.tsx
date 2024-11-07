import { View, Text, Pressable, StyleSheet } from "react-native";

interface Task {
  id: number;
  text: string;
  desc: string;
}

type ToDoItemProps = {
  task: Task;
  deleteTask: (id: number) => void;
};

const TodoItem: React.FC<ToDoItemProps> = ({ task, deleteTask }) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>{task.text}</Text>
        <Text>{task.desc}</Text>
      </View>
      <Pressable style={styles.deleteBtn} onPress={() => deleteTask(task.id)}>
        <Text style={(styles.text, { color: "white" })}>X</Text>
      </Pressable>
    </View>
  );
};

export default TodoItem;

const styles = StyleSheet.create({
  container: {
    height: 60,
    width: "80%",
    padding: 5,
    marginTop: 10,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderColor: "gray",
    borderWidth: 1,
  },
  text: {
    fontSize: 24,
  },
  deleteBtn: { backgroundColor: "red", padding: 10, borderRadius: 5 },
});
