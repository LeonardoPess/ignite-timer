import styled from 'styled-components'

export const ContdownContainer = styled.div`
  display: flex;
  gap: 1rem;

  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};

  span {
    padding: 2rem 1rem;
    background: ${(props) => props.theme['gray-700']};
    border-radius: 8px;
  }
`

export const Separator = styled.div`
  width: 4rem;

  display: flex;
  justify-content: center;
  padding: 2rem 0;
  overflow: hidden;

  color: ${(props) => props.theme['green-500']};
`