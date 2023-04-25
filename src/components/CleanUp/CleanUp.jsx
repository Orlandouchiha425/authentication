// import React, { useState } from "react";
// import SignUpForm from "../SignUpForm/SignUpForm";
// import { getUser } from "../../utilities/users-service";
// import Home from "../Home/Home";
// import { Routes, Route } from "react-router-dom";

// function CleanUp() {
//   const [user, setUser] = useState(getUser());

//   return (
//     <div>
//         { user ?
//         <>
//           <Routes>
//             <Route path="/home" element={<Home user={user} setUser={setUser} />} />
         
//           </Routes>
//         </>
//         :
//         <SignUpForm setUser={setUser} />
//       }
//     </div>
//   );
// }

// export default CleanUp;
import React from 'react'

function CleanUp() {
  return (
    <div>CleanUp</div>
  )
}

export default CleanUp