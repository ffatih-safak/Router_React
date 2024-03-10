import React from 'react'
import {useParams} from 'react-router-dom'


const MemberDetail = () => {
    const params = useParams();
    const memeberId = params.memberId;
  return (
    <div>
       <p>Member Detail {memeberId}</p>
    </div>
  )
}

export default MemberDetail
