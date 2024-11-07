import { StyleSheet, Text, TextInput, View } from "react-native";

type ToDoInputProps = {
  descrRef?: any;
  text: string;
  setText: (text: string) => void;
  title: string;
  onSubmitEditing?: () => void;
  returnKeyType?: "done" | "go" | "next" | "search" | "send";
  blurOnSubmit?: boolean;
};

const ToDoInput: React.FC<ToDoInputProps> = ({
  descrRef,
  text,
  setText,
  title,
  onSubmitEditing,
  returnKeyType,
  blurOnSubmit,
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <TextInput
        ref={descrRef}
        value={text}
        onChangeText={setText}
        style={styles.input}
        returnKeyType={returnKeyType}
        onSubmitEditing={onSubmitEditing}
        blurOnSubmit={blurOnSubmit}
      />
    </View>
  );
};

export default ToDoInput;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
  },
  input: {
    padding: 10,
    height: 40,
    width: "80%",
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    marginLeft: 10,
  },
});
