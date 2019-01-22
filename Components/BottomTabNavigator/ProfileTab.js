import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";

import {
  Icon,
  Header,
  Left,
  Right,
  Body,
  Container,
  Content,
  Button
} from "native-base";
import EntypoIcon from "react-native-vector-icons/Entypo";
import CardComponent from '../CardCompoenent';
var images = [
  require('../../assets/feed_images/1.jpg'),
  require('../../assets/feed_images/2.jpg'),
  require('../../assets/feed_images/3.png'),
  require('../../assets/feed_images/4.jpg'),
  require('../../assets/feed_images/5.jpg'),
  require('../../assets/feed_images/6.jpg'),
  require('../../assets/feed_images/7.jpg'),
  require('../../assets/feed_images/8.png'),
  require('../../assets/feed_images/9.jpg'),
  require('../../assets/feed_images/10.jpg'),
  require('../../assets/feed_images/11.jpg'),
  require('../../assets/feed_images/12.jpg'),
];

var { width, height } = Dimensions.get('window');

class ProfileTab extends Component {
  static navigationOptions = {
    tabBarIcon: ({ tintColor }) => (
      <Icon name="person" style={{ color: tintColor }} />
    )
  };

  constructor(props) {
    super(props);
    this.state = {
      activeIndex: 0
    };
  }

  segmentClicked = index => {
    this.setState({
      activeIndex: index
    });
  };

  renderSectionOne = () => {
    return images.map((image, index) => {
      return (
        <View key={index} style={[{width: (width) / 3}, {height: (width) / 3},
          index % 3 !== 0 ? {paddingLeft: 2} : {paddingLeft: 0},
          {marginBottom: 2},
        ]}>
          <Image source={image}
            style={{flex: 1, width: undefined, height: undefined}} />
        </View>
      )
    })
  }

  renderSection = () => {
    if (this.state.activeIndex == 0) {
      return (
        <View style={{ flexDirection: 'row', flexWrap: 'wrap'}}>
          {this.renderSectionOne()}
        </View>
      );
    } else if (this.state.activeIndex == 1) {
      return (
        <View>
          <CardComponent imageSource="1" likes="125" />
          <CardComponent imageSource="3" likes="19" />
          <CardComponent imageSource="2" likes="195" />
          <CardComponent imageSource="1" likes="256" />
        </View>
      );
    } else if (this.state.activeIndex == 2) {
      return (
        <View>
          <Text>This is the third section</Text>
        </View>
      );
    } else {
      return (
        <View>
          <Text>This is the fourth section</Text>
        </View>
      );
    }
  };

  render() {
    return (
      <Container>
        <Header style={[styles.androidHeader]}>
          <Left>
            <Icon name="md-person" style={{ paddingLeft: 10 }} />
          </Left>
          <Body style={[styles.androidHeaderTitle]}>
            <Text style={{ fontSize: 18 }}>imortuz</Text>
          </Body>
          <Right>
            <EntypoIcon
              name="back-in-time"
              style={{ paddingRight: 10, fontSize: 32 }}
            />
          </Right>
        </Header>
        <Content>
          <View style={{ paddingTop: 10 }}>
            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, alignItems: "center" }}>
                <Image
                  source={require("../../assets/me.png")}
                  style={{ width: 75, height: 75, borderRadius: 37.5 }}
                />
              </View>
              <View style={{ flex: 3 }}>
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-around"
                  }}
                >
                  <View style={{ alignItems: "center" }}>
                    <Text>20</Text>
                    <Text style={{ fontSize: 10, color: "grey" }}>posts</Text>
                  </View>

                  <View style={{ alignItems: "center" }}>
                    <Text>2060</Text>
                    <Text style={{ fontSize: 10, color: "grey" }}>
                      followers
                    </Text>
                  </View>

                  <View style={{ alignItems: "center" }}>
                    <Text>0</Text>
                    <Text style={{ fontSize: 10, color: "grey" }}>
                      following
                    </Text>
                  </View>
                </View>

                <View style={{ flexDirection: "row", paddingTop: 10 }}>
                  <Button
                    bordered
                    dark
                    style={{ flex: 3, height: 30, justifyContent: "center" }}
                  >
                    <Text>Edit Profile</Text>
                  </Button>

                  <Button
                    bordered
                    dark
                    style={{
                      flex: 1,
                      height: 30,
                      marginRight: 10,
                      marginLeft: 5,
                      justifyContent: "center"
                    }}
                  >
                    <Icon name="ios-settings" />
                  </Button>
                </View>
              </View>
            </View>

            <View style={{ padding: 10 }}>
              <Text style={{ fontWeight: "bold" }}>Mortuz Alam</Text>
              <Text>Developer | Dreamer | Learner</Text>
              <Text>www.mortuz.me</Text>
            </View>
          </View>
          <View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-around",
                borderTopWidth: 1,
                borderTopColor: "#eae5e5"
              }}
            >
              <Button
                transparent
                onPress={() => this.segmentClicked(0)}
                active={this.state.activeIndex == 0}
              >
                <Icon
                  name="md-apps"
                  style={[this.state.activeIndex == 0 ? {} : { color: "grey" }]}
                />
              </Button>

              <Button
                transparent
                onPress={() => this.segmentClicked(1)}
                active={this.state.activeIndex == 1}
              >
                <Icon
                  name="ios-list"
                  style={[this.state.activeIndex == 1 ? {} : { color: "grey" }]}
                />
              </Button>

              <Button
                transparent
                onPress={() => this.segmentClicked(2)}
                active={this.state.activeIndex == 2}
              >
                <Icon
                  name="ios-people"
                  style={[this.state.activeIndex == 2 ? {} : { color: "grey" }]}
                />
              </Button>

              <Button
                transparent
                onPress={() => this.segmentClicked(3)}
                active={this.state.activeIndex == 3}
              >
                <Icon
                  name="md-bookmark"
                  style={[this.state.activeIndex == 3 ? {} : { color: "grey" }]}
                />
              </Button>
            </View>

            {this.renderSection()}

          </View>
        </Content>
      </Container>
    );
  }
}

export default ProfileTab;

const styles = StyleSheet.create({
  androidHeader: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
        backgroundColor: "white"
      }
    })
  },
  androidHeaderTitle: {
    ...Platform.select({
      android: {
        alignItems: "flex-end",
        fontWeight: "900"
      }
    })
  }
});
