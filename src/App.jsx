import './App.css'
import JobInfo from './components/JobInfo'
import JobPosting from './components/JobPosting'
import Resume from './components/Resume'

function App() {

  return (
    <>
      <h1>
        <JobInfo />
        <JobPosting />
        <Resume />
      </h1>
    </>
  )
}

export default App
