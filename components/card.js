import React from 'react'
import { ImageBackground, Text } from 'react-native'
import styled from 'styled-components'
import { LinearGradient } from 'expo-linear-gradient';
import { BlurView } from 'expo-blur';
import { useFonts } from 'expo-font';
const Card = (props) => {
    const { width, authorDesc, src, authorName } = props
    let [fontsLoaded] = useFonts({
        'Gilroy-Semi': require('../assets/fonts/Gilroy-SemiBold.ttf'),
        'Gilroy-Bold': require('../assets/fonts/Gilroy-ExtraBold.otf'),
    })
    if (!fontsLoaded) return null
    else return (
        <Container style={{ width: width || "100%", }}>
            {/* <Image source={src} style={{ resizeMode: 'cover' }} /> */}
            <ImageBackground style={{
                width: "100%",
                height: authorDesc ? "150%" : "100%",
                backgroundColor: '#000',
                padding: 0,
                paddingVertical: 0,
                position: 'absolute',
                bottom: 0,
            }}
                source={src}
                imageStyle={{
                    resizeMode: authorDesc ? "contain" : "cover",
                }} blurRadius={authorDesc ? 0 : 4}>
                {/* <Shadow /> */}
                {/* {!authorDesc && <BlurView intensity={300} style={{ width: "100%", height: "100%" }}></BlurView>} */}
                <LinearGradient
                    // Button Linear Gradient
                    colors={["rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.1)", "rgba(0, 0, 0, 0.9)"]} style={{ width: "100%", height: "100%", }}>
                </LinearGradient>
                <AuthorWrapper>
                    <AuthorName style={{ fontFamily: 'Gilroy-Bold' }}>
                        {authorName}
                    </AuthorName>
                    {
                        authorDesc
                            ? <Desc style={{ fontFamily: 'Gilroy-Semi' }}>{authorDesc}</Desc>
                            : null
                    }
                </AuthorWrapper>
            </ImageBackground>
        </Container>
    )
}
const Container = styled.View`
    width: 100%;
    height: 350px;
    border-radius: 14px;
    margin: 20px 0;
    overflow: hidden;
    position: relative;
`
const Image = styled.Image`
    width: 100%;
    height: 100%;
`

const AuthorWrapper = styled.View`
    position: absolute;
    padding: 5px 20px;
    bottom: 10;
    z-index: 1;
`

// const Image = styled.Image`

// `

const Shadow = styled.View`
    height: 100%;
    width: 100%;
    /* background-color: #000; */
    background: linear-gradient(to top, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.1))
`
const AuthorName = styled.Text`
    color: #fff;
    font-weight: 700;
    font-size: 20px;
`
const Desc = styled.Text`
    color: #fff;
    font-weight: 600;
    margin-top: 2px;
`
export default Card;