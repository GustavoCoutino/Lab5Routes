import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import styles from "../css/Dashboard.module.css";

export const Dashboard = () => {
  const data = [
    { name: "Jan", sales: 4000, customers: 2400, revenue: 2400 },
    { name: "Feb", sales: 3000, customers: 1398, revenue: 2210 },
    { name: "Mar", sales: 2000, customers: 9800, revenue: 2290 },
    { name: "Apr", sales: 2780, customers: 3908, revenue: 2000 },
    { name: "May", sales: 1890, customers: 4800, revenue: 2181 },
    { name: "Jun", sales: 2390, customers: 3800, revenue: 2500 },
    { name: "Jul", sales: 3490, customers: 4300, revenue: 2100 },
  ];

  return (
    <div className={styles.dashboardContainer}>
      <div className={styles.chartCard}>
        <h2>Estadísticas Mensuales</h2>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{ top: 20, right: 30, left: 20, bottom: 10 }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="sales"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <Line type="monotone" dataKey="customers" stroke="#82ca9d" />
            <Line type="monotone" dataKey="revenue" stroke="#ff7300" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
