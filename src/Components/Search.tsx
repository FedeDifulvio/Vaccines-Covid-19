import { useAPICovid } from "../Hooks/useAPICovid";
import { useState } from 'react';
import { DataVaccines } from './DataVccines';
import { Processing } from './Processing';
import { ErrorMessage } from "./ErrorMessage";


export const Search = () => {
  const { dataCountry, getVaccines, processing, result} = useAPICovid();

  const [country, setCountry] = useState<string>('') 
 
 
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <form onSubmit={(e)=>{e.preventDefault()}}>
              <input
                className="form-control"
                name="country"
                placeholder="Country"
                type="text"
                onChange={(e)=>{setCountry(e.target.value)}}
              />
              <div className="d-grid gap-2">
                <button
                  onClick={() => {
                     getVaccines(country);
                    
                  }}
                  className="btn btn-primary mt-3"
                >
                  Search
                </button>
              </div>
            </form>
          </div>
          <div className="col-md-4"></div>
        </div>

        <Processing state = {processing}/>
    
        <div> 
            {
              dataCountry && !processing?  
              (  
                <DataVaccines {...dataCountry}/>  
              ) 
              : 
              (  
               <ErrorMessage result={result} processing={processing}/> 
              )
            }
  
        </div>
      </div>
    </>
  );
};
