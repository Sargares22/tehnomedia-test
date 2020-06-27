import React from 'react'
import styled from 'styled-components';

const Wrapper = styled.div`
	width: 101px;
	height: 101px;
	display: block;
	overflow: hidden;
	background: none;
	margin: 0 auto;
`

export const Loader = () => {
	return (
		<Wrapper>
			<div className="spinner">
				<div></div>
				<div></div>
				<div><div></div></div>
				<div><div></div></div>
			</div>
		</Wrapper>
	)
}