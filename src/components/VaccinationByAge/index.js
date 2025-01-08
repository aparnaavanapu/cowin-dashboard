import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from "recharts";
import './index.css'

const VaccinationByAge=(props)=>{
    const {details}=props
    const {vaccinationByAge}=details


    const COLORS = ["#a3df9f", "#2d87bb", "#64c2a6"];
    return (
        <div className="vca-bg-container">
          <h2 className="vca-heading">Vaccination by Age</h2>
          <ResponsiveContainer width="100%" height={400}>
            <PieChart>
              <Pie
                data={vaccinationByAge}
                dataKey="count"
                nameKey="age"
                cx="50%" // Center x-axis position
                cy="50%" // Center y-axis position
                outerRadius={100} // Size of the pie chart
                fill="#8884d8"
                label
              >
                {vaccinationByAge.map((entry, index) => (
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

export default VaccinationByAge