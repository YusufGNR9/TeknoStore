import React from "react";
import { View, Text, Image } from "react-native";
import styles from "./ToolCard.style";

const ToolCard = ({tools}) => {
    return (
        <View style={styles.container}>
            <View>
                <Image 
                    style={styles.image}
                    source={{uri: tools.imgURL}}
                />
            </View>
            <View style={styles.info}>
                <Text>{tools.title}</Text>
                <Text>{tools.price}</Text>
                {tools.inStock == false ? <Text style={styles.outOfStock}>STOKTA YOK</Text> : null}
            </View>
        </View>
    );
};


export default ToolCard;