import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import './index.css'


const VaccinationByGender=(props)=>{
    const {details}=props
    const {vaccinationByGender}=details


    const COLORS = ["#f54394", "#5a8dee", "#2cc6c6"];
    return (
        <div className="vcg-bg-contianer">
          <h2 className="vcg-heading">Vaccination by Gender</h2>
          <ResponsiveContainer width="100%" height={300}>
            <PieChart>
              <Pie data={vaccinationByGender} dataKey="count" nameKey="gender"
                cx="50%" // Center x-axis position
                cy="70%" // Push the center down to create a semi-circle
                startAngle={180} // Start from the bottom
                endAngle={0} // End at the top
                innerRadius={50} // Inner radius to create a donut effect (optional)
                outerRadius={100} // Size of the pie chart
                fill="#8884d8"
                label
              >
                {vaccinationByGender.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      );
    

    
 

}
export default VaccinationByGender