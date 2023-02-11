import React from 'react'

export const pageNames = {
  main: 'main',
  graduacaoEAD: 'graduacaoEAD',
  graduacao4v: 'graduacao4v',
  graduacao4i: 'graduacao4i',
  posGraduacao: 'posGraduacao',
  tecnico: 'tecnico',
  cursosLivres: 'cursosLivres',
}

export const initialPageView = {
  main: true,
  graduacaoEAD: false,
  graduacao4v: false,
  graduacao4i: false,
  posGraduacao: false,
  tecnico: false,
  cursosLivres: false,
}

export const academicosPageData = [
  {
    name: pageNames.graduacaoEAD,
    label: 'Graduação EAD e Estrutura'.toUpperCase(),
    text: 'Informações e Créditos:',
    bullets: [
      {
        label: 'Coordenação EAD',
        video: true,
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1658769811&entry_id=1_svjvcjcb',
        iframe: (
          <iframe
            id="kaltura_player_1658769811"
            src="https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1658769811&entry_id=1_svjvcjcb"
            width="630"
            height="360"
            allowFullScreen="true"
            webkitallowfullscreen="true"
            mozAllowFullScreen="true"
            allow="autoplay *; fullscreen *; encrypted-media *"
            frameBorder="0"
          />
        ),
      },
      {
        label: 'Conteudistas EAD',
        video: true,
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1658527588&entry_id=1_szh4xg7r',
        iframe: (
          <iframe
            id="kaltura_player_1658527588"
            src="https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1658527588&entry_id=1_szh4xg7r"
            width="640"
            height="360"
            allowFullScreen
            webkitallowfullscreen
            mozAllowFullScreen
            allow="autoplay *; fullscreen *; encrypted-media *"
            frameBorder="0"
          />
        ),
      },
      {
        label: 'Equipes de Produção',
        video: true,
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1657906670&entry_id=1_rzbi840s',
        iframe: (
          <iframe
            id="kaltura_player_1657906670"
            src="https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1657906670&entry_id=1_rzbi840s"
            width="640"
            height="360"
            allowFullScreen
            webkitallowfullscreen
            mozAllowFullScreen
            allow="autoplay *; fullscreen *; encrypted-media *"
            frameBorder="0"
          />
        ),
      },
      {
        label: 'Professores Responsáveis',
        video: true,
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1658769841&entry_id=1_h4s4bsjk',
        iframe: (
          <iframe
            id="kaltura_player_1658769841"
            src="https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1658769841&entry_id=1_h4s4bsjk"
            width="640"
            height="360"
            allowFullScreen
            webkitallowfullscreen
            mozAllowFullScreen
            allow="autoplay *; fullscreen *; encrypted-media *"
            frameBorder="0"
          />
        ),
      },
      {
        label: 'Tutores EAD',
        video: true,
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1658527664&entry_id=1_hg2ch6iv',
        iframe: (
          <iframe
            id="kaltura_player_1658527664"
            src="https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1658527664&entry_id=1_hg2ch6iv"
            width="640"
            height="360"
            allowFullScreen
            webkitallowfullscreen
            mozAllowFullScreen
            allow="autoplay *; fullscreen *; encrypted-media *"
            frameBorder="0"
          />
        ),
      },
      {
        label: 'Acessar o site',
        link: 'https://www.cruzeirodosulvirtual.com.br/graduacao/',
      },
    ],
  },
  {
    name: pageNames.graduacao4v,
    label: 'Graduação Semi 4.0V'.toUpperCase(),
    text: `Metodologia que combina características do ensino presencial com o EAD.
    No nosso modelo as aulas podem ser ao vivo e/ou presenciais, durante os encontros,
     nossos alunos podem interagir com os professores em tempo real.`,
    bullets: [
      {
        label: 'Coordenação SEMI 4.0',
        video: true,
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1658771796&entry_id=1_84l8dif7',
      },
      {
        label: 'Conteudistas SEMI 4.0',
        video: true,
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1658528668&entry_id=1_h85jc3wo',
      },
      {
        label: 'Equipes de produção SEMI 4.0',
        video: true,
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1657906861&entry_id=1_3ri4lah0',
      },
      {
        label: 'Professor Responável SEMI 4.0',
        video: true,
        videoLink: undefined,
      },
      {
        label: 'Tutor SEMI 4.0',
        video: true,
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1658527963&entry_id=1_gghijiqo',
      },
      {
        label: 'Acessar o site',
        link: 'https://www.cruzeirodosulvirtual.com.br/graduacao/',
      },
    ],
  },
  {
    name: pageNames.graduacao4i,
    label: 'Graduação Semi 4.0I'.toUpperCase(),
    text: `A graduação semipresencial 4.0i se caracteriza como uma metodologia de ensono 
    que tem aulas o vivo e aulas gravadas. Neste caso, nossos lunos não precism ir a 
    universidade com frequênci, j que o cesso aos conteúdos ocorre, por meio do AVA.`,
    bullets: [
      {
        label: 'Coordenação SEMI 4.0i',
        video: true,
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1658527797&entry_id=1_fdgtwtcq',
      },
      {
        label: 'Conteudistas SEMI 4.0i',
        video: true,
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1658527735&entry_id=1_uunm08xn',
      },
      {
        label: 'Equipes de produção SEMI 4.0i',
        video: true,
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1658527874&entry_id=1_qbef7fuc',
      },
      {
        label: 'Professor Responável SEMI 4.0i',
        video: true,
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1658527766&entry_id=1_tnkwdgzh',
      },
      {
        label: 'Tutor SEMI 4.0i',
        video: true,
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1658527847&entry_id=1_4mdsy5v9',
      },
      {
        label: 'Acessar o site',
        link: 'https://www.cruzeirodosulvirtual.com.br/pos-graduacao/',
      },
    ],
  },
  {
    name: pageNames.posGraduacao,
    label: 'Pós-Graduação'.toUpperCase(),
    text: `Como o próprio nome diz, o curso de PÓs-graduaÇõ, corresponde àqueles cursos 
    que para serem relizdos o estudnte procis ter um diploma de nível superior. 
    Existem diferentes programas nesse nível de ensino, e eles estão divididos em 
    lato sensu e stricto sensu.`,
    bullets: [
      {
        label: 'Video 1',
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1657915643&entry_id=1_mwu834ca',
      },
      {
        label: 'Video 2',
        videoLink:
          'https://cdnapisec.kaltura.com/p/1756931/sp/175693100/embedIframeJs/uiconf_id/50600442/partner_id/1756931?iframeembed=true&playerId=kaltura_player_1657915708&entry_id=1_iv37kk0a',
      },
      {
        label: 'Cursos',
        link: 'https://www.cruzeirodosulvirtual.com.br/pos-graduacao/',
      },
    ],
  },
  {
    name: pageNames.tecnico,
    label: 'Técnico'.toUpperCase(),
    text: `Os cursos técnicos se enquafram entre o Ensino Médio e o Superior, podendo ser 
    realizado após a finalização do ensino médio ou concomitantes à ele`,
    bullets: [
      {
        label: 'Acessar os cursos',
        link: 'https://www.cruzeirodosulvirtual.com.br/pos-graduacao/',
      },
    ],
  },
  {
    name: pageNames.cursosLivres,
    label: 'Cursos Livres'.toUpperCase(),
    text: `Ideal param quem busca se reciclar para melhorar o currículo ou mesmo para 
    aqueles que queiram aprender algo novo, simplesmente, pela satisfação pessoal.`,
    bullets: [
      {
        label: 'Acessar os cursos',
        link: 'https://www.cruzeirodosulvirtual.com.br/cursos-livres/',
      },
    ],
  },
]

export const academicosMainPhrase = `Se você busca ser um profissional competente
   e preparado para o mercado de trabalho, navegue pelas nossas diversas 
   formas de ingresso e escolha a melhor para seu futuro`
