import nucleosBig from './logo-nucleos.png'
import neti from '../../assets/images/logos/neti.png'
import niac from '../../assets/images/logos/niac.png'
import nubem from '../../assets/images/logos/nubem.png'
import nucleo_int from '../../assets/images/logos/nucleo_internacional.png'
import nupex from '../../assets/images/logos/nupex.png'
import pip from '../../assets/images/logos/pip.png'
import React from 'react'
import niacSlide1 from './niac/1.png'
import netiSlide1 from './neti/1.png'
import netiSlide2 from './neti/2.png'
import netiSlide3 from './neti/3.png'
import netiSlide4 from './neti/4.png'
import nubemSlide1 from './nubem/1.png'
import nubemSlide2 from './nubem/2.png'
import nubemSlide3 from './nubem/3.png'
import nubemSlide4 from './nubem/4.png'
import pipSlide1 from './pip/1.png'
import pipSlide2 from './pip/2.png'
import pipSlide3 from './pip/3.png'
import pipSlide4 from './pip/4.png'
import niSlide1 from './ni/1.png'
import niSlide2 from './ni/2.png'
import niSlide3 from './ni/3.png'
import niSlide4 from './ni/4.png'

export const pageName = {
  main: 'main',
  neti: 'neti',
  niac: 'niac',
  nubem: 'nubem',
  nucleo: 'nucleo',
  nupex: 'nupex',
  pip: 'pip',
}

export const initialPageView = {
  main: true,
  neti: false,
  niac: false,
  nubem: false,
  nucleo: false,
  nupex: false,
  pip: false,
}

export const subPagesData = {
  main: {
    name: pageName.main,
    logoDOM: <img src={nucleosBig} />,
    textDOM: (
      <>
        <p>
          Confira aqui a lista de Núcleos da Cruzeiro do Sul Virtual,
          <span>
            {'\nseus objetivos e atividades desenvolvidas'.toUpperCase()}
          </span>
        </p>
      </>
    ),
  },
  neti: {
    name: pageName.neti,
    logoDOM: <img src={neti} />,
    textDOM: (
      <>
        <p>
          O Núcleo Empreendedorismo, Trabalhabilidade e Inovação tem como
          objetivo gerar oportunidades de trabalhabilidade e desenvolvimento
          socioeconômico de nossos estudantes, integrando comunidade acadêmica,
          mercado de trabalho e sociedade.
        </p>
      </>
    ),
  },
  niac: {
    name: pageName.niac,
    logoDOM: <img src={niac} />,
    textDOM: (
      <>
        <p>
          O Núcleo de Inovação Acadêmica tem como foco promover e apoiar as
          iniciativas inovadoras nos âmbitos das coordenações de curso, nas
          práticas de ensino-aprendizagem, na gestão dos setores
          técnicos-administrativos e na comunidade externa.
        </p>
      </>
    ),
  },
  nubem: {
    name: pageName.nubem,
    logoDOM: <img src={nubem} />,
    textDOM: (
      <>
        <p>
          O Núcleo de Saúde e Bem-Estar tem por finalidade promover uma melhor
          compreensão dos temas relacionados a saúde, qualidade de vida e
          desenvolvimento das competências socioemocionais, de modo a promover a
          cidadania, a saúde e o bem estar.
        </p>
      </>
    ),
  },
  nucleo: {
    name: pageName.nucleo,
    logoDOM: <img src={nucleo_int} />,
    textDOM: (
      <>
        <p>
          O Núcleo de Internacionalização foi concebido para reunir e organizar
          ações acadêmicas para fomentar as práticas, intercâmbios e convênios
          internacionais por meio de colaboração e acordos com instituições
          estrangeiras.
        </p>
      </>
    ),
  },
  nupex: {
    name: pageName.nupex,
    logoDOM: <img src={nupex} />,
    textDOM: (
      <>
        <p>
          O Núcleo de Práticas Educativas e de Extensão tem caráter
          interdisciplinar e é, pautado sob a perspectiva multidimensional das
          questões humanas, de modo a potencializar a formação global de nosso
          estudante
        </p>
      </>
    ),
  },
  pip: {
    name: pageName.pip,
    logoDOM: <img src={pip} />,
    textDOM: (
      <>
        <p>
          O Núcleo de Práticas Científicas tem como objetivo estimular, por meio
          de projetos específicos, as práticas inovadoras que favoreçam à
          aquisição das competências específicas e transversais necessárias à
          formação dos de nossos alunos.
        </p>
      </>
    ),
  },
}

