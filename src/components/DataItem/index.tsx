import * as React from 'react'
import { ItemRow, ItemContent, MagbarContainer, Magbar } from './styled'
import * as _ from 'lodash'
import styled from 'styled-components/native'

const ItemTitle = styled.Text`
	font-size: 18;
	color: #ccc;
`

export interface DataItemProps {
	title: string
	magbarPercent: number
	magbarComponents: Array<{ color: string; percent: number }>
}

export default class DataItem extends React.PureComponent<
	DataItemProps
> {
	public render() {
		const {
			title,
			magbarPercent,
			magbarComponents,
		} = this.props
		const truncatedTitle = _.truncate(title, { length: 21 })
		return (
			<ItemRow>
				<ItemContent>
					<ItemTitle>{truncatedTitle}</ItemTitle>
				</ItemContent>
				<MagbarContainer>
					<Magbar percent={magbarPercent} components={magbarComponents} />
				</MagbarContainer>
			</ItemRow>
		)
	}
}