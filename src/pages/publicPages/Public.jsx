import React from 'react'
import Hero from '../../components/content/publicPartials/Hero'
import Gallery from '../../components/content/publicPartials/Gallery'
import Contactus from '../../components/content/publicPartials/Contactus'
import Aboutus from '../../components/content/publicPartials/About'
import  Footer  from '../../components/content/generalPartials/Footer'

const Public = () => {
    const content = (
        <section>
            
            <Hero />
            <Aboutus />
            <Contactus />
            <Gallery />
            <Footer />
        </section>

    )

    return content
}

export default Public