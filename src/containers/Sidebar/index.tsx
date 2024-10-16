import React from 'react';
import Titulo from '../../components/Titulo'
import Avatar from '../../components/Avatar';
import Paragrafo from '../../components/Paragrafo';

import { BotaoTema, Descricao, SideBarContainer } from './styles';

const Sidebar = () => (
  <aside style={{ width: '150px' }}>
    <SideBarContainer>
      <Avatar />
      <Titulo fontSize={20}>Lucas Ezequiel</Titulo>
      <Paragrafo tipo='secundario' FontSize={16}>Lucaseu5</Paragrafo>
      <Descricao tipo='principal' FontSize={12}>
        Programador Full-stack
      </Descricao>
      <BotaoTema>Trocar tema</BotaoTema>
    </SideBarContainer>

  </aside>
)

export default Sidebar
