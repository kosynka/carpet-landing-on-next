import Layout from '../components/layout';
import Header from '../components/header';
import Welcome from '../components/welcome';
import Service from '../components/service';
// import Example from '../components/example';
// import Price from '../components/price';
import Review from '../components/review';
// import Order from '../components/order';
import About from '../components/about';
import Footer from '../components/footer';

const Index = () => {
  return (
    <Layout pageTitle="Чистка ковров | kilem juu">
      <Header />
      <Welcome />
      <Service />
      {/* <Example />
      <Price /> */}
      <Review />
      {/* <Order /> */}
      <About />
      <Footer />
    </Layout>
  )
}

export default Index;
