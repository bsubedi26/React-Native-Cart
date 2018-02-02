import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import t from 'tcomb-form-native';
import Colors from 'src/constants/Colors';

const { Form } = t.form;

const Person = t.struct({
  email: t.String,
  password: t.String,
  rememberMe: t.Boolean,
});

const options = {
  auto: 'placeholders',
  fields: {
    email: {
      // editable: false
      // hasError: true,
      error: 'Insert a valid email address.'
    },
    password: {
      error: 'Insert a valid password.'
    },
  }
}

export default class FormCmp extends React.Component {

  _handleSubmit() {
    const result = this.form.getValue()
    // console.log('this.form.getValue()', result)
    
    if (result) {
      this.props.handleSubmit(result)
    }
  }

  render() {

    return (
      <View style={styles.container}>
        <Form
          ref={ cmp => this.form = cmp }
          type={Person}
          options={options}
        />
        
        <TouchableOpacity onPress={this._handleSubmit.bind(this)} style={styles.button} underlayColor='#99d9f4'>
          <Text style={styles.buttonText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#ffffff',
  },
  title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: Colors.banner,
    // borderColor: '#48BBEC',
    // borderWidth: 1,
    // borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});