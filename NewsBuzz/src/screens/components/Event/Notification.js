import React from "react";
import { View, Text } from "react-native";

import {
  Container,
  Content,
  Header,
  Form,
  Input,
  Item,
  Button,
  Label
} from "native-base";
export default class Notification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      notification_title: "",
      notofocation_discription: ""
    };
  }

  generte_alert = () => {
    alert("pehly code to likho ");
  };

  render() {
    return (
      <Form>
        <Item floatingLabel>
          <Label>Notification title:</Label>
          <Input
            autoCorrect={false}
            autoCapitalize="none"
            onChangeText={notification_title =>
              this.setState({ notification_title })
            }
          />
        </Item>
        <Item floatingLabel>
          <Label>Notification Description:</Label>
          <Input
            autoCorrect={false}
            keyboardType="numeric"
            autoCapitalize="none"
            onChangeText={notofocation_discription =>
              this.setState({ notofocation_discription })
            }
          />
        </Item>
        <View></View>
        <Button
          onPress={this.generte_alert}
          style={{ marginTop: 50 }}
          full
          rounded
          success
        >
          <Text style={{ color: "white" }}>Send Notification</Text>
        </Button>
      </Form>
    );
  }
}
