import React from 'react';
import { motion } from 'motion/react';
import { Activity, BarChart3, Box, Layers, Settings, Users } from 'lucide-react';

export default function DashboardDemo() {
  return (
    <div className="bg-[#E4E3E0] text-[#141414] font-mono min-h-screen p-4 md:p-8">
      <div className="max-w-7xl mx-auto border border-[#141414] bg-white shadow-[8px_8px_0px_0px_rgba(20,20,20,1)]">
        {/* Header */}
        <header className="border-b border-[#141414] p-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div>
            <h1 className="text-2xl font-bold tracking-tighter uppercase italic font-serif">Inventory Control // System_01</h1>
            <p className="text-[10px] opacity-50 mt-1 uppercase tracking-widest">Active Session: Admin_Root // 01.04.2026</p>
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 border border-[#141414] text-xs uppercase font-bold hover:bg-[#141414] hover:text-white transition-colors">Export CSV</button>
            <button className="px-4 py-2 bg-[#141414] text-white text-xs uppercase font-bold hover:bg-white hover:text-[#141414] border border-[#141414] transition-colors">New Entry</button>
          </div>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-4 min-h-[600px]">
          {/* Sidebar */}
          <aside className="border-r border-[#141414] p-6 space-y-8">
            <nav className="space-y-4">
              <NavItem icon={<BarChart3 size={16} />} label="Analytics" active />
              <NavItem icon={<Box size={16} />} label="Inventory" />
              <NavItem icon={<Users size={16} />} label="Customers" />
              <NavItem icon={<Layers size={16} />} label="Logistics" />
              <NavItem icon={<Activity size={16} />} label="System Status" />
              <NavItem icon={<Settings size={16} />} label="Configuration" />
            </nav>

            <div className="pt-8 border-t border-[#141414]/10">
              <div className="text-[10px] uppercase opacity-50 mb-4 italic font-serif">System Load</div>
              <div className="space-y-2">
                <ProgressBar label="CPU" value={42} />
                <ProgressBar label="RAM" value={68} />
                <ProgressBar label="NET" value={12} />
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 p-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <StatCard label="Total Revenue" value="$1,240,500" change="+12.4%" />
              <StatCard label="Active Orders" value="842" change="-2.1%" />
              <StatCard label="Return Rate" value="0.84%" change="+0.02%" />
            </div>

            <div className="border border-[#141414]">
              <div className="bg-[#141414] text-white p-3 flex justify-between items-center">
                <span className="text-[10px] uppercase font-bold tracking-widest">Recent Transactions</span>
                <span className="text-[10px] opacity-50">Live Feed</span>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-[#141414]">
                      <th className="p-4 text-[11px] uppercase italic font-serif opacity-50">ID</th>
                      <th className="p-4 text-[11px] uppercase italic font-serif opacity-50">Product</th>
                      <th className="p-4 text-[11px] uppercase italic font-serif opacity-50">Status</th>
                      <th className="p-4 text-[11px] uppercase italic font-serif opacity-50">Value</th>
                    </tr>
                  </thead>
                  <tbody>
                    <TableRow id="#8421" product="Core Processor v2" status="Shipped" value="$420.00" />
                    <TableRow id="#8422" product="Memory Module 16GB" status="Pending" value="$125.00" />
                    <TableRow id="#8423" product="Solid State Drive 1TB" status="Processing" value="$89.00" />
                    <TableRow id="#8424" product="Graphics Unit X-1" status="Shipped" value="$1,200.00" />
                    <TableRow id="#8425" product="Power Supply 750W" status="Cancelled" value="$110.00" />
                  </tbody>
                </table>
              </div>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}

function NavItem({ icon, label, active = false }: { icon: React.ReactNode, label: string, active?: boolean }) {
  return (
    <div className={`flex items-center gap-3 p-2 cursor-pointer transition-all ${active ? 'bg-[#141414] text-white' : 'hover:bg-[#141414]/5'}`}>
      {icon}
      <span className="text-xs uppercase font-bold tracking-tight">{label}</span>
    </div>
  );
}

function ProgressBar({ label, value }: { label: string, value: number }) {
  return (
    <div className="space-y-1">
      <div className="flex justify-between text-[9px] uppercase font-bold">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="h-1 bg-[#141414]/10 w-full">
        <motion.div 
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          className="h-full bg-[#141414]" 
        />
      </div>
    </div>
  );
}

function StatCard({ label, value, change }: { label: string, value: string, change: string }) {
  return (
    <div className="border border-[#141414] p-4 bg-white">
      <div className="text-[10px] uppercase opacity-50 mb-2 italic font-serif">{label}</div>
      <div className="text-xl font-bold tracking-tighter mb-1">{value}</div>
      <div className={`text-[10px] font-bold ${change.startsWith('+') ? 'text-green-600' : 'text-red-600'}`}>
        {change} <span className="opacity-50 text-[#141414]">vs prev month</span>
      </div>
    </div>
  );
}

function TableRow({ id, product, status, value }: { id: string, product: string, status: string, value: string }) {
  return (
    <tr className="border-b border-[#141414]/10 hover:bg-[#141414] hover:text-white transition-colors cursor-pointer group">
      <td className="p-4 text-xs font-bold">{id}</td>
      <td className="p-4 text-xs">{product}</td>
      <td className="p-4 text-[10px] uppercase font-bold tracking-widest">{status}</td>
      <td className="p-4 text-xs font-bold text-right">{value}</td>
    </tr>
  );
}
