import Layout from '../components/layout';
import Header from '../components/header';
import Hero from '../components/hero';
import Feature from '../components/feature';
import Service from '../components/service';
import About from '../components/about';
import Footer from '../components/footer';

const Index = () => {
  return (
    <Layout pageTitle="Landing Page">
      <Header />
      <Hero />
      <Feature />
      <Service />
      <About />
      <Footer />
    </Layout>
  )
}

export default Index;
