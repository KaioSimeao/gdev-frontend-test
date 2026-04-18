'use client';

import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend } from 'recharts';
import { Movie } from '@/store/useCrudStore';

export const MoviesGenrePieChart = ({ movies }: { movies: Movie[] }) => {
  const genreCounts = movies.reduce((acc, movie) => {
    acc[movie.genre] = (acc[movie.genre] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  const data = Object.keys(genreCounts).map(genre => ({
    name: genre,
    value: genreCounts[genre]
  })).sort((a, b) => b.value - a.value);

  const COLORS = ['#000000', '#3b3b3b', '#747474', '#acabab', '#d5d4d4', '#e2e2e2'];

  if (data.length === 0) {
    return <div className="h-64 flex items-center justify-center text-gray-400 text-sm">Sem dados.</div>;
  }

  return (
    <div className="w-full h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie data={data} cx="50%" cy="50%" outerRadius={80} paddingAngle={2} dataKey="value">
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