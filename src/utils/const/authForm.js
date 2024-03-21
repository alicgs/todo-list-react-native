import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";

export const loginForm = [
  {
    id: 1,
    title: "E-mail Address",
    type: "email",
    icon: <Feather name="mail" size={20} color="#868E96" />,
  },
  {
    id: 2,
    title: "Password",
    type: "password",
    icon: <Ionicons name="key-outline" size={20} color="#868E96" />,
    isSecure: true,
    SecureIcon: {
      visible: <Feather name="eye" size={20} color="#868E96" />,
      notVisible: <Feather name="eye-off" size={20} color="#868E96" />,
    },
  },
];

export const registerForm = [
  {
    id: 1,
    title: "Name",
    type: "name",
    icon: <Feather name="user" size={20} color="#868E96" />,
  },
  {
    id: 2,
    title: "Surname",
    type: "surname",
    icon: <Feather name="user" size={20} color="#868E96" />,
  },
  {
    id: 3,
    title: "E-mail Address",
    type: "email",
    icon: <Feather name="mail" size={20} color="#868E96" />,
  },
  {
    id: 4,
    title: "Password",
    type: "password",
    icon: <Ionicons name="key-outline" size={20} color="#868E96" />,
    isSecure: true,
    SecureIcon: {
      visible: <Feather name="eye" size={20} color="#868E96" />,
      notVisible: <Feather name="eye-off" size={20} color="#868E96" />,
    },
  },
  {
    id: 5,
    title: "Password Again",
    type: "rpassword",
    icon: <Ionicons name="key-outline" size={20} color="#868E96" />,
    isSecure: true,
    SecureIcon: {
      visible: <Feather name="eye" size={20} color="#868E96" />,
      notVisible: <Feather name="eye-off" size={20} color="#868E96" />,
    },
  },
];
