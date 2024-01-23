import './App.css'
import { CardBoard } from './components/CardBoard/CardBoard'
import { Header } from './components/Header/Header'
import { PopBrows } from './components/popups/PopBrowse/PopBrows'
import { PopExit } from './components/popups/PopExit/PopExit'
import { PopNewCard } from './components/popups/PopNewCard/PopNewCard'
import { tasksList } from './data'


function App() {
  return (
    <>
      <div className="wrapper">
		<Header/>

		<main className="main">
			<div className="container">
				
				<div className="main__block">
					<div className="main__content">
						<CardBoard tasks={tasksList}/>						
					</div>				
				</div>
			</div>
		</main>
		
		<PopExit/>
		<PopNewCard/>
		<PopBrows/>
      </div>
    </>
  )
}

export default App
