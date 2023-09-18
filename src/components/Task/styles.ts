import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    flexDirection:'row',
    flexWrap:'wrap',
    alignItems:'center',
    justifyContent: 'space-between'
  },
  text: {
    marginRight: 8,
  },
  confirmIconContainer: {
    backgroundColor: 'black',
    justifyContent: 'flex-start',
    padding: 5
  },
});
