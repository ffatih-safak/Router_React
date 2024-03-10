import React from 'react'
import {useSearchParams} from 'react-router-dom'
const Member = () => {
    const[searchParams,setSearchParams] = useSearchParams();
    const isAvtive = searchParams.get('filter') ==='active';
  return (
    <div>
        <p>Member</p>
        <button onClick={()=>setSearchParams({filter : 'active'})}>Aktif üyeler</button> 
        <button onClick={()=>setSearchParams()}>Üyeler</button>
        {isAvtive ? <h2>Aktif Üyeler</h2> : <h2>Tümü</h2>}
    </div>
  )
}

export default Member
