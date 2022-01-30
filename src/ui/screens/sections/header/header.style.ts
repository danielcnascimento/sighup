import styled from 'styled-components'

export const Header = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;

  background: var(--white);
  
  border-radius: inherit;

  section {
    height: 70px;

    display: inherit;
    justify-content: space-between;
    align-items: center;

    padding: 0 1rem;

    color: var(--grey-text);

    p span{
      font-weight: 600;
      color: var(--primary);
    }
  }
`
