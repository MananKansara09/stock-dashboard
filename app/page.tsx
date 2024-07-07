"use client"
import React, { useState } from 'react';

const stocks = [
  { value: 'apple', label: 'Apple' },
  { value: 'amazon', label: 'Amazon' },
  { value: 'google', label: 'Google' },
  { value: 'microsoft', label: 'Microsoft' },
  { value: 'tesla', label: 'Tesla' },
];

export default function Home() {
  const [search, setSearch] = useState('');
  const [selected, setSelected] = useState(null);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleSearchChange = (e:any) => {
    setSearch(e.target.value);
  };

  const handleSelect = (stock:any) => {
    setSelected(stock);
    setSearch(stock.label);
    setIsDropdownOpen(false);
  };

  const filteredStocks = stocks.filter((stock) =>
    stock.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
    <div className="relative w-64 m-4">
      <input
        className="w-full p-2 m-2 rounded-md ring-offset-2 ring border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Search your stock"
        value={search}
        onChange={handleSearchChange}
        onFocus={() => setIsDropdownOpen(true)}
      />
      {isDropdownOpen && (
        <ul className="absolute w-full bg-white border border-gray-300 rounded-md mt-1 max-h-60 overflow-y-auto shadow-lg z-10 m-2">
          {filteredStocks.map((stock) => (
            <li
              key={stock.value}
              className="p-2 cursor-pointer hover:bg-blue-100"
              onClick={() => handleSelect(stock)}
            >
              {stock.label}
            </li>
          ))}
        </ul>
      )}
    </div>

    
    </>
    
  );
}
