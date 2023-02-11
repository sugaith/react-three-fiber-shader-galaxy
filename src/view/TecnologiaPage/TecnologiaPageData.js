export const tecnologiaMainPhrase = `A Cruzeiro Do Sul acredita que a tecnologia pode aguçar a 
curiosidade e a autonomia de seus alunos, uma vez quem por meio delas, as informações ficam mais 
acessíveis e o ensino mais dinâmico.`

export const pageNames = {
  main: 'main',
  laboratoriosEstrutura: 'laboratoriosEstrutura',
  servicosTech: 'tecnico',
  plataformas: 'cursosLivres',
}

export const initialPageView = {
  main: true,
  posGraduacao: false,
  tecnico: false,
  cursosLivres: false,
}
export const tecnologiaPageData = [
  {
    name: pageNames.laboratoriosEstrutura,
    label: 'Laboratórios e Estrutura'.toUpperCase(),
    text: `Nossos laboratórios físicos e virtuais simulam ambientes reais de modo que 
    nosso estudante possa executar experimentos em diversas áreas do conhecimento, 
    Além disso, favorecem o engajamento acadêmico em aulas com atividades práticas e 
    experimentais, especialmente, em cursos semipresenciais.`,
    bullets: [
      {
        label: 'Acessar o Vídeo',
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1659115685&entry_id=1_omh1jxqd',
      },
    ],
  },
  {
    name: pageNames.servicosTech,
    label: 'Serviços Tecnológicos'.toUpperCase(),
    text: `Além de nossos ambientes virtuais de aprendizagem, dispomos de inúmeras 
    comodidades tecnológicas para acesso mobile ou desktop.`,
  },
  {
    name: pageNames.plataformas,
    label: 'Plataformas'.toUpperCase(),
    text: `Atualmente a Cruzeiro do Sul Virtual utiliza as plataformas de ensino BlackBoard (Bb) 
    e Canvas como ambientes virtuais de aprendizagem. O AVA representa uma sala de aula, só que virtual 
    na qual nossos alunos encontram os contúdos de suas aulas ao vivo (síncronas) e interativas 
    através do ZOOM`,
  },
]
