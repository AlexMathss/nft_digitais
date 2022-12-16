import { SafeAreaView, ScrollView, StyleSheet } from 'react-native';
import Header from './src/Pages/Header';
import Routes from './src/Routes';

export default function App() {
  return (
    <SafeAreaView style={{marginBottom: 70, backgroundColor: '#1D2544'}}>
      <Header/>
      <ScrollView>
        <Routes/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
