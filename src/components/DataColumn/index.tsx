import * as React from 'react'
import Component from './component'

const dataItems = [
	{
		id: 'dc97bbb6-7b55-56a1-9bec-2040b7f96567',
		name: 'shmingy',
		metrics: {
			m1: 214,
			m2: -232,
		},
		score: 0.012420918219281443,
		scoreComponents: [
			{
				metric: 'm1',
				percent: 1,
			},
			{
				metric: 'm2',
				percent: 0,
			},
		],
	},
	{
		id: 'e23e51ed-d16f-4800-9a31-ed056168b9a2',
		name: 'hepryderpy',
		metrics: {
			m1: 2209,
			m2: -15,
		},
		score: 0.12821405769342387,
		scoreComponents: [
			{
				metric: 'm1',
				percent: 1,
			},
			{
				metric: 'm2',
				percent: 0,
			},
		],
	},
	{
		id: 'ca412294-5641-492f-af5e-c0cae623d148',
		name: 'flimflam',
		metrics: {
			m1: 17229,
			m2: 1,
		},
		score: 1,
		scoreComponents: [
			{
				metric: 'm1',
				percent: 1,
			},
			{
				metric: 'm2',
				percent: 0,
			},
		],
	},
	{
		id: 'bf1be0f9-6a6d-e88c-977e-df90b7e28cf5',
		name: 'flipflop',
		metrics: {
			m1: 14383,
			m2: 3,
		},
		score: 0.8348133960183411,
		scoreComponents: [
			{
				metric: 'm1',
				percent: 1,
			},
			{
				metric: 'm2',
				percent: 0,
			},
		],
	},
	{
		id: '33bf98b9-2b52-401e-9203-88e761aa0446',
		name: 'herkaderk',
		metrics: {
			m1: 1674,
			m2: -22,
		},
		score: 0.09716176214522025,
		scoreComponents: [
			{
				metric: 'm1',
				percent: 1,
			},
			{
				metric: 'm2',
				percent: 0,
			},
		],
	},
	{
		id: '5e569219-e4d9-fee4-d3f3-fabbd139b4fb',
		name: 'schmoodly',
		metrics: {
			m1: 381,
			m2: -77,
		},
		score: 0.022113877764234718,
		scoreComponents: [
			{
				metric: 'm1',
				percent: 1,
			},
			{
				metric: 'm2',
				percent: 0,
			},
		],
	},
	{
		id: '3f224f4e-cb92-c70c-0108-a6ac1ca9603d',
		name: 'flarflar',
		metrics: {
			m1: 9122,
			m2: 5,
		},
		score: 0.529456149515352,
		scoreComponents: [
			{
				metric: 'm1',
				percent: 1,
			},
			{
				metric: 'm2',
				percent: 0,
			},
		],
	},
]

export default () => <Component dataItems={dataItems} />
