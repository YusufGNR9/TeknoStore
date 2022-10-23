import { SafeAreaView, StyleSheet, FlatList } from 'react-native';
import devices_data from "./src/components/data.json";
import ToolCard from './src/components/ToolCard/ToolCard';
import Header from './src/components/Header/Header';
import SearchBar from './src/components/SearchBar/SearchBar';

export default function App() {

  const renderDevices = ({item}) => <ToolCard tools={item} />;

  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <SearchBar />
      {/* <FlatList 
      keyExtractor={(item) => item.id.toString()}
          data= {devices_data}
          renderItem={renderDevices}
          numColumns={2}
        /> */}
    </SafeAreaView>
  );
}


const styles= StyleSheet.create({
  container: {
    flex : 1,
    flexWrap: true,
    backgroundColor: "white",
    flexDirection: "column",
  }
});