export const subPageSlidesData = {
  neti: [
    {
      topText: (
        <p>Você sabe a diferença entre Trabalhabilidade e Empregabilidade?</p>
      ),
      image: <img src={netiSlide1} />,
    },
    {
      topText: (
        <>
          <p>Trabalhabilidade</p>
          <p>
            {'Autonomia nos processos, líder inovador. ' +
              'Projetos e Multitarefas, Mudança como a única constante e ' +
              'crescimento exponencial'}
          </p>
        </>
      ),
      image: <img src={netiSlide2} />,
    },
    {
      topText: (
        <>
          <p>Empregabilidade</p>
          <p>
            {'Hierarquia nos processos, chefe, estabilidade na carreira, ' +
              'previsibilidade, cresimento linear'}
          </p>
        </>
      ),
      image: <img src={netiSlide3} />,
    },
    {
      topText: (
        <>
          <p>Empregabilidade é Inovação</p>
          <p>
            {'Trababilidade é inovação, conhecimento e criatividade. ' +
              'Junte-se a nós e vamos revolucionar o mundo do trabalho ' +
              'com o apoio do NETI'}
          </p>
        </>
      ),
      image: <img src={netiSlide4} />,
    },
  ],
  niac: [
    {
      image: <img src={niacSlide1} />,
    },
  ],
  nubem: [
    {
      topText: (
        <p>
          {'7 em cada 10 universitários brasileiros afirman que a pandemia trouxe ' +
            'impacto para a sua saúde mental, segundo levantamento da' +
            'Global Student Survey, da Chegg.org.'}
        </p>
      ),
      image: <img src={nubemSlide1} />,
    },
    {
      topText: (
        <p>
          {'Dados como esse destacam a necessidade de falarmos de saúde, bem-estar, ' +
            'qualidade de vida e desenvilvimento das competências socioemocionais'}
        </p>
      ),
      image: <img src={nubemSlide2} />,
    },
    {
      topText: (
        <p>
          {'Foi pensando nisso que a Cruzeiro do Sul Virtual criou o ' +
            'Núcleo de Saúde e Bem-Estar (NUBEM), para oferecer pesquisas e ações ' +
            'voltadas à saúde e ao bem-estar da comunidade acadêmica e esterna da ' +
            'Cruzeiro do Sul Educacional.'}
        </p>
      ),
      image: <img src={nubemSlide3} />,
    },
    {
      topText: (
        <>
          <p>
            {'Siga nosso Istagram e receba as informações periódicas sobre o Nubem ' +
              'e suas inúmeras atividades.'}
          </p>
          <p>Participe e se cuide!</p>
        </>
      ),
      image: <img src={nubemSlide4} />,
    },
  ],
  nupex: [
    {
      topText: <p></p>,
    },
  ],
  pip: [
    {
      topText: null,
      image: <img src={pipSlide1} />,
    },
    {
      topText: null,
      image: <img src={pipSlide2} />,
    },
    {
      topText: null,
      image: <img src={pipSlide3} />,
    },
    {
      topText: null,
      image: <img src={pipSlide4} />,
    },
  ],
  nucleo: [
    {
      topText: (
        <p>
          São diversos eventos, cursos livres, publicações e tudo o que rola em
          parceria com grandes Universidades pelo mundo afora.
        </p>
      ),
      image: <img src={niSlide1} />,
    },
    {
      topText: (
        <p>
          Para a Organização das Nações Unidas para a Educação, a Ciência e a
          Cultura (Unesco), o conceito de cidadania global deve estar no radar
          das Universidades
        </p>
      ),
      image: <img src={niSlide2} />,
    },
    {
      topText: (
        <p>
          Quer se tornar um profissional multicultural e antenado nos desafios
          do século XXI? Então acompanhe o nosso Núcleo de Internacionalização,
          o NI.
        </p>
      ),
      image: <img src={niSlide3} />,
    },
    {
      topText: (
        <p>
          São diversos eventos, cursos livres, publicações e tudo o que rola em
          parceria com grandes Universidades pelo mundo afora.
        </p>
      ),
      image: <img src={niSlide4} />,
    },
  ],
}
