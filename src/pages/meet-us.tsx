import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const MeetUs = () => (
  <Main meta={<Meta title="Conócenos" description="Objetivos" />}>
    <Content>
      <h2>Objetivo general:</h2>
      <p>
        Promover la lectura y escritura en y sobre la ciudad, así como la
        valoración y apropiación de la literatura quiteña y el espacio público
        en el Distrito Metropolitano de Quito.
      </p>
      <h2>Objetivos específicos:</h2>
      <ul>
        <li>
          ● Motivar la escritura de narrativa breve en los estudiantes y
          pobladores del Distrito Metropolitano de Quito.
        </li>
        <li>
          ● Revitalizar la tradición de escritura de narrativa breve en el
          Distrito Metropolitano de Quito mediante el diálogo de grupos
          intergeneracionales, diversidades sexo-genéricas y subculturas
          urbanas.
        </li>
        <li>
          ● Difundir la producción literaria de narrativa breve en los
          pobladores del Distrito Metropolitano de Quito.
        </li>
      </ul>
    </Content>
  </Main>
);

export default MeetUs;
