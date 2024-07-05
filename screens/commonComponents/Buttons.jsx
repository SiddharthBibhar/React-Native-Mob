import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Platform,
  TouchableNativeFeedback,
} from 'react-native';

const Separator = () => <View style={styles.separator} />;

const DefaultButton = () => (
  <View>
    <Text style={styles.title}>Default Button</Text>
    <Button title="Press Default Button" color="#FF6347" onPress={() => Alert.alert('Default Button Pressed')} />
  </View>
);

const OpacityButton = () => (
  <View>
    <Text style={styles.title}>TouchableOpacity Button</Text>
    <TouchableOpacity style={[styles.button, { backgroundColor: '#FFD700' }]} onPress={() => Alert.alert('TouchableOpacity Button Pressed')}>
      <Text style={[styles.buttonText, { color: '#000000' }]}>Opacity Button</Text>
    </TouchableOpacity>
  </View>
);

const HighlightButton = () => (
  <View>
    <Text style={styles.title}>TouchableHighlight Button</Text>
    <TouchableHighlight
      style={[styles.button, { backgroundColor: '#1E90FF' }]}
      underlayColor="#00008B"
      onPress={() => Alert.alert('TouchableHighlight Button Pressed')}
    >
      <Text style={styles.buttonText}>Highlight Button</Text>
    </TouchableHighlight>
  </View>
);

const NoFeedbackButton = () => (
  <View>
    <Text style={styles.title}>TouchableWithoutFeedback Button</Text>
    <TouchableWithoutFeedback onPress={() => Alert.alert('TouchableWithoutFeedback Button Pressed')}>
      <View style={[styles.button, { backgroundColor: '#32CD32' }]}>
        <Text style={styles.buttonText}>No Feedback Button</Text>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

const NativeFeedbackButton = () => (
  <View>
    <Text style={styles.title}>TouchableNativeFeedback Button (Android only)</Text>
    {Platform.OS === 'android' ? (
      <TouchableNativeFeedback
        onPress={() => Alert.alert('TouchableNativeFeedback Button Pressed')}
        background={TouchableNativeFeedback.SelectableBackground()}
      >
        <View style={[styles.button, { backgroundColor: '#8A2BE2' }]}>
          <Text style={styles.buttonText}>Native Feedback Button</Text>
        </View>
      </TouchableNativeFeedback>
    ) : (
      <View style={[styles.button, { backgroundColor: '#8A2BE2' }]}>
        <Text style={styles.buttonText}>Native Feedback Button (Android only)</Text>
      </View>
    )}
  </View>
);

const CustomStyledButton = ({ title, onPress, backgroundColor, textColor }) => (
  <TouchableOpacity
    style={[styles.button, { backgroundColor: backgroundColor || 'blue' }]}
    onPress={onPress}
  >
    <Text style={[styles.buttonText, { color: textColor || 'white' }]}>{title}</Text>
  </TouchableOpacity>
);

const Buttons = () => (
  <View style={styles.container}>
    <DefaultButton />
    <Separator />
    <OpacityButton />
    <Separator />
    <HighlightButton />
    <Separator />
    <NoFeedbackButton />
    <Separator />
    <NativeFeedbackButton />
    <Separator />
    <CustomStyledButton
      title="Custom Styled Button"
      backgroundColor="yellow"
      textColor="black"
      onPress={() => Alert.alert('Custom Styled Button Pressed')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 50,
    backgroundColor: '#EDF4F2',
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  button: {
    padding: 10,
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 5,
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  direction: {
    backgroundColor: "#31473A",
  },
});

export default Buttons;
