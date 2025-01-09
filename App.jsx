/* eslint-disable*/
import { useState } from 'react'
import { Pressable, Text } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { KeyboardProvider } from 'react-native-keyboard-controller'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import ReduxProvider from './infrastructure/redux/components/ReduxProvider'
import TouchOutside from './src/infrastructure/touchOutside/components'
import { touchOutsideHooks } from './src/infrastructure/touchOutside/repository/hooks'

const GHRView = () => {
  const detectorProps = touchOutsideHooks.useDetectorProps()
  return <GestureHandlerRootView {...detectorProps} />
}

export default function App() {
  const [innerCounter, setInnerCounter] = useState(0)
  const [outerCounter, setOuterCounter] = useState(0)
  return (
    <ReduxProvider>
      <KeyboardProvider>
        <SafeAreaProvider>
          <TouchOutside.Manager>
            <GHRView>
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
                  ref={(ref) => {
                    ref.measure()
                  }}
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
            </GHRView>
          </TouchOutside.Manager>
        </SafeAreaProvider>
      </KeyboardProvider>
    </ReduxProvider>
  )
}
