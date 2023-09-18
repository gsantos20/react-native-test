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
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 52,
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
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
