'use client';
import { options } from '@/app/layout';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';

const NavSearch = ({ options }: { options: any }) => {
  const [searchRef, setSearchRef] = useState('');
  const router = useRouter();

  const handleSearch = async (e: any) => {
    if (e.key === 'Enter') {
      try {
        const encodedQuery = encodeURIComponent(searchRef);
        const res = await axios.get(
          `https://api.themoviedb.org/3/search/multi?query=${encodedQuery}&include_adult=false&language=en-US&page=1`,
          options
        );
        router.push(`/search/${searchRef}`);
        setSearchRef('');
      } catch (error) {
        console.error('Error fetching search results:', error);
      }
    }
  };
  return (
    <Input
      className="pl-8 text-sm"
      placeholder="Search..."
      type="search"
      value={searchRef}
      onChange={(e) => setSearchRef(e.target.value)}
      onKeyDown={handleSearch}
    />
  );
};

export default NavSearch;
