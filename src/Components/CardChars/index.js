import React from "react";
import { View, Image, Text, TouchableOpacity } from 'react-native';

import { useNavigation } from "@react-navigation/core";

import styles from './style'
import { Dimensions } from 'react-native';

export default function CardChars ({
    image,
    name,
    gender,
    origin,
    location,
    status,
    species
}) {
    const navigation = useNavigation();

    const { width } = Dimensions.get('window');
    const cardWidth = width;
    let statusColor;
    if (status === "Alive") {
        statusColor = "limegreen";
    } else if (status === "Dead") {
        statusColor = "red";
    } else {
        statusColor = "gray";
    }


    let genderColor;
    if (gender === "Male") {
        genderColor = "dodgerblue";
    } else if (gender === "Female") {
        genderColor = "hotpink";
    } else {
        genderColor = "gray";
    }

    return (
        <TouchableOpacity
            style={styles.containerCards}
            activeOpacity={0.85}
            onPress={() =>
                navigation.navigate("Details", {
                    image,
                    name,
                    gender,
                    origin,
                    location,
                    status,
                    species
                })
            }
        >
            <Image
                source={{ uri: image }}
                style={styles.images}
                resizeMode="cover"
                accessibilityLabel={`Imagem de ${name}`}
            />
            <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
                {name}
            </Text>
            <Text style={styles.status}>
                Status na série:{" "}
                <Text
                    style={{
                        color: statusColor,
                        fontWeight: "bold",
                        fontSize: 18,
                        textShadowColor: statusColor,
                        textShadowOffset: { width: 0, height: 0 },
                        textShadowRadius: 6,
                    }}
                >
                    {status}
                </Text>
            </Text>
            <Text style={styles.gender}>
                Gênero:{" "}
                <Text
                    style={{
                        color: genderColor,
                        fontWeight: "bold",
                        fontSize: 18,
                        textShadowColor: genderColor,
                        textShadowOffset: { width: 0, height: 0 },
                        textShadowRadius: 6,
                    }}
                >
                    {gender}
                </Text>
            </Text>
            <Text style={{ color: "#888", marginTop: 6, fontSize: 13 }}>
                Toque para mais detalhes
            </Text>
        </TouchableOpacity>
    );
}