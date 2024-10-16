import styled from 'styled-components'

import { Props } from '.';

export const P = styled.p<Props>`
  font-size: ${(props) => (props.FontSize ? props.FontSize + 'px' : '14px')};
  color: ${(props) => (props.tipo === 'principal' ? '#282a35' : '#949494')};
  line=height: 22px;
`
