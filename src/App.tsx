
import './App.css';
import { Search } from './Components/Search';

function App() {
  return (
    <>
       <div className="container-fluid">
         <div className="container centrado">
           <h3 className="mt-5 mb-5">Covid Vaccines by Country</h3>
         </div>
         <Search/>
       </div>
    </>
  );
}

export default App;
