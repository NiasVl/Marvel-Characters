import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import styles from "./style";

export default function Details({ route }) {
  const navigation = useNavigation();
  const params = route.params || {};

  const getValue = (val, fallback = "unknown") => (val ? val : fallback);


  const displayImage = getValue(params.image, undefined);
  const displayName = getValue(params.name);
  const displayStatus = getValue(params.status);
  const displayGender = getValue(params.gender);
  const displaySpecies = getValue(params.species);
  const displayOrigin = getValue(params.origin?.name);
  const displayLocation = getValue(params.location?.name);


  const colors = {
    status:
      displayStatus === "Alive"
        ? "limegreen"
        : displayStatus === "Dead"
        ? "red"
        : "#aaa",
    gender:
      displayGender === "Male"
        ? "dodgerblue"
        : displayGender === "Female"
        ? "hotpink"
        : "#aaa",
  };

  // Função para renderizar linha de info
  const InfoRow = ({ label, value, color }) => (
    <View style={styles.infoRow}>
      <Text style={styles.label}>
        {label}{" "}
        <Text
          style={[
            styles.value,
            {
              color: value === "unknown" ? "#aaa" : color || "#000",
              textShadowColor: value === "unknown" ? "#aaa" : "#888",
              textShadowOffset: { width: 0, height: 0 },
              textShadowRadius: 8,
            },
          ]}
        >
          {value}
        </Text>
      </Text>
    </View>
  );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View>
        {displayImage ? (
          <Image
            source={{ uri: displayImage }}
            style={[
              styles.image,
              {
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 8,
                elevation: 8,
              },
            ]}
            resizeMode="cover"
          />
        ) : (
          <View
            style={[
              styles.image,
              {
                backgroundColor: "#eee",
                alignItems: "center",
                justifyContent: "center",
                shadowColor: "#000",
                shadowOffset: { width: 0, height: 4 },
                shadowOpacity: 0.4,
                shadowRadius: 8,
                elevation: 8,
              },
            ]}
          >
            <Text style={{ color: "#aaa", textShadowRadius: 8 }}>unknown</Text>
          </View>
        )}

        <Text style={styles.name}>{displayName}</Text>

        <InfoRow label="Status:" value={displayStatus} color={colors.status} />
        <InfoRow label="Gênero:" value={displayGender} color={colors.gender} />
        <InfoRow label="Espécie:" value={displaySpecies} />
        <InfoRow label="Origem:" value={displayOrigin} />
        <InfoRow label="Localização:" value={displayLocation} />

        {/* Botão voltar */}
        <TouchableOpacity
          style={{
            marginTop: 20,
            padding: 12,
            backgroundColor: "#333",
            borderRadius: 8,
            alignItems: "center",
          }}
          onPress={() => navigation.goBack()}
        >
          <Text style={{ color: "#fff", fontWeight: "bold" }}>Voltar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
