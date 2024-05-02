import React from 'react'
import DetailedSkills from './detailedSkills.jsx'
import skillsData from '../constants/skills.js';


function skills() {
  return (
    <>
      <div id='skills' className='skillsElemet w-full h-screen box-border md:pr-24 flex flex-col md:flex-row rounded-t-3xl bg-orange-400 pt-[20vh] md:pt-[25vh] '>
        <div className='text-7xl md:text-8xl font-poppins font-bold md:mt-[20vh] ml-[25vw] md:ml-56' id='skills'>
          <h1>Skills</h1>
        </div>

      <div>
    {skillsData.map((item,index)=>(
      <DetailedSkills data={item} />
    ))}
     </div>
      </div>
    </>
  )
}

export default skills