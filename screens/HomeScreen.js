import React, { Component } from "react";
import { ScrollView, SafeAreaView, TouchableOpacity, Animated, Easing, StatusBar, TouchableHighlight, View, Text } from "react-native";
import styled from "styled-components";
import Card from '../components/card'
const Girl = require('../assets/photo_1.png')
const Photo1 = require('../assets/photo_2.png')
const Photo2 = require('../assets/photo_3.png')
import { useFonts } from 'expo-font';
// import ApolloClient from "apollo-boost";
// import gql from "graphql-tag";
// import { Query } from "react-apollo";

// const CardsContainer = styled.View`
//   flex-direction: row;
//   padding-left: 10px;
// `;
// const Container = styled.View`
//   background: #f0f3f5;
//   flex: 1;
//   border-top-right-radius: 10px;
//   border-top-left-radius: 10px;
// `

const HomeScreen = () => {
    let [fontsLoaded] = useFonts({
        'Gilroy-Semi': require('../assets/fonts/Gilroy-SemiBold.ttf'),
        'Gilroy-Bold': require('../assets/fonts/Gilroy-ExtraBold.otf'),
    })
    if (!fontsLoaded) return null

    else return (
        <SafeAreaView style={{ paddingTop: 40, flex: 1 }}>
            <ScrollView>
                <Container>
                    <H1 style={{ fontFamily: 'Gilroy-Bold' }}>
                        Notes
                        </H1>
                    <H2 style={{ fontFamily: 'Gilroy-Semi' }}>Personal messages to you</H2>
                    <Card src={Girl} authorDesc="Tap to review 50+ notes" authorName="Meena, 23" />
                    <DescContainer>
                        <View style={{ width: "53%" }}>
                            <H1 style={{ textAlign: "left", marginTop: 0, fontFamily: 'Gilroy-Bold' }}>Interested in you</H1>
                            <H2 style={{ color: "#9B9B9B", fontSize: 15, textAlign: "left", fontFamily: 'Gilroy-Semi' }} >Premium members can view all their likes at once</H2>
                        </View>
                        <View style={{ width: "40%" }}>
                            <TouchableOpacity><UButton><Text style={{ textAlign: "center", fontWeight: "700", fontSize: 17, fontFamily: 'Gilroy-Bold' }}>Upgrade</Text></UButton></TouchableOpacity>
                        </View>
                    </DescContainer>
                    <CardContainer>
                        <Card src={Photo1} width="47%" authorName="Teena" />
                        <Card src={Photo2} width="50%" authorName="Beena" />
                    </CardContainer>
                </Container>
            </ScrollView>

        </SafeAreaView>
    );
}

const Container = styled.View`
    background-color: #fff;
    flex: 1;
    width: 100%;
    padding: 0 20px;
    height: 100%;
`
const H1 = styled.Text`
    font-weight: 700;
    font-size: 22px;
    color: #000;
    margin-top: 25px;
    text-align: center;
`
const H2 = styled.Text`
    font-weight: 400;
    font-size: 17px;
    color: #000;
    margin-top: 5px;
    text-align: center;
`
const CardContainer = styled.View`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`
const DescContainer = styled.View`
    display: flex;
    justify-content: space-between;
    flex-direction: row;
    align-items: flex-end;
`
const UButton = styled.View`
    width: 100%;
    border-radius: 50;
    color: #000;
    padding: 20px 20px;
    background-color: #FCDF03;
`
HomeScreen.navigationOptions = {
    header: false
}


export default HomeScreen