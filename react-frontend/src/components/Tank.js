import styled from 'styled-components'

export const TankCircle = styled.div`
  height: 200px;
  width: 200px;
  border-color: ${props => props.borderColor || "red"};
  border-width: 2px;
  border-style: solid;
  border-radius: 50%;  
`

export const TankWaterValue = styled.p`
  position: relative; 
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  color: grey;  
`