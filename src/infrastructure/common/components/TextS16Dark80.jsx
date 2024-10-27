import { textThemeMap } from '../repository'
import TextS16 from './TextS16'

export default function TextS16Dark80({ children, ...rest }) {
  return (
    <TextS16 theme={textThemeMap.dark80} {...rest}>
      {children}
    </TextS16>
  )
}
