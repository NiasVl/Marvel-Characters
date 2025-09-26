import React, { useState } from "react";
import { Pressable, Animated } from "react-native";

export default function HoverCard({ children }) {
  const [scale] = useState(new Animated.Value(1));

  const animateScale = (toValue) => {
    Animated.spring(scale, {
      toValue,
      useNativeDriver: true,
      friction: 5,
    }).start();
  };

  return (
    <Pressable
      onHoverIn={() => animateScale(1.05)}   // hover no web
      onHoverOut={() => animateScale(1)}
      onPressIn={() => animateScale(0.95)}   // "click feedback" no mobile
      onPressOut={() => animateScale(1)}
    >
      <Animated.View style={{ transform: [{ scale }] }}>
        {children}
      </Animated.View>
    </Pressable>
  );
}
