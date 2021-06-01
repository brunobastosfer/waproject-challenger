// import { UserContext } from '../Provider';
// import React, { useContext } from 'react';
// import axios from 'axios';

// const GetApi = async(nums) => {
//   const {state, dispatch} = useContext(UserContext);
//   dispatch({type: 'REQUEST'})
//   axios.get(`https://opentdb.com/api.php?amount=${nums}`)
//     .then((res => {
//     dispatch({
//       type: 'SUCCESS',
//       data: res.data
//     })
//   }))
//   return [state, dispatch]
// }
// export default GetApi