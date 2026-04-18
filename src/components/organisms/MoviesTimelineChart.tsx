'use client';

import { useState, useMemo } from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid, Cell } from 'recharts';
import { Movie } from '@/store/useCrudStore';

export const MoviesTimelineChart = ({ movies }: { movies: Movie[] }) => {
  const [viewMode, setViewMode] = useState<'month' | 'year'>('month');

  const chartData = useMemo(() => {
    const validMovies = movies.filter(m => m.status === 'Assistido' && m.watchedDate);
    
    if (validMovies.length === 0) return [];

    const groupedData: Record<string, { label: string; count: number; timestamp: number }> = {};

    validMovies.forEach(movie => {
      const d = new Date(movie.watchedDate + 'T00:00:00');
      let key = '';
      let label = '';
      let timestamp = 0;

      if (viewMode === 'year') {
        key = d.getFullYear().toString();
        label = key;
        timestamp = new Date(d.getFullYear(), 0, 1).getTime();
      } else {
        key = `${d.getFullYear()}-${d.getMonth()}`;
        label = d.toLocaleDateString('pt-BR', { month: 'short', year: '2-digit' }).replace('.', '');
        timestamp = new Date(d.getFullYear(), d.getMonth(), 1).getTime();
      }

      if (!groupedData[key]) {
        groupedData[key] = { label, count: 0, timestamp };
      }
      
      groupedData[key].count += 1;
    });

    return Object.values(groupedData).sort((a, b) => a.timestamp - b.timestamp);

  }, [movies, viewMode]);

  if (chartData.length === 0) {
    return (
      <div className="h-64 flex flex-col items-center justify-center text-gray-400 border border-dashed border-gray-200">
        <p className="text-[10px] uppercase tracking-widest font-bold">Sem dados de cronologia</p>
      </div>
    );
  }

  const maxCount = Math.max(...chartData.map(d => d.count));

  return (
    <div className="w-full">
      <div className="flex justify-end mb-6 gap-2">
        <button 
          onClick={() => setViewMode('month')}
          className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all border ${viewMode === 'month' ? 'bg-black text-white border-black' : 'bg-transparent text-gray-400 border-gray-200 hover:border-black hover:text-black'}`}
        >
          Mensal
        </button>
        <button 
          onClick={() => setViewMode('year')}
          className={`px-4 py-1.5 text-[10px] font-bold uppercase tracking-widest transition-all border ${viewMode === 'year' ? 'bg-black text-white border-black' : 'bg-transparent text-gray-400 border-gray-200 hover:border-black hover:text-black'}`}
        >
          Anual
        </button>
      </div>

      <div className="h-72 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={chartData} margin={{ top: 20, right: 0, bottom: 20, left: -20 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e2e2" />
            
            <XAxis 
              dataKey="label" 
              tick={{ fontSize: 10, fill: '#747474', fontWeight: 'bold' }}
              axisLine={{ stroke: '#dadada' }}
              tickLine={false}
              dy={15}
            />
            
            <YAxis 
              allowDecimals={false} 
              domain={[0, maxCount === 0 ? 1 : maxCount + 1]} 
              tick={{ fontSize: 10, fill: '#747474' }}
              axisLine={false}
              tickLine={false}
              dx={-10}
            />

            <Tooltip 
              cursor={{ fill: '#f3f3f3' }}
              content={({ active, payload }) => {
                if (active && payload && payload.length) {
                  const p = payload[0].payload;
                  return (
                    <div className="bg-black text-white p-4 shadow-2xl border-none rounded-none">
                      <p className="text-[10px] uppercase tracking-widest text-gray-400 mb-1">{p.label}</p>
                      <p className="font-bold text-sm">
                        {p.count} {p.count === 1 ? 'filme assistido' : 'filmes assistidos'}
                      </p>
                    </div>
                  );
                }
                return null;
              }}
            />

            <Bar dataKey="count" radius={[2, 2, 0, 0]} maxBarSize={60}>
              {chartData.map((entry, index) => (
                <Cell 
                  key={`cell-${index}`} 
                  fill="#000000" 
                />
              ))}
            </Bar>
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};