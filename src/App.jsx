import CounterButtons from './components/CounterButtons';
import CounterBar from './components/CounterBar';

function App() {
  return (
    <div className="app">
      <h1>Counter App</h1>
      <CounterButtons name="Counter Buttons" />
      <CounterBar name="Counter Bar" />
    </div>
  );
}

export default App
