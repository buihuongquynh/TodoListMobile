import React, {useState, useEffect} from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import styles from './Todo.styles';
import TodoItem from './TodoItem/TodoItem';
import useTodo from './useTodo';
import {LogBox} from 'react-native';
const Todo = () => {
  // Ignore log notification by message:
  LogBox.ignoreLogs(['Warning: ...']);
  console.log('aaa');
  // Ignore all log notifications:
  LogBox.ignoreAllLogs();

  const {data, addTodo, name, setName, edit} = useTodo();
  const renderItem = ({item}) => <TodoItem user={item} />;
  useEffect(() => {
    edit;
  }, []);
  console.log(edit)
  return (
    <View>
      <View>
        <TouchableOpacity
          onPress={() => {
            addTodo(name);
            setName('');
          }}>
          <View>
            <Text>Add to do</Text>
          </View>
        </TouchableOpacity>
        <TextInput placeholder="lolo" value={name} onChangeText={setName} />
      </View>
      {edit ? (
        <View>
          <TouchableOpacity
            onPress={() => {
              OnClick(name);
              setName('');
            }}>
            <View>
              <Text>edit Todo</Text>
            </View>
          </TouchableOpacity>
          <TextInput placeholder="edit" value={name} onChangeText={setName} />
        </View>
      ) : null}

      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
export default Todo;
