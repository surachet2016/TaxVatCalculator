import { StyleSheet } from "react-native";

const Mystyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
  resultContainer: {
    backgroundColor: "#f9f9f9",
    width: 300,
    padding: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  greentext: {
    color: "green",
    fontWeight: "bold",
  },
  buttonText: {
    fontSize: 15,
    width: 150,
    fontWeight: "bold",
    color: "white",
    textAlign: "center",
  },
  button: {
    backgroundColor: "green",
    padding: 15,
    borderRadius: 5,
  },
  header: {
    fontSize: 30,
    padding: 15,
    width: 300,
    fontWeight: "bold",
    textAlign: "center",
  },
  subHeader: {
    fontSize: 10,
    width: 300,
    fontWeight: "bold",
    textAlign: "left",
  },
  total: {
    fontSize: 18,
    width: 300,
    fontWeight: "bold",
    color: "green",
    textAlign: "left",
  },
  horizontalLine: {
    borderBottomWidth: 1,
    borderBottomColor: "green",
    width: "100%",
    marginVertical: 10,
  },
});

export default Mystyles;
