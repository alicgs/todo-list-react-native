import React from "react";
import UserStack from "./UserStack";
import AuthStack from "./AuthStack";


export default function index() {
  const isLogin = false;
  return <>{isLogin ? <UserStack /> : <AuthStack/>}</>;
}

