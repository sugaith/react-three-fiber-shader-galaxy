import React from 'react'

export const pageName = {
  main: 'main',
  nucleo: 'nucleo',
}

export const initialPageView = {
  main: true,
}

export const subPagesData = {
  main: {
    name: pageName.main,
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
