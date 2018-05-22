import * as React from 'react'
import styled from 'styled-components/native'
import { ViewProperties } from 'react-native'

export const Container = styled.View`
	height: 100%;
	padding-top: 1px;
	border-color: red;
	border-width: 1;
	border-style: solid;
`

export interface BarProps extends ViewProperties {
	percent: number
	color: string
}

export const ValueBar = styled.View`
	height: 100%;
	flex-direction: row;
	background-color: ${(props: BarProps) => props.color};
	width: ${(props: BarProps) => props.percent * 100}%;
`
