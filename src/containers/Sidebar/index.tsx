import React from 'react';
import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';

import { BotaoTema, Descricao, SideBarContainer } from './styles';

type Props = {
  trocaTema: () => void;
}

const Sidebar = (props: Props) => (
  <aside>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Lucas Ezequiel</Titulo>
      <Paragrafo tipo='secundario' FontSize={16}>Lucaseu5</Paragrafo>
      <Descricao tipo='principal' FontSize={12}>
        Programador Full-stack
      </Descricao>
      <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
    </SideBarContainer>

  </aside>
)

export default Sidebar
