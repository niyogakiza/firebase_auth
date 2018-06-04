import React, { Component } from 'react';
import { View , Text} from 'react-native';
import { FormLabel, FormInput, Button} from 'react-native-elements';
import axios from 'axios';
import firebase from 'firebase';
const ROOT_URL = 'https://us-central1-someapp-7f2f1.cloudfunctions.net';


class SignInForm extends Component {
    state = {
        phone: '',
        code: ''
    };

    handleSubmit = async () => {
        // Request from firebase
        try {
            let {data} = await axios .post(`${ROOT_URL}/verifyOneTimePassword`, {
                phone: this.state.phone,
                code: this.state.code
            });
            firebase.auth().signInWithCustomToken(data.token);
        } catch (err) {
            this.setState({ error: "Something went wrong"})
        }

    };

    render(){
        return(
            <View>
                <View style={{ marginBottom: 10}}>
                    <FormLabel> Enter Phone Number</FormLabel>
                    <FormInput
                        value={this.state.phone}
                        onChangeText={phone => this.setState({phone})}
                        placeholder="55-555-555-555"
                    />
                </View>
                <View style={{ marginBottom: 10}}>
                    <FormLabel> Enter Code</FormLabel>
                    <FormInput
                        value={this.state.code}
                        onChangeText={code => this.setState({code})}
                        placeholder="55-555-555-555"
                    />
                </View>
                <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                />
            </View>
        )
    }
}

export default SignInForm