import { Text, View, StyleSheet, ScrollView, Image, Alert, TouchableOpacity} from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import AntDesign from '@expo/vector-icons/AntDesign';
import { Icon } from "expo-router";
import { Button } from "expo-router/build/react-navigation";


const myAlert = () => {
  console.log("Test")
  Alert.alert(
    "MyAlert",
    "Marvelous!!",
    [
      {
        text: "Marvelous!!"
      },
      {
        text: "Marvelous!!"
      }
    ]
  )
}

export default function Index() {
  return (

    <SafeAreaProvider>
      <View style={styles.headerLayout}>
        <AntDesign name="menu" size={24} color="black" />
        <View style={styles.searchBar}>
          <AntDesign style={styles.searchIcon} name="reddit" size={24} color="black" />
          <Text style={styles.searchText}>Find Anything</Text>
        </View>
        <AntDesign name="plus" size={24} color="black" />
      </View>
      <ScrollView>
        <View>
          <View style={styles.postHeader}>
            <View style={styles.postHeader} >
              <AntDesign style={styles.postIcon} name="reddit" size={24} color="black" />
              <Text style={styles.postSub}>r/Subreddit</Text>
            </View>
            <AntDesign style={styles.postOptions} name="dash" size={24} color="black" />
          </View>
          <View style={styles.postBody}>
            <Text style={styles.postText}>This is the posts title</Text>
            <TouchableOpacity onPress={myAlert}>
              <Image source={{uri:  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.donmai.us%2Fsample%2F89%2F89%2F__marvelous_sunday_umamusume_drawn_by_plover__sample-89896f50e228859ad58a4260e8f41d99.jpg&f=1&nofb=1&ipt=8b4491940576ae128d40a38a4248548761bf701ab5251fe2f3dd9d65d0f85e93"}} style={styles.postImage}/>
            </TouchableOpacity>
          </View>
          <View style={styles.postFooter}>
            <View style={styles.postFooterOption}>
              <AntDesign style={styles.postFooterIcon} name="arrow-up" size={20} color="black" />
              <Text>100</Text>
            </View>
            <View style={styles.postFooterOption}>
              <AntDesign style={styles.postFooterIcon} name="comment" size={20} color="black" />
            </View>
            <View style={styles.postFooterOption}>
              <AntDesign style={styles.postFooterIcon} name="crown" size={20} color="black" />
            </View>
            <View style={styles.postFooterOption}>
              <AntDesign style={styles.postFooterIcon} name="send" size={20} color="black" />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.postHeader}>
            <View style={styles.postHeader} >
              <AntDesign style={styles.postIcon} name="reddit" size={24} color="black" />
              <Text style={styles.postSub}>r/Subreddit</Text>
            </View>
            <AntDesign style={styles.postOptions} name="dash" size={24} color="black" />
          </View>
          <View style={styles.postBody}>
            <Text style={styles.postText}>This is the posts title</Text>
            <TouchableOpacity onPress={myAlert}>
              <Image source={{uri:  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.donmai.us%2Fsample%2F89%2F89%2F__marvelous_sunday_umamusume_drawn_by_plover__sample-89896f50e228859ad58a4260e8f41d99.jpg&f=1&nofb=1&ipt=8b4491940576ae128d40a38a4248548761bf701ab5251fe2f3dd9d65d0f85e93"}} style={styles.postImage}/>
            </TouchableOpacity>
          </View>
          <View style={styles.postFooter}>
            <View style={styles.postFooterOption}>
              <AntDesign style={styles.postFooterIcon} name="arrow-up" size={20} color="black" />
              <Text>100</Text>
            </View>
            <View style={styles.postFooterOption}>
              <AntDesign style={styles.postFooterIcon} name="comment" size={20} color="black" />
            </View>
            <View style={styles.postFooterOption}>
              <AntDesign style={styles.postFooterIcon} name="crown" size={20} color="black" />
            </View>
            <View style={styles.postFooterOption}>
              <AntDesign style={styles.postFooterIcon} name="send" size={20} color="black" />
            </View>
          </View>
        </View>
        <View>
          <View style={styles.postHeader}>
            <View style={styles.postHeader} >
              <AntDesign style={styles.postIcon} name="reddit" size={24} color="black" />
              <Text style={styles.postSub}>r/Subreddit</Text>
            </View>
            <AntDesign style={styles.postOptions} name="dash" size={24} color="black" />
          </View>
          <View style={styles.postBody}>
            <Text style={styles.postText}>This is the posts title</Text>
            <TouchableOpacity onPress={myAlert}>
              <Image source={{uri:  "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn.donmai.us%2Fsample%2F89%2F89%2F__marvelous_sunday_umamusume_drawn_by_plover__sample-89896f50e228859ad58a4260e8f41d99.jpg&f=1&nofb=1&ipt=8b4491940576ae128d40a38a4248548761bf701ab5251fe2f3dd9d65d0f85e93"}} style={styles.postImage}/>
            </TouchableOpacity>
          </View>
          <View style={styles.postFooter}>
            <View style={styles.postFooterOption}>
              <AntDesign style={styles.postFooterIcon} name="arrow-up" size={20} color="black" />
              <Text>100</Text>
            </View>
            <View style={styles.postFooterOption}>
              <AntDesign style={styles.postFooterIcon} name="comment" size={20} color="black" />
            </View>
            <View style={styles.postFooterOption}>
              <AntDesign style={styles.postFooterIcon} name="crown" size={20} color="black" />
            </View>
            <View style={styles.postFooterOption}>
              <AntDesign style={styles.postFooterIcon} name="send" size={20} color="black" />
            </View>
          </View>
        </View>
      </ScrollView>

    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  postImage: {
    height: 250,
    width: "100%",
    borderRadius: 10,
    alignSelf: 'center'
  },
  headerLayout: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-between',
    borderBottomColor: 'lightgray',
    borderBottomWidth: 1,
    paddingBottom: 8
  },
  headerItem: {
    flex:2
  },
  searchBar: {
    flex:3,
    flexDirection: 'row',
    marginInline: 36,
    paddingInline:12,
    paddingBlock: 6,
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 20,
    justifyContent: 'flex-start'
  },
  searchText: {
    color: 'gray',
    flex: 6,
    paddingTop: 4
  },
  searchIcon: {
    flex:3,
    color: 'red'
  },
  postHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBlock: 2
  },
  postSub: {
    paddingTop: 4
  },
  postIcon: {
    paddingRight: 8,
    paddingLeft: 20

  },
  postOptions: {
    paddingRight: 20,
    paddingLeft: 8
  },
  postBody: {
    paddingInline:20
  },
  postText: {
    fontSize: 16,
    fontWeight: '600'
  },
  postFooter: {
    paddingInline: 18,
    paddingBlock: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: 'lightgray'
  },
  postFooterOption: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    borderRadius: 15,
    borderColor: 'lightgray',
    borderWidth: 1,
    paddingBlock: 2,
    paddingInline: 6
  },
  postFooterIcon: {
    color: '#232323'
  }
});
 