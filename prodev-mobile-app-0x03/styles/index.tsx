import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    paddingHorizontal: 20,
    paddingTop: 40,
  },
  navGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 30,
    gap: 10,
  },
  largeText: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 5,
  },
  smallText: {
    fontSize: 16,
    color: "#7E7B7B",
    marginBottom: 30,
  },
  formGroup: {
    marginBottom: 20,
  },
  placeholderText: {
    fontSize: 14,
    color: "#7E7B7B",
    marginBottom: 8,
  },
  inputField: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: "#F9F9F9",
  },
  passwordGroup: {
    flexDirection: "row",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingHorizontal: 12,
    backgroundColor: "#F9F9F9",
  },
  forgotPasswordText: {
    textAlign: "right",
    color: "#007AFF",
    marginTop: 10,
  },
  button: {
    backgroundColor: "#007AFF",
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: "center",
    marginTop: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600",
  },
  dividerGroup: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 30,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  dividerText: {
    marginHorizontal: 10,
    fontSize: 14,
    color: "#7E7B7B",
  },
  socialMediaButtonGroup: {
    gap: 15,
  },
  socialMediaButton: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    paddingVertical: 12,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  socialMediaButtonText: {
    fontSize: 16,
    fontWeight: "500",
  },
  subTextGroup: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 20,
  },
  subText: {
    fontSize: 14,
    color: "#7E7B7B",
  },
  subTextJoin: {
    fontSize: 14,
    color: "#007AFF",
    fontWeight: "600",
  },
});
