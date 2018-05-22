import * as React from 'react'
import { StyleProp, ViewStyle, FlatList } from 'react-native'
import { Container } from './styled'
import DataItem from '../DataItem'
import { schemeSet2 as categoricalColors } from 'd3-scale-chromatic'
import autobind from 'autobind-decorator'

export interface DataColumnProps {
	dataItems?: ItemScoreData[]
	style?: StyleProp<ViewStyle>
}

export interface ScoreComponent {
	metric: string
	percent: number
}

export interface ItemScoreData {
	id: string
	name: string
	score: number
	scoreComponents: ScoreComponent[]
	metrics: { [key: string]: number }
}

const extractScoreKey = (item: ItemScoreData) => item.id

export default class DataColumn extends React.PureComponent<DataColumnProps> {
	public render() {
		const { dataItems, style } = this.props
		return (
			<Container style={style}>
				<FlatList
					horizontal={false}
					overScrollMode="never"
					bounces={false}
					showsHorizontalScrollIndicator={false}
					data={dataItems || ([] as any)}
					keyExtractor={extractScoreKey as any}
					renderItem={this.renderItem}
				/>
			</Container>
		)
	}

	@autobind
	private renderItem({ item }: { item: ItemScoreData }) {
		return (
			<DataItem
				title={item.name}
				magbarPercent={item.score}
				magbarComponents={item.scoreComponents.map((sc, index) => ({
					color: categoricalColors[index],
					percent: sc.percent,
				}))}
			/>
		)
	}
}
