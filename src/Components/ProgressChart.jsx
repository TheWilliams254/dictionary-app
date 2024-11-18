import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const ProgressChart = ({ data }) => (
  <BarChart width={300} height={200} data={data}>
    <XAxis dataKey="name" />
    <YAxis />
    <Tooltip />
    <Bar dataKey="completed" fill="#8884d8" />
  </BarChart>
);

export default ProgressChart;
