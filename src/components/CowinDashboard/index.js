import {useState,useEffect} from 'react'
import VaccinationCoverage from '../VaccinationCoverage'
import Loader from 'react-loader-spinner'
import VaccinationByGender from '../VaccinationByGender'
import './index.css'
import VaccinationByAge from '../VaccinationByAge'

const CowinDashboard=()=>{
    const [vaccinationData,setVaccinationData]=useState([])
    const [isLoading,setIsLoading]=useState(true)
    

    useEffect(()=>{
        const getVaccinationData= async ()=>{
            const url="https://apis.ccbp.in/covid-vaccination-data";
            const options={
                mathod:'GET'
            }
            const response= await fetch(url,options)
                const data = await response.json();
                const formattedData = {
                  last7DaysVaccination: data.last_7_days_vaccination,
                  vaccinationByAge: data.vaccination_by_age,
                  vaccinationByGender: data.vaccination_by_gender,
                }
                setVaccinationData(formattedData)
                setIsLoading(false)
             


        }
        getVaccinationData();
    },[])

    return(
        <div className="bg-container">
          
            <div className="container">
            <div className="logo-container">
                <img src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png" alt="logo" className="logo"/>
                <p className="app-name">Co-WIN</p>
            </div>
            <p className="description">Co-WIN Vaccination in India</p>
            
            {isLoading?<div className="loader-container"><Loader type="ThreeDots" color="#ffffff" height={80} width={80} /></div>:
            <div>
                <VaccinationCoverage details={vaccinationData}/>
                <VaccinationByGender details={vaccinationData}/>
                <VaccinationByAge details={vaccinationData}/>
            </div>
            
            }
            </div>
            
            
        </div>
    )

}
export default CowinDashboard