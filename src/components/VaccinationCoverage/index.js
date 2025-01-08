import { BarChart, Bar, XAxis, YAxis,Legend, ResponsiveContainer,Tooltip} from "recharts"
import './index.css'
  


const VaccinationCoverage=(props)=>{
    const {details}=props
    const {last7DaysVaccination}=details

    return(
        <div className="vc-bg-container">
      <h2 className="vc-heading">coWIN Vaccination Coverage </h2>
      {/* Ensure the container is responsive */}
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={last7DaysVaccination}>
          {/* Add axes */}
          <XAxis dataKey="vaccine_date" />
          <YAxis />
          {/* Add legend and tooltip */}
          <Legend  wrapperStyle={{padding:30}}/>
          <Tooltip />
          {/* Define bars for dose 1 and dose 2 */}
          <Bar dataKey="dose_1" fill="#5a8dee" name="Dose 1" barsize="8%" radius={[6, 6, 0, 0]}/>
          <Bar dataKey="dose_2" fill="#f54394" name="Dose 2" barsie="8%" radius={[6, 6, 0, 0]}/>
        </BarChart>
      </ResponsiveContainer>
    </div>

    )

}

export default VaccinationCoverage