import { ScreenContent } from 'app/components/ScreenContent';
import { StatusBar } from 'expo-status-bar';
import '../global.css';

export default function Home() {
  return (
    <>
      <ScreenContent title="Home" path="App.tsx" />
      <StatusBar style="auto" />
    </>
  );
}
