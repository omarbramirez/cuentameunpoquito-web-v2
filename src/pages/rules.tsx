import React from 'react';

import { Content } from '../content/Content';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const Rules = () => (
  <Main meta={<Meta title="Concurso de Microcuento" description="Bases" />}>
    <Content>
      <h2>1. Tema</h2>
      <p>
        Los participantes podrán desarrollar sus microcuentos en torno a la
        temática de la ciudad de Quito, su cultura y sus formas de vida, en las
        siguientes categorías:
      </p>
      <h3>Categorías por edad:</h3>
      <ul>
        <li>● Infantil: Destinada a participantes menores de 12 años.</li>
        <li>● Juvenil: Dirigida a participantes entre 13 y 18 años.</li>
        <li>● Adultos: Destinada a participantes mayores de 18 años.</li>
      </ul>
      <h3>Otras categorías:</h3>
      <ul>
        <li>
          ● Fortaleza femenina: Microcuentos que destaquen la fuerza,
          resiliencia y protagonismo de personajes femeninos quiteños.
        </li>
        <li>
          ● Nuevas masculinidades: Microcuentos que exploren la sensibilidad,
          emociones y luchas internas de personajes masculinos quiteños.
        </li>
        <li>
          ● Comunidad LGBTQ+: Microcuentos que muestren la cotidianidad,
          experiencias y luchas de la comunidad LGBTQ+ en Quito.
        </li>
        <li>
          ● Grupos diversos: Microcuentos que den voz a las historias, desafíos
          y triunfos de grupos diversos (migrantes, refugiados,
          afrodescendientes, indígenas, personas que viven en la pobreza
          extrema) que habitan la ciudad de Quito.
        </li>
        <li>
          ● Capacidades diferentes: Microcuentos que destaquen los retos que
          enfrentan las personas con capacidades diferentes dentro de la ciudad
          de Quito.
        </li>
      </ul>
      <strong>
        * En estas categorías pueden participar personas de cualquier edad.
      </strong>
      <h2>2. Participantes</h2>
      <p>
        El concurso está abierto a cualquier persona interesada, sin importar la
        edad, nacionalidad o ubicación geográfica, de acuerdo con su categoría,
        siempre que viva o haya nacido en el Distrito Metropolitano de Quito,
        incluidas sus parroquias rurales.
      </p>
      <h2>3. Extensión</h2>
      <p>
        Los microcuentos presentados deberán tener una extensión máxima de 150
        palabras. Se descalificarán aquellos microcuentos que excedan este
        límite.
      </p>
      <h2>4. Envío de microcuentos</h2>
      <p>
        Los participantes deberán enviar sus microcuentos a la dirección de
        correo electrónico: <br />
        <strong>concursocuentameunpoquito@gmail.com </strong> <br />
        con el asunto “Cuéntame un poQuito” y la categoría en la que participa.
        Por ejemplo: <strong>“Cuéntame y poQuito: Infantil” </strong>. Cada
        participante podrá enviar un máximo de 3 microcuentos por categoría. En
        el cuerpo del correo electrónico, el participante deberá incluir su
        nombre completo, cédula de identidad, seudónimo, dirección del
        domicilio, correo electrónico y número de teléfono. Los microcuentos
        deberán enviarse con seudónimo en documento aparte, en formato PDF.
        Asimismo, podrán hacernos llegar sus microcuentos a través del
        formulario de Google: <br />
        <strong>https://n9.cl/formulariocuentameunpoquito</strong>
      </p>
      <h2>5. Plazo de Envío</h2>
      <p>
        El plazo para enviar los microcuentos finaliza el 11 de febrero de 2024
        a las 24h00. No se aceptarán microcuentos enviados después de la fecha.
      </p>
      <h2>6. Requisitos</h2>
      <p>
        Los microcuentos deberán ser originales e inéditos, y no haber sido
        premiados en otros concursos.
      </p>
      <h2>7. Jurado</h2>
      <p>
        El jurado estará compuesto por 3 personas expertas en el ámbito
        literario. Su decisión será inapelable.
      </p>
      <h2>8. Premios</h2>
      <p>Se otorgarán los siguientes premios en cada categoría:</p>
      <ul>
        <li>● Primer Lugar: 300</li>
        <li>● Segundo Lugar: 200</li>
        <li>● Tercer Lugar: 100</li>
      </ul>
      <p>
        Se otorgarán tres menciones por categoría. Las menciones formarán parte
        del libro impreso y digital. Los ganadores y sus menciones cederán los
        derechos para esta publicación en formato impreso y digital y recibirán
        5 ejemplares impresos.
      </p>
      <h2>9. Publicación y Derechos</h2>
      <p>
        Los microcuentos ganadores serán publicados en formato impreso y en
        formato digital eBook y PDF.
      </p>
      <h2>10. Resultados</h2>
      <p>
        Los resultados se darán a conocer el 7 de marzo de 2024 a través de la
        página web del concurso y sus redes sociales. Se notificará, además, a
        los ganadores por correo electrónico y llamada telefónica.
      </p>
      <h2>11. Contacto</h2>
      <p>
        Para cualquier consulta relacionada con el concurso, puedes escribir a
        <br />
        <strong>consultas.cuentameunpoquito@gmail.com</strong>
      </p>
      <h2>12. Aceptación de Bases:</h2>
      <p>
        Las y los participantes se comprometen a presentar un manuscrito inédito
        y de autoría propia para esta convocatoria. En caso de encontrarse
        plagio, el participante aceptará las medidas a tomar por la organización
        como la descalificación automática u otro tipo de penalización según lo
        indique la ley.
      </p>
      <h2>13. Términos y restricciones</h2>
      <p>
        Los participantes podrán aplicar a esta convocatoria con un máximo de 3
        textos en cualquier categoría. <br />
        <strong>Cada participante solo podrá ganar en una categoría.</strong>
      </p>
    </Content>
  </Main>
);

export default Rules;
