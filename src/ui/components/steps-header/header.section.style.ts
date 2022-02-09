import styled from 'styled-components'

export const HeaderSectionStyle = styled.header`
  width: 100%;

  display: flex;
  flex-direction: column;

  background: var(--white);

  border-radius: inherit;
  text-align: center;
  & section {
    height: 65px;

    display: inherit;
    align-items: center;

    flex-direction: row;
    padding: 0 1rem;

    color: var(--grey-text);

    button {
      margin-bottom: 0;
    }

    div {
      justify-content: center;
      flex: 1;

      span {
        font-weight: 600;
        color: var(--primary);
      }
    }
  }
`
