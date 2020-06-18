import React, { useEffect, useState, Fragment } from 'react';
import api from './services/api'

import {
  SafeAreaView,
  FlatList, Text,
  StyleSheet,
  StatusBar,
  TouchableOpacity
} from 'react-native';

export default () => {

  const [projects, setProjects] = useState([]);

  useEffect(() => {
    (async () => {
      const response = await api.get('projects');
      setProjects(response.data);
    })()

  }, [])

  const handleSubmitProject = async () => {
    const data = {
      title: "CaralhoooooXXXXXXXXX",
      owner: "Mateus Pinto GarciXXXXXXXXXXXXXXa"
    }
    const response = await api.post('projects', data);
    setProjects([...projects, response.data])
  }

  return (
    <Fragment>
      <SafeAreaView style={styles.container}>
        <StatusBar
          barStyle="light-content"
          backgroundColor="#74d"
        />
        <FlatList
          data={projects}
          keyExtractor={(project) => project.id}
          renderItem={({ item }) => (
            <Text style={styles.text}>  {item.title} </Text>
          )}
        />
        <TouchableOpacity
          onPress={handleSubmitProject}
          activeOpacity={0.6}
          style={styles.button}>
          <Text style={styles.buttontext}>
            Adicionar
          </Text>
        </TouchableOpacity>
      </SafeAreaView>

    </Fragment >
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#74d'
  },
  text: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold'
  },

  button: {
    backgroundColor: '#FFF',
    margin: 20,
    padding: 15,
    borderRadius: 5
  },

  buttontext: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold'
  }

})
