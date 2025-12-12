# Lemon CSS

1.  Download the `lemon.zip` file from the `public` folder.
2.  Unzip the file, which will create a `lemon` folder.
3.  Move the `lemon` folder into your project's `public` directory.
4.  You can then import `Lemon` and use it for styling your components.

Here is an example of how to use it in a React component:

## For React

```tsx
import { Lemon } from "@/public/lemon";

export function LemonCard() {
  return (
    <div style={{...Lemon.display("flex"), ...Lemon.justifyContent("center")}}>
      <div style={{...Lemon.width(256), ...Lemon.height(480), ...Lemon.background("#ccc"), ...Lemon.borderRadius(22), ...Lemon.borderWidth(4), ...Lemon.overflow("hidden")}}>
        <div style={{...Lemon.width("100%"), ...Lemon.height("100%"), ...Lemon.background("#afafaf"), ...Lemon.padding(16)}}>
          <div style={{...Lemon.width("100%"), ...Lemon.height(96), ...Lemon.background("royal-purple"), ...Lemon.borderRadius(20), ...Lemon.display("flex"), ...Lemon.justifyContent("center"), ...Lemon.color("white"), ...Lemon.fontWeight("bold"), ...Lemon.fontSize(18)}}>
            Hello Lemon!
          </div>
          <div style={{...Lemon.width("100%"), ...Lemon.height(40), ...Lemon.background("#ccc"), ...Lemon.borderRadius(15)}}></div>
          <div style={{...Lemon.width("75%"), ...Lemon.height(40), ...Lemon.background("#ccc"), ...Lemon.borderRadius(15)}}></div>
          <div style={{...Lemon.display("flex"), ...Lemon.gap(16)}}>
            <div style={{...Lemon.width("50%"), ...Lemon.height(64), ...Lemon.background("#ccc"), ...Lemon.borderRadius(20)}}></div>
            <div style={{...Lemon.width("50%"), ...Lemon.height(64), ...Lemon.background("#ccc"), ...Lemon.borderRadius(20)}}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
```

## For React Native

```tsx
import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Lemon } from '@/public/lemon'; // Assuming Lemon is compatible with React Native

export function LemonCard() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <View style={styles.innerCard}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Hello Lemon!</Text>
          </View>
          <View style={styles.line1} />
          <View style={styles.line2} />
          <View style={styles.bottomContainer}>
            <View style={styles.bottomBox} />
            <View style={styles.bottomBox} />
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...Lemon.display("flex"),
    ...Lemon.justifyContent("center"),
  },
  card: {
    ...Lemon.width(256),
    ...Lemon.height(480),
    ...Lemon.background("#ccc"),
    ...Lemon.borderRadius(22),
    ...Lemon.borderWidth(4),
    ...Lemon.overflow("hidden"),
  },
  innerCard: {
    ...Lemon.width("100%"),
    ...Lemon.height("100%"),
    ...Lemon.background("#afafaf"),
    ...Lemon.padding(16),
  },
  header: {
    ...Lemon.width("100%"),
    ...Lemon.height(96),
    ...Lemon.background("royal-purple"),
    ...Lemon.borderRadius(20),
    ...Lemon.display("flex"),
    ...Lemon.justifyContent("center"),
    ...Lemon.alignItems("center"),
  },
  headerText: {
    ...Lemon.color("white"),
    ...Lemon.fontWeight("bold"),
    ...Lemon.fontSize(18),
  },
  line1: {
    ...Lemon.width("100%"),
    ...Lemon.height(40),
    ...Lemon.background("#ccc"),
    ...Lemon.borderRadius(15),
    marginTop: 16,
  },
  line2: {
    ...Lemon.width("75%"),
    ...Lemon.height(40),
    ...Lemon.background("#ccc"),
    ...Lemon.borderRadius(15),
    marginTop: 16,
  },
  bottomContainer: {
    ...Lemon.display("flex"),
    flexDirection: "row",
    ...Lemon.gap(16),
    marginTop: 16,
  },
  bottomBox: {
    flex: 1,
    ...Lemon.height(64),
    ...Lemon.background("#ccc"),
    ...Lemon.borderRadius(20),
  },
});
```

## License

Licensed under the [MIT license](https://github.com/heroui-inc/next-app-template/blob/main/LICENSE).
