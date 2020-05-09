import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    TextInput,
    ImageBackground 
  } from 'react-native';
  
  import {
    Header,
    LearnMoreLinks,
    Colors,
    DebugInstructions,
    ReloadInstructions,
  } from 'react-native/Libraries/NewAppScreen';

  const image = { uri: "https://png.pngtree.com/thumb_back/fw800/background/20190222/ourmid/pngtree-small-clear-and-beautiful-literary-background-backgroundsmall-clear-backgroundgreen-image_62321.jpg" };

  const App: () => React$Node = () => {
    return (
      <>
      <ImageBackground source={image} style={styles.image}>
        <StatusBar barStyle="dark-content" />
        <SafeAreaView>
          <ScrollView
            contentInsetAdjustmentBehavior="automatic"
            style={styles.scrollView}>
            {global.HermesInternal == null ? null : (
              <View style={styles.engine}>
                <Text style={styles.footer}>Engine: Hermes</Text>
              </View>
            )}
            <View style={styles.body}>
           
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>My App</Text>
                <Text style={styles.sectionDescription}>
                  Edit my<Text style={styles.highlight}> Proyecto 1</Text>
                </Text>
              </View>
              <View style={styles.sectionContainer}>
              <TextInput
                style={{height: 40}}
                placeholder="Escriba aquí"
              />
              </View>     
            </View>
          </ScrollView>     
        </SafeAreaView>
      </ImageBackground>    
      </>
    );
  };
  
  const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: Colors.lighter,
    },
    engine: {
      position: 'absolute',
      right: 0,
    },
    body: {
      backgroundColor: Colors.white,
    },
    sectionContainer: {
      marginTop: 32,
      paddingHorizontal: 24,
    },
    sectionTitle: {
      fontSize: 24,
      fontWeight: '600',
      color: Colors.black,
    },
    sectionDescription: {
      marginTop: 8,
      fontSize: 18,
      fontWeight: '400',
      color: Colors.dark,
    },
    highlight: {
      fontWeight: '700',
    },
    footer: {
      color: Colors.dark,
      fontSize: 12,
      fontWeight: '600',
      padding: 4,
      paddingRight: 12,
      textAlign: 'right',
    },
    image: {
      flex: 1,
      resizeMode: "cover",
      justifyContent: "center"
    },
  });
  
  export default App;
  