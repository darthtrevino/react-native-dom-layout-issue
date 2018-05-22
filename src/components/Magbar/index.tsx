import * as React from 'react'
import { StyleProp, ViewStyle } from 'react-native'
import { Container, ValueBar } from './styled'

export interface MagbarSliceElement {
	color: string
	percent: number
}

export interface MagbarProps {
	percent: number
	style?: StyleProp<ViewStyle>
	components: MagbarSliceElement[]
}

const Magbar: React.SFC<MagbarProps> = ({ percent, style, components }) => (
	<Container style={style}>
		<ValueBar percent={percent} color="transparent">
			{components.map((c, index) => (
				<ValueBar key={index} percent={c.percent} color={c.color} />
			))}
		</ValueBar>
	</Container>
)

export default Magbar
