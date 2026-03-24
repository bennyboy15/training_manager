import { 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer 
} from 'recharts';

/**
 * Mock data representing Monthly Website Metrics
 * uv = Unique Visitors
 * pv = Page Views
 * amt = Total Amount (optional extra)
 */
const data = [
  { name: 'Jan', uv: 4000, pv: 2400, amt: 2400 },
  { name: 'Feb', uv: 3000, pv: 1398, amt: 2210 },
  { name: 'Mar', uv: 2000, pv: 9800, amt: 2290 },
  { name: 'Apr', uv: 2780, pv: 3908, amt: 2000 },
  { name: 'May', uv: 1890, pv: 4800, amt: 2181 },
  { name: 'Jun', uv: 2390, pv: 3800, amt: 2500 },
  { name: 'Jul', uv: 3490, pv: 4300, amt: 2100 },
];

export default function ExampleChart() {
  return (
    <div style={{ width: '100%', height: '400px', margin: '0 auto' }}>
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 10,
          }}
        >
          {/* Grid lines - Using a standard hex fallback for the CSS variable */}
          <CartesianGrid strokeDasharray="3 3" stroke="var(--color-border-3, #e5e7eb)" />
          
          <XAxis 
            dataKey="name" 
            stroke="var(--color-text-3, #6b7280)" 
            padding={{ left: 30, right: 30 }}
          />
          
          <YAxis 
            width={60} 
            stroke="var(--color-text-3, #6b7280)" 
          />
          
          <Tooltip
            cursor={{ stroke: 'var(--color-border-2, #d1d5db)', strokeWidth: 2 }}
            contentStyle={{
              backgroundColor: 'var(--color-surface-raised, #ffffff)',
              borderColor: 'var(--color-border-2, #d1d5db)',
              borderRadius: '8px',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
            }}
          />
          
          <Legend verticalAlign="top" height={36}/>
          
          {/* Page Views Line */}
          <Line
            name="Page Views"
            type="monotone"
            dataKey="pv"
            stroke="var(--color-chart-1, #8884d8)"
            strokeWidth={3}
            dot={{
              fill: 'var(--color-surface-base, #ffffff)',
              stroke: '#8884d8',
              strokeWidth: 2,
              r: 4
            }}
            activeDot={{ r: 8, stroke: 'var(--color-surface-base, #ffffff)' }}
          />
          
          {/* Unique Visitors Line */}
          <Line
            name="Unique Visitors"
            type="monotone"
            dataKey="uv"
            stroke="var(--color-chart-2, #82ca9d)"
            strokeWidth={3}
            dot={{
              fill: 'var(--color-surface-base, #ffffff)',
              stroke: '#82ca9d',
              strokeWidth: 2,
              r: 4
            }}
            activeDot={{ r: 8, stroke: 'var(--color-surface-base, #ffffff)' }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}