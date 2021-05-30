import React from 'react';
import {Route} from 'react-router';
import Home from './Pages/Home';
import Upload from './Pages/Upload';
import Generate from './Pages/Generate';
import Layout from './components/Layout';

const App =() =>{
    return(
        <Layout>
       
            <Route exact path="/" component={Home} />
            <Route exact path="/generate" component={Generate} />
            <Route exact path="/upload" component={Upload} />
         
        </Layout>
    )
}
export default  App;