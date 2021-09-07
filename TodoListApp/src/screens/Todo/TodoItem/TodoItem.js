import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './TodoItem.styles';
import useTodo from '../useTodo';
const TodoItem = ({user}) => {
  const {deleteTodo} = useTodo();
  return (
    <View style={styles.Item}>
      <Image style={styles.Image} source={{uri: user.img}} />
      <Text>{user.name}</Text>
      <TouchableOpacity
        onPress={() => {
          deleteTodo(user.name);
        }}>
        <View>
          <Image
            style={styles.Icon}
            source={{
              uri: 'https://tse3.mm.bing.net/th?id=OIP.90bvTUGcCJqR0qsvzA85HQHaHx&pid=Api&P=0&w=300&h=300',
            }}
          />
        </View>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
          deleteTodo(user.name);
        }}>
        <View>
          <Image
            style={styles.Icon}
            source={{
              uri: 'https://tse2.mm.bing.net/th?id=OIP.d1sTN41laBxAg-Uy_pXvmgHaHx&pid=Api&P=0&w=300&h=300',
            }}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};
export default TodoItem;
