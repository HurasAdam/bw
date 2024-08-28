import React from 'react'
import ArticleCard from '../components/ArticleCard'

const Dashboard = () => {
  return (

   <div className="p-6  rounded-lg">
      <div className="grid grid-cols-3 gap-4 mb-4">
         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">

            </p>
         </div>
         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">

            </p>
         </div>
         <div className="flex items-center justify-center h-24 rounded bg-gray-50 dark:bg-gray-800">
            <p className="text-2xl text-gray-400 dark:text-gray-500">

            </p>
         </div>
      </div>



<div className='flex flex-col gap-2'>
   
<ArticleCard/>
<ArticleCard/>
<ArticleCard/>
<ArticleCard/>
<ArticleCard/>
<ArticleCard/>
<ArticleCard/>
<ArticleCard/>
<ArticleCard/>

</div>



   </div>

  )
}

export default Dashboard