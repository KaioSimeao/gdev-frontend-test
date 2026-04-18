'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Movie } from '@/store/useCrudStore';

export const MoviesStatusDoughnutChart = ({ movies }: { movies: Movie[] }) => {
  const data = [
    { name: 'Já Assistido', value: movies.filter(m => m.status === 'Assistido').length },
    { name: 'Para Assistir', value: movies.filter(m => m.status === 'Para Assistir').length },
  ].filter(item => item.value > 0);

  const COLORS = ['#000000', '#acabab'];

  if (data.length === 0) {
    return <div className="h-64 flex items-center justify-center text-gray-400 text-sm">Sem dados.</div>;
  }

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" innerRadius={60} outerRadius={80} paddingAngle={5} dataKey="value">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
          <Tooltip contentStyle={{ backgroundColor: '#1a1c1c', border: 'none', color: '#fff', fontSize: '12px' }} />
          <Legend verticalAlign="bottom" height={36} wrapperStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }}/>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};