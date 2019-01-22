import React, { Component } from "react";
import { View, Text, StyleSheet, ScrollView, Platform, StatusBar } from "react-native";

import CardComponent from '../CardCompoenent';

import { Icon, Container, Content, Thumbnail, Header, Body, Left, Right, Title } from 'native-base';
class HomeTab extends Component {

    static navigationOptions = {
        tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-home" style={{color: tintColor}} /> 
        )
    }

    render() {
        return (
            <Container style={styles.container}>
                <Header style={[styles.androidHeader]}>
                    <Left><Icon name="ios-camera" style={{ paddingLeft: 10 }}></Icon></Left>
                    <Body style={[styles.androidHeaderTitle]}><Text style={{fontSize:18}}>Instagram</Text></Body>
                    <Right><Icon name="ios-send" style={{ paddingRight: 10 }}></Icon></Right>
                </Header>
                <Content>
                    <View style={{ height: 100}}>
                        <View style={{ flex: 1, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 7 }}>
                            <Text style={{fontWeight: 'bold'}}>Stories</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center'}}>
                                <Icon name="md-play" style={{ fontSize: 14 }} />
                                <Text style={{fontWeight: 'bold'}}> Watch all</Text>
                            </View>
                        </View>
                        <View style={{ flex: 3}}>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}
                                contentContainerStyle={{
                                    alignItems: 'center',
                                    paddingStart: 5,
                                    paddingEnd: 5
                                }}>
                                
                                <Thumbnail 
                                    style={{ marginHorizontal: 5, borderColor: 'pink',
                                        borderWidth: 2}}
                                    source={require('../../assets/stories/26.jpg')} />

                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5, borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                    source={require('../../assets/stories/2.jpg')} />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5, borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                    source={require('../../assets/stories/25.jpg')} />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5, borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                    source={require('../../assets/stories/44.jpg')} />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5, borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                    source={require('../../assets/stories/46.jpg')} />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5, borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                    source={require('../../assets/stories/55.jpg')} />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5, borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                    source={require('../../assets/stories/66.jpg')} />
                                <Thumbnail
                                    style={{
                                        marginHorizontal: 5, borderColor: 'pink',
                                        borderWidth: 2
                                    }}
                                    source={require('../../assets/stories/10.jpg')} />
                                
                            </ScrollView>
                        </View>
                    </View>
                    <CardComponent imageSource="1" likes="101"/>
                    <CardComponent imageSource="2" likes="487"/>
                    <CardComponent imageSource="3" likes="125"/>
                </Content>
            </Container>
        );
    }
}

export default HomeTab;

const styles = StyleSheet.create({
    androidHeader: {
        ...Platform.select({
            android: {
                marginTop: StatusBar.currentHeight,
                backgroundColor: 'white'
            }
        })
    },
    androidHeaderTitle: {
        ...Platform.select({
            android: {
                alignItems: 'flex-end',
                fontWeight: '900'
            }
        })

    }
});