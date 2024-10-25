import { Provider } from 'react-redux'
import { store } from '../repository'

export default function ReduxProvider({ children, ...rest }) {
  return (
    <Provider {...rest} store={store}>
      {children}
    </Provider>
  )
}
