import type { NextPage } from 'next'
import Main from '../components/main/Main'
import ControlBar from '../components/control-bar/ControlBar'

const Home: NextPage = () => {
  return (
    <div>
      <Main />
      <ControlBar />
    </div>
  )
}

export default Home
