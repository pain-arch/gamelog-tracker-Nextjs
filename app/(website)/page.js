import React from 'react'
import {Button, ButtonGroup} from "@nextui-org/button";
import Header from '@/components/header/header';
import Box from '@/components/box';
import SiteHeader from '@/components/site-header';
import Search from '@/components/search';
import Link from 'next/link';
import { FiPlus } from 'react-icons/fi';

const HomePage = () => {
  return (
    <section className='p-6'>
      <Box>
        <SiteHeader />
        <div className='flex items-center gap-2'>
          <Search />
          <Link className='flex items-center' href={'/new'}><FiPlus/>Add player</Link>
        </div>
      </Box>
    </section>
  )
}

export default HomePage