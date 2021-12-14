import React from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import CreateEmployee from './components/CreateEmployee';
import EmployeeList from './components/EmployeeList';
import NoPageFound from './components/NoPageFound';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Employee from './components/Employee';
import EditEmployee from './components/EditEmployee';
import { Text } from 'react-native';



const App = () => {

  return (
    <Router>
      <View >
        <View style={styles.navbar}>
          <Text style={styles.navbarText}>
            Employee Management App
          </Text>
        </View>
        <Routes >
          <Route index exact path={"/"} element={<EmployeeList />} />
          <Route exact path={"/createEmployee"} element={<CreateEmployee />} />
          <Route exact path="/:id/view" element={<Employee />} />
          <Route exact path="/:id/update" element={<EditEmployee />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </View>

    </Router>
  )

}


const styles = StyleSheet.create({
  navbarText: {
    color: "#f0eee9",
    marginVertical: "auto",
    fontSize: "1.5rem",
  },
  navbar: {
    backgroundColor: "#2e2d2a",
    flex: 1,
    paddingVertical: "0.25rem",
    marginBottom: "2rem",
    minWidth: "350px"
  }
});

export default App;
//list employees
//have headings
//make backend and write cruds
//navbar
//style properly
//seed data
