import styled from "styled-components";

export const ConclusionStyle = styled.div`
  width: 100vw;
  height:100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;


  & p {
    width: 50%;

    margin-top: 1.5rem;

    text-align: center;

    font-size: 2rem;
    font-weight: 600;
    color: var(--white);
    
    @media(max-width: 600px) {
      font-size: 1rem;
    }
  }

  & span{
    width:100%;

    display: flex;
    flex-direction: column;
    align-items:center;
    margin: 4.5rem 0;
  }
`
