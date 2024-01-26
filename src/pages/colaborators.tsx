import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Colaborators = () => (
  <Main meta={<Meta title="Colaboradores" description="Colaboradores" />}>
    <Content>
      <h2>Talleristas</h2>
      <ul>
        <li>
          <strong>Sandra Araya:</strong> Editora y escritora.
        </li>
        <li>
          <strong>Sandra de la Torre Guarderas:</strong> Poeta, editora,
          guionista y realizadora audiovisual.
        </li>
        <li>
          <strong>Diego Chamorro:</strong> Director de la Escuela de Pensamiento
          Crítico “Las babas del diablo”.
        </li>
        <li>
          <strong>Marcela Ribadeneira:</strong> Escritora, periodista, crítica
          de cine y artista visual.
        </li>
        <li>
          <strong>Pamela Ríos:</strong> Librera independiente.
        </li>
        <li>
          <strong>Esteban Mayorga:</strong> Investigador y docente.
        </li>
        <li>
          <strong>Marialuz Albuja Bayas:</strong> Escritora.
        </li>
        <li>
          <strong>Mattias Tello:</strong> Docente, escritor y editor.
        </li>
      </ul>
    </Content>
  </Main>
);

export default Colaborators;
