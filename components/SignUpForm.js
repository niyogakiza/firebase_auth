import React, { Component } from 'react';
import { View , Text} from 'react-native';
import { FormLabel, FormInput, Button} from 'react-native-elements';
import axios from 'axios';
const ROOT_URL = 'https://us-central1-someapp-7f2f1.cloudfunctions.net';


class SignUpForm extends Component {
   state = { phone: ''};

    handleSubmit = async () => {
        // Request from firebase
        try {
            await axios .post(`${ROOT_URL}/createUser`, {
                phone: this.state.phone
            });

            await axios.post(`${ROOT_URL}/requestSomeApp`, {
                phone: this.state.phone
            });
        } catch (err) {
            this.setState({ error: "Something went wrong"})
            //console.log(err);
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
                <Button
                    title="Submit"
                    onPress={this.handleSubmit}
                />
            </View>
        )
    }
}

export default SignUpForm;