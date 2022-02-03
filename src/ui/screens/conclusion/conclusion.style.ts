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

    font-size: 1.3rem;
    font-weight: 600;
    color: var(--white);
    
    @media(max-width: 720px) {
      width: 80%;
      font-size: 1rem;
    }
    @media(max-width: 425px) {
      width: 95%;
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
