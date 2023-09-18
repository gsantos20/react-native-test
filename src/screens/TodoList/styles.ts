import { StyleSheet } from "react-native";
import { THEME } from "theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 8,
    gap: 8
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
  textInput: {
    backgroundColor: '#ffffff',
    padding: 10,
    color: '#000000',
    borderWidth: 1,
    marginTop: 8,
    marginBottom: 12
  }
});
