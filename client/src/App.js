import React from 'react'
import { Route, Switch } from 'react-router-dom'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faFacebookF, faPinterestP, faInstagram, faTwitter, faWordpress } from '@fortawesome/free-brands-svg-icons';
import { faPallet, faCube, faMobileAlt, faPencilAlt, faGlobeAmericas, 
         faVectorSquare, faCalculator, faQuestion, faIceCream } from '@fortawesome/free-solid-svg-icons'

import { Navbar } from './Components'
import { Home, Products, AboutUs, News, Contact, Shop, AddingThings } from './Pages'
// submenus
import { TheGoldOne, ThePastelOne, TheExoticOne, TheChocolateOne, TheSingleOne} from './Pages'

library.add(faFacebookF, faPinterestP, faInstagram, faTwitter, faWordpress, faPallet, faCube, 
            faMobileAlt, faPencilAlt, faGlobeAmericas, faVectorSquare, faCalculator, faQuestion,
            faIceCream)

function App() {

  return (
  <>
  <Navbar />
    <Route path='/' render={({ match: { path }})=> 
      <>
        <Switch>
          <Route path={`${path}/`} component={Home} />
          <Route path={`${path}thegoldone`} component={TheGoldOne} />
          <Route path={`${path}thepastelone`} component={ThePastelOne} />
          <Route path={`${path}theexoticone`} component={TheExoticOne} />
          <Route path={`${path}thechocolateone`} component={TheChocolateOne} />
          <Route path={`${path}thesingleone`} component={TheSingleOne} />
       </Switch> 
      </>} 
    />

    <Route path='/home' component={Home} />
    <Route path='/products' component={Products}  exact/>
    <Route path='/about' component={AboutUs}  exact/>
    <Route path='/news' component={News}  exact/>
    <Route path='/contact' component={Contact}  exact/>
    <Route path='/shop' component={Shop}  exact/>
    <Route path='/add' component={AddingThings}  exact/>

  </>
  );
}

export default App;