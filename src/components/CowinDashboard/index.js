import {useState,useEffect} from 'react'
import VaccinationCoverage from '../VaccinationCoverage'
import Loader from 'react-loader-spinner'
import VaccinationByGender from '../VaccinationByGender'
import './index.css'
import VaccinationByAge from '../VaccinationByAge'


const apiStatusConstants = {
    initial: 'INITIAL',
    success: 'SUCCESS',
    failure: 'FAILURE',
    inProgress: 'IN_PROGRESS',
  }

const CowinDashboard=()=>{
    const [vaccinationData,setVaccinationData]=useState([])
    const [apiStatus,setApiStatus]=useState(apiStatusConstants.initial)
    

    useEffect(()=>{
        const getVaccinationData= async ()=>{
            setApiStatus(apiStatusConstants.inProgress)
            const url="https://apis.ccbp.in/covid-vaccination-data";
            const options={
                mathod:'GET'
            }
            const response= await fetch(url,options)
                if (response.ok===true){
                    const data = await response.json();
                const formattedData = {
                  last7DaysVaccination: data.last_7_days_vaccination,
                  vaccinationByAge: data.vaccination_by_age,
                  vaccinationByGender: data.vaccination_by_gender,
                }
                setVaccinationData(formattedData)
                setApiStatus(apiStatusConstants.success)
                }
                else{
                    setApiStatus(apiStatusConstants.failure)
                    
                }
             


        }
        getVaccinationData();
    },[])

    const failureView=(props)=>{
        return(
            <div className="failure-view-container">
                <img src="https://assets.ccbp.in/frontend/react-js/api-failure-view.png" alt="failure-view"/>
                <p className="failure-view-msg">Failed to fetch data</p>
            </div>
        )
    }

    const loadingView=()=>{
        return(
            <div className="loader-container">
                <Loader type="ThreeDots" color="#ffffff" height={80} width={80} />
            </div>

        )
    }
    const successView=()=>{
        return(
            <div>
                <VaccinationCoverage details={vaccinationData}/>
                <VaccinationByGender details={vaccinationData}/>
                <VaccinationByAge details={vaccinationData}/>
            </div>

        )
    }

    const renderData=()=>{
        switch(apiStatus){
            case apiStatusConstants.inProgress:
              return loadingView()
            case apiStatusConstants.success:
              return successView()
            case apiStatusConstants.failure:
              return failureView()
            default:
              return null
          }
    }

    return(
        <div className="bg-container">
          
            <div className="container">
            <div className="logo-container">
                <img src="https://assets.ccbp.in/frontend/react-js/cowin-logo.png" alt="logo" className="logo"/>
                <p className="app-name">Co-WIN</p>
            </div>
            <p className="description">Co-WIN Vaccination in India</p>
            
            {renderData()}
            </div>
            
            
        </div>
    )

}
export default CowinDashboard