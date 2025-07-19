import {  Redirect } from 'expo-router';
import { StatusBar } from "expo-status-bar";
const App = () => {
  return (
    <>
    <Redirect href={'/tabs/home'}/>
    <StatusBar style="auto" />
    </>
  )
}

export default App;