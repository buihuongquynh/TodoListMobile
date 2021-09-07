import React, {useState} from 'react';
import {View, Text, FlatList, TouchableOpacity, TextInput} from 'react-native';
const useTodo = () => {
  const [name, setName] = useState('');
  const [data, setData] = useState([
    {
      name: 'truong',
      img: 'https://tse2.mm.bing.net/th?id=OIP.7EsX0733_noXGGKKPTOomQHaKW&pid=Api&P=0&w=300&h=300',
    },
    {
      name: 'quynh',
      img: 'https://tse3.mm.bing.net/th?id=OIP.KrVWbZt68R-59iiTdoEnHAHaHa&pid=Api&P=0&w=300&h=300',
    },
    {
      name: 'hoang',
      img: 'https://tse4.mm.bing.net/th?id=OIP.6_xqY3smv_dKGH--3fZGEAHaLG&pid=Api&P=0&w=300&h=300',
    },
    {
      name: 'trinh',
      img: 'https://tse1.mm.bing.net/th?id=OIP.O-jHi-OX9yGATeuw4qQoRwHaLG&pid=Api&P=0&w=300&h=300',
    },
  ]);
  const addTodo = name => {
    return setData([...data, {name}]);
  };
  const deleteTodo = name => {
     var NewData =  data.filter(item=> item.name != name)
     return setData(NewData);
  };
  const editTodo = name => {

  }
  return {
    data,
    addTodo,
    name,
    setName,
    deleteTodo,
  };
};
export default useTodo;
