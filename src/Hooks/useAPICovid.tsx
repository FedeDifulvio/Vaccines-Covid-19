import {  useState} from "react"
import { covidAPI } from "../API/CovidAPI"
import { Vacunas, CountryData } from '../Interfaces/ApiCovid';

const Capitalize = (str: string)=>{
   const stepOne = str.toLowerCase()
   const stepTwo = stepOne.charAt(0).toUpperCase() + stepOne.slice(1);
   
   console.log(stepTwo)
   return stepTwo; 
}

export const useAPICovid = () => {

   
    const [dataCountry, setDataCountry] = useState<CountryData>();
    const[processing, setProcessing]= useState<boolean>(false);
    const [result, setResult] = useState<boolean>(false)
 
    const getVaccines = async (countrySearch:string) =>{ 

        const Country = Capitalize(countrySearch)

        setProcessing(true)

        const resp = await covidAPI.get<Vacunas>(('/vaccines'), {
            params:{
                country:Country
            }
        }); 

         resp.data? setResult(true): setResult(false);
       
        setDataCountry(resp.data.All);
        setProcessing(false); 
    } 

   
    return{
        dataCountry,
        getVaccines,
        processing,
        result
    }
}
 

   

       
        
    
