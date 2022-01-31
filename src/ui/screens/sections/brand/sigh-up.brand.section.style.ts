import styled from "styled-components";

export const BrandStyle = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;

& p {
  width: 50%;
  
  margin-top: 1.5rem;
  
  text-align: center;
  
  font-size: 2rem;
  font-weight: 600;
  color: var(--white);
}
`