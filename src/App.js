import './App.css';
import Buildings from './components/buildings/buildings.component';
import { ReactComponent as RiskbaseSvg } from './assets/svg/riskbase.svg';

function App() {
  return (
    <div className="App">
      <div className='app-header'>      
        <b >Resident Engagement</b> by <a href="https://riskbase.uk" target="_blank" rel='noreferrer'><RiskbaseSvg className='riskbase-logo'/></a>
      </div>
      <div className='app-wrapper'>
        <Buildings />
        
      </div>
    </div>
  );
}

export default App;
