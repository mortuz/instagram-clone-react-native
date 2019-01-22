import React, { Component } from "react";
import { View, Text, StyleSheet, Image } from "react-native";


import { Icon, Card, CardItem, Thumbnail, Body, Left, Right, Button } from 'native-base';
class CardComponent extends Component {

    render() {

        const images = {
            "1": require('../assets/feed_images/1.jpg'),
            "2": require('../assets/feed_images/2.jpg'),
            "3": require('../assets/feed_images/3.png')
        };
        
        return (
            <Card>
                <CardItem>
                    <Left>
                        <Thumbnail source={require('../assets/me.png')}/>
                        <Body>
                            <Text>Mortuz</Text>
                            <Text note>Jan 18, 2019</Text>
                        </Body>
                    </Left>
                </CardItem>
                <CardItem cardBody> 
                    <Image source={images[this.props.imageSource]}
                        style={{height:200, width:null, flex:1}} />
                </CardItem>
                <CardItem style={{height:45}}>
                    <Left>
                        <Button transparent>
                            <Icon name="ios-heart" style={{color: 'black'}} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-chatbubbles" style={{color: 'black'}} />
                        </Button>
                        <Button transparent>
                            <Icon name="ios-send" style={{color: 'black'}} />
                        </Button>
                    </Left>
                </CardItem>
                <CardItem style={{ height: 20}}>
                    <Text>{this.props.likes} likes</Text>
                </CardItem>
                <CardItem>
                    <Text>
                        <Text style={{ fontWeight: '900' }}>mortuz </Text>
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Totam iure delectus mollitia cupiditate veniam! Sit perferendis voluptatibus reiciendis minus est. Ab minus vel odit. A corrupti autem repellat iusto! Sapiente.
                    </Text>
                </CardItem>
            </Card>
        );
    }
}

export default CardComponent;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
});