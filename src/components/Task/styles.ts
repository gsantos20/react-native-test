import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: "100%",
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  confirmIconContainer: {
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    padding: 5
  },
  textInput: {
    width: "50%",
    backgroundColor: '#ffffff',
    padding: 10,
    color: '#000000',
    marginRight: 8,
  },
  focusedInput: {
    borderWidth: 1,
  }
});
