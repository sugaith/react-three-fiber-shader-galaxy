import * as React from 'react'
import PropTypes from 'prop-types'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import styled from 'styled-components'

function CircularProgressWithLabel(props) {
  return (
    <div
      style={{
        backgroundColor: '#000',
        width: '100%',
        height: '100vh',
        position: 'absolute',
      }}
    >
      <div
        style={{
          position: 'relative',
          top: 'calc(50% - 150px / 2)',
          left: 'calc(50% - 150px / 2)',
          cursor: props.value === 'INICIAR' ? 'pointer' : 'none',
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            display: 'inline-flex',
          }}
        >
          <ContainerCircle
            onClick={props.value === 'INICIAR' ? props.click : null}
          >
            <Typography
              variant="caption"
              component="div"
              style={{
                fontSize: '20px',
                display: 'flex',
                alignSelf: 'center',
                margin: '0 auto',
                fontFamily: 'BlissProLight',
                letterSpacing: '-0.9px',
              }}
            >
              {`${props.value}`}
            </Typography>
          </ContainerCircle>
        </Box>
      </div>
    </div>
  )
}

CircularProgressWithLabel.propTypes = {
  /**
   * The value of the progress indicator for the determinate variant.
   * Value between 0 and 100.
   * @default 0
   */
  value: PropTypes.number.isRequired,
}

export default function CircularStatic({ click }) {
  const [progress, setProgress] = React.useState('')
  const [count, setCount] = React.useState(0)

  React.useEffect(() => {
    if (count <= 100) {
      setTimeout(() => {
        setCount(count + 10)
        setProgress(`${count}%`)
      }, 200)
    } else {
      setTimeout(() => {
        setProgress('INICIAR')
      }, 1000)
    }
  }, [count])

  return <CircularProgressWithLabel value={progress} click={click} />
}

const ContainerCircle = styled.div`
  border: 1px solid #004ba3;
  height: 200px;
  width: 200px;
  border-radius: 100px;
  display: flex;
  transition: 0.5s all ease-in-out;
  -webkit-filter: drop-shadow(0 0 0.75rem #fff);
  &:hover {
    border-color: #ffffff;
    -webkit-filter: drop-shadow(0 0 5rem #fffff);
  }

  box-shadow: 0 0 0 0 rgba(0, 0, 0, 1);
  transform: scale(1.5);
  animation: pulse 2s infinite;

  @keyframes pulse {
    0% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(52, 172, 224, 0.7);
    }

    70% {
      transform: scale(1);
      box-shadow: 0 0 0 20px rgba(52, 172, 224, 0);
    }

    100% {
      transform: scale(0.95);
      box-shadow: 0 0 0 0 rgba(52, 172, 224, 0);
    }
  }
`
const Logo = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: nowrap;
  justify-content: center;
  margin-top: 40px;
  position: absolute;
  left: calc(50% - 275px / 2);
  img:nth-child(1) {
    height: clamp(41px, 9vw, 70px);
  }
  @media (max-width: 792px) {
    padding: 35px 0 0 111px;
  }
`
