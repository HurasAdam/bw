import React from 'react';
import Drawer from './core/Drawer';

const ArticleCard = () => {
  return (
    <div className="flex items-center justify-center min-h-[80px] h-fit  rounded bg-gray-50 dark:bg-gray-800">
      <ul className='w-full h-full flex justify-between p-4 items-center'>
        <li className='flex-shrink-0 text-xs font-semibold text-slate-700 px-2 py-1 text-center'>A1235</li>

        <li className='flex-1  px-4 py-1 text-left'>Jak wykonać promocję przedszkolaka</li>

        <li className='flex-2 max-w-[33%]  flex flex-wrap gap-x-1 gap-y-1'>
          <span className='shadow border  border-blue-300 py-1 px-[6px] rounded-lg bg-blue-500 text-white font-semibold text-xs min-w-[80px]'>e-Sekretariat</span>
          <span className='shadow border border-blue-300 py-1 px-1.5 rounded-lg bg-blue-500 text-white font-semibold text-sm min-w-[80px]'>Synergia</span>
          <span className='shadow border border-blue-300 py-1 px-1.5 rounded-lg bg-blue-500 text-white font-semibold text-sm min-w-[80px]'>e-Świadectwa</span>

        </li>

        <li className='flex-shrink-0 flex-1 text-right px-2 py-1'>Adam Huras</li>
      </ul>
    
    </div>
  );
};

export default ArticleCard;
