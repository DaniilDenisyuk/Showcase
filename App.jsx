/* eslint-disable*/
import { useState } from 'react'
import { Pressable, SafeAreaView, ScrollView, Text } from 'react-native'

function App() {
  const [innerCounter, setInnerCounter] = useState(0)
  const [outerCounter, setOuterCounter] = useState(0)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView style={{ flex: 1, backgroundColor: 'green' }}>
        <Pressable
          style={{
            flex: 1,
            backgroundColor: 'red',
            height: 200
          }}
          onStartShouldSetResponderCapture={() => {
            setOuterCounter(outerCounter + 1)
            return false
          }}
        >
          <Text>Outer: {outerCounter}</Text>
          <Pressable
            style={{
              backgroundColor: 'white',
              height: 100,
              marginTop: 10
            }}
            onPress={() => {
              setInnerCounter(innerCounter + 1)
            }}
          >
            <Text>Inner: {innerCounter}</Text>
          </Pressable>
        </Pressable>
      </ScrollView>
    </SafeAreaView>
  )
}

export default App
