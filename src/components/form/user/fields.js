import React from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import classNames from 'classnames';
import Colors from 'src/constants/Colors';
import { FormLabel, FormInput, FormValidationMessage } from 'react-native-elements'

const style = StyleSheet.create({
    label: {
        fontSize: 18
    },
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
    },
    borderAll: {
        borderLeftWidth: 1,
        borderRightWidth: 1,
         borderTopWidth: 1,
         borderBottomWidth: 1,
        // height: 70
    },
    whiteSpace: {
        padding: 10
    },
    label: {
        fontSize: 30
    }
});

// Our inner form component which receives our form's state and updater methods as props
const FormFields = (props) => {
    const { values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting, btnBlock, buttonWidth25 } = props;

    return (
        <View style={style.container}>
            {/* {errors.message ? <div className="alert alert-danger" role="alert">{errors.message}</div> : null} */}
            <View>
                <FormLabel style={style.label}>Email Address</FormLabel>
                <View style={style.borderAll}>
                    <FormInput underlineColorAndroid='transparent' onChangeText={text => props.setFieldValue('email', text)} />
                </View>
                {touched.email && errors.email && <FormValidationMessage>{errors.email}</FormValidationMessage>}

                <View style={style.whiteSpace} />

                <FormLabel style={style.label}>Password</FormLabel>
                <View style={style.borderAll}>
                    <FormInput underlineColorAndroid='transparent' onChangeText={password => props.setFieldValue('password', password)} />
                </View>  
                {touched.password && errors.password && <FormValidationMessage>{errors.password}</FormValidationMessage>}
                {/* <TextInput
                    onChangeText={text => props.setFieldValue('email', text)}
                    value={props.values.email}
                /> */}
                {/* <input
                    type="email"
                    name="email"
                    placeholder="Email Address"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                /> */}
            </View>

            <View style={style.whiteSpace} />

            {/* <div className="form-group">
                <label style={style.label}>Password</label>
                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="form-control form-control-lg"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.password}
                />
                {touched.password && errors.password && <span className="text-danger">{errors.password}</span>}
            </div> */}

            <TouchableOpacity onPress={handleSubmit} style={style.button} underlayColor='#99d9f4'>
                <Text style={style.buttonText}>Submit</Text>
            </TouchableOpacity>
            
            {/* <button type="submit" className={btnClass} disabled={isSubmitting}>
                {isSubmitting ? <i className="p-1 fa fa-spinner fa-spin"></i> : null}
                Submit
            </button> */}

        </View>
    )
}

export default FormFields;