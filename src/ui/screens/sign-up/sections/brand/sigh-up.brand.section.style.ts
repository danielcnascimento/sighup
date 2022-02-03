import styled from "styled-components";

export const BrandStyle = styled.div`
height: 100vh;  
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
  
transition: image 200ms;
& p {
  width: 50%;
  
  margin-top: 1.5rem;
  
  text-align: center;
  
  font-size: 2rem;
  font-weight: 600;
  color: var(--white);
}
`
