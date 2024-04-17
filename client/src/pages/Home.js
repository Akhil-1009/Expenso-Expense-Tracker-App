import React from 'react'
import DefaultLayout from '../component/DefaultLayout';
import NavBar from '../component/NavBar';
import Hero from  '../component/Hero';
function Home() {
    return (
           <>
           <NavBar/>
            {/* <DefaultLayout>
            <h1> this is Home page</h1>
            </DefaultLayout> */}
            <Hero>
              </Hero>
            </>
    )
}

export default Home;

 
 
