import styled from 'styled-components'

export const TankCircle = styled.div`
  height: 200px;
  width: 200px;
  border-color: ${props => props.borderColor || "red"};
  border-width: 2px;
  border-style: solid;
`

export const TankWaterValue = styled.p`
  color: grey;  
`