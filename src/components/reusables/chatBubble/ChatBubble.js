import { Pressable, StyleSheet, Text, View } from 'react-native'
import React, { memo } from 'react'
import LinearGradient from 'react-native-linear-gradient'
import { COLOR, TEXT_STYLE, commonStyles, hp, wp } from '../../../data/StyleGuides'
import Image from '../image'
import { IMAGES } from '../../../assets/images'
import Label from '../label'
import { SVG } from '../../../assets/svg'

const ChatBubble = (props) => {
    const { item } = props
    return (
        <LinearGradient
            colors={[COLOR.blue, COLOR.pink]}
            locations={[0.45, 1]}
            style={styles.linearGradient}
            start={{ x: 0, y: 7 }}
            end={{ x: 1.2, y: 0.5 }}>


            <Pressable onPress={() => props.onpress()} style={styles.innerContainer}>
                <Image src={item.image} style={styles.imageView} contain />
                <Label style={styles.userName}>{item.name}</Label>
                <SVG.ForwardActive />
            </Pressable>

        </LinearGradient>
    )
}

export default memo(ChatBubble)

const styles = StyleSheet.create({
    linearGradient: {
        marginTop: hp(2),
        paddingHorizontal: wp(3),
       paddingVertical:hp(1.5),
        borderRadius: hp(2),
        marginHorizontal: wp(6)
    },
    userName: {
        marginRight: "auto",
        marginLeft: wp(5),
        ...TEXT_STYLE.bigTextBold
    },
    innerContainer:{
        ...commonStyles.justifyView,
    }

})