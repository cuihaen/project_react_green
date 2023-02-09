import React from 'react';
//import {Redirect} from 'react-router';

import MainContent from '../pages/MainContent.js';
import About from '../pages/About.js';
import Management from '../pages/management.js';
import Gallery from '../pages/Gallery';
import Plants from '../pages/plants.js';

const Routes = [
    {
        path: '/react' ,
        exact:true,
        // component: () => <Redirect to="/MainContent" />
        component: () => <MainContent />
    },
   {
       path: '/react/about' ,
       component: () => <About />
   },
   {
        path: '/react/management' ,
        component: () => <Management />
    },
    {
        path: '/react/plants' ,
        component: () => <Plants />
    },
    {
        path: '/react/gallery' ,
        component: () => <Gallery />
    }
];

export default Routes;
