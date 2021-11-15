import type { NextPage } from 'next'
import Main from '../components/main/Main'
import ControlBar from '../components/control-bar/ControlBar'
import { css } from '@emotion/css'

const Home: NextPage = () => {
  return (
    <div className={mainIndexPageStyle}>
      <Main />
      <ControlBar />
    </div>
  )
}

const mainIndexPageStyle = css`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

export default Home
