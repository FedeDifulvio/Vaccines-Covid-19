import { CountryData } from '../Interfaces/ApiCovid';

const formatNumber=(num:number)=>{
 const numForm = new Intl.NumberFormat().format(num);
 return numForm;  
} 

const formatDate = (date: string)=>{
 const newDate = date.split(" ")[0]
 return newDate;
}
export const DataVaccines = ({ people_vaccinated, people_partially_vaccinated, population, country, updated}:CountryData) => {
    
    return (
      <>
        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            <table className="table centrado">
              <thead className="table-head">
                <tr>
                  <td colSpan={2}> {country} </td>
                </tr>
              </thead>
              <tbody className="table-dark">
                <tr>
                  <td>Population</td>
                  <td>{formatNumber(population)}</td>
                </tr>
                <tr>
                  <td>Vaccinated</td>
                  <td>{formatNumber(people_vaccinated)}</td>
                </tr>
                <tr>
                  <td>Partially vaccinated</td>
                  <td>{formatNumber(people_partially_vaccinated)}</td>
                </tr>
                <tr>
                  <td>Updated</td>
                  <td>{formatDate(updated)}</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="col-md-4"></div>
        </div>
      </>
    );
}
