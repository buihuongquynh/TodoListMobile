import React from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
import styles from './Todo.styles';
import TodoItem from './TodoItem/TodoItem';
import useTodo from './useTodo';
const Todo = () => {
    const {data, addTodo, name, setName} = useTodo();
    const renderItem = ({item}) => <TodoItem user={item} />;
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
        <TextInput
          placeholder="lolo"
          value={name}
          onChangeText={setName}
        />
      </View>
      <FlatList
        data={data}
        renderItem={renderItem}
        keyExtractor={item => item.name}
      />
    </View>
  );
};
export default Todo;
