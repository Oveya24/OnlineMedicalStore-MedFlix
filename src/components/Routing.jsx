import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Loginpage from './Login/Loginpage'
import Signup from './Signup/Signup'
import Homepage from './Homepage/Homepage'
import Card from './cards/Coldcards'
import Cardd from './cards/Diabetes'
import Card3 from './cards/Feminine'
import Card4 from './cards/Fitcards'
import Card5 from './cards/Petscards'
import Homenav from './navbar/navbar'
import SearchPage from './Searchbar/Searchbar'
import Marquee from 'react-fast-marquee'
import hFoot from './Footers/Footers'



const Routing = () => {
  return (
    <>
     <Marquee >
        Your one-stop destination for all your healthcare needs. We're here to make your life healthier and happier. Explore our range of quality medicines and medical essentials from the comfort of your home.

At Medflix, your well-being is our priority. Trust us to deliver reliable and affordable healthcare solutions right to your doorstep.

Thank you for choosing Medflix. Here's to a healthier you!
</Marquee>
        <Homenav/>
        <SearchPage/>
    <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/signup' element={<Signup/>}/>
        <Route path='/login' element={<Loginpage/>}/>
        <Route path='/cold' element={<Card/>}/>
        <Route path='/diabetes' element={<Cardd/>}/>
        <Route path='/fem' element={<Card3/>}/>
        <Route path='/fit' element={<Card4/>}/>
        <Route path='/pet' element={<Card5/>}/>
    </Routes> 
    {hFoot()}
    </>   
  )
}

export default Routing
// App.js
// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// import Homepage from './Homepage/Homepage';
// import Loginpage from './Login/Loginpage';


// function App() {
//   return (
//     <Router>
//       <Switch>
//         <Route path="/" exact component={Homepage} />
//         <Route path="/home" component={Homepage} />
//         <Route path="/login" component={Loginpage} />
       
//       </Switch>
//     </Router>
//   );
// }

// export default App;
