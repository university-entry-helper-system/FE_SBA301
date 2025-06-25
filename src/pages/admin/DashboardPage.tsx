import { useEffect, useState } from 'react';
import { useApi } from '@/shared/api/client';

interface DashboardStats {
  totalUsers: number;
  activeUsers: number;
  totalContent: number;
  recentActivity: Array<{
    id: string;
    type: string;
    description: string;
    timestamp: string;
  }>;
}

export function DashboardPage() {
  const { get } = useApi();
  const [stats, setStats] = useState<DashboardStats | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const data = await get('/admin/stats');
        setStats(data);
      } catch (error) {
        console.error('Failed to fetch dashboard stats:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [get]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-gradient-to-r from-pink-400 to-pink-200 p-6 rounded-lg shadow text-white">
          <div className="text-lg font-semibold">Weekly Sales</div>
          <div className="text-2xl font-bold mt-2">$15,000</div>
          <div className="text-sm mt-1">Increased by 60%</div>
        </div>
        <div className="bg-gradient-to-r from-blue-400 to-blue-200 p-6 rounded-lg shadow text-white">
          <div className="text-lg font-semibold">Weekly Orders</div>
          <div className="text-2xl font-bold mt-2">45,634</div>
          <div className="text-sm mt-1">Decreased by 10%</div>
        </div>
        <div className="bg-gradient-to-r from-teal-400 to-teal-200 p-6 rounded-lg shadow text-white">
          <div className="text-lg font-semibold">Visitors Online</div>
          <div className="text-2xl font-bold mt-2">95,574</div>
          <div className="text-sm mt-1">Increased by 5%</div>
        </div>
      </div>
      {/* Add chart or table components here */}
      <div className="bg-white rounded-lg shadow p-6">
        <div className="text-lg font-semibold mb-2">Visit And Sales Statistics</div>
        <div className="h-40 flex items-center justify-center text-gray-400">[Chart Placeholder]</div>
      </div>
    </div>
  );
} 