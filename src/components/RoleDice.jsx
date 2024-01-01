import React from 'react'
import styled from "styled-components";


const RoleDice = ({currentDice,roleDice}) => {
    

  return (
    <DiceContainer>
        <div className="dice" onClick={roleDice}>
            <img src={`/images/dice_${currentDice}.png`} alt="dice" />
        </div>
        <p>Click to roll the dice</p>
    </DiceContainer>
  )
}

export default RoleDice

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;

  .dice {
    cursor: pointer;
  }

  p {
    font-size: 24px;
  }
`;