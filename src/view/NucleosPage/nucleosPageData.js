import React from 'react'

import nucleosBig from './logo-nucleos.png'

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
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <p>
            <h1>James Web Space Telescope</h1>
            <span>These is a JWST picture....</span>
          </p>
        </div>
      </>
    ),
    btnff: <></>,
  },
}
