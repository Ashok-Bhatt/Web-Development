import './App.css'
import NavigationBar from './components/NavigationBar/NavigationBar';
import HeadingSection from './components/HeadingSection/HeadingSection';
import FormSection from './components/FormSection/FormSection';

function App() {

  return (
    <div className="main-container">
      <NavigationBar/>
      <HeadingSection/>
      <FormSection/>
    </div>
  )
}

export default App
