import styled from 'styled-components/native'
import MagbarRaw from '../Magbar'

export const ItemRow = styled.View`
	flex-direction: row;
	margin-right: 4;
	margin-left: 4;
	margin-top: 2;
	align-items: center;
	height: 35px;
`

export const ItemContent = styled.View`
	flex: 2;
	flex-direction: row;
	justify-content: space-between;
	border-color: green;
	border-width: 1;
	border-style: solid;
`

export const MagbarContainer = styled.View`
	flex: 1;
	border-color: yellow;
	border-width: 1;
	border-style: solid;
`

export const Magbar = styled(MagbarRaw)``

export const ItemTitle = styled.Text`
	font-size: 18;
	color: #ccc;
`
