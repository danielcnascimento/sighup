import styled from "styled-components";

export const SighUpStepperContainer = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  
  background: var(--white);
  
  form {
    width: 80%;
    height: inherit;
    
    display: inherit;
    flex-direction: inherit;
    justify-content: space-around;
    align-items: center;
  }

  p {
    color: var(--grey-text);
    margin: 1.5rem 0;
  }
`
