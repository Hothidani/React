import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Navigation from './Navigation';
import Home from './Home'
import About from './About';
import Service from './Service';
import Contact from './Contact';
import AllProduct from './AllProduct';

const Routers = [			
	{		
		path : '/',	
		exact : true,	
		main : ()=> <Home />	
	},		
	{		
		path : '/About',	
		exact : true,	
		main : ({match})=> <About match={match} />	
	},
    {		
		path : '/Contact',	
		exact : true,	
		main : ({match})=> <Contact match={match} />
	}
		, 
		  {		
			path : '/Service',	
			exact : true,	
			main : ({match})=> <Service match={match} />
		},  {		
			path : '/AllProduct',	
			exact : true,	
			main : ({match})=> <AllProduct match={match} />
		}
			


]	

export default Routers
