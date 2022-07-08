import Layout from '../components/layout';
import Header from '../components/header';
import Welcome from '../components/welcome';
import Problem from '../components/problem';
import CleaningProcess from '../components/cleaning_process';
import Example from '../components/example';
import Price from '../components/price';
import Review from '../components/review';
import Order from '../components/order';
import About from '../components/about';
import Footer from '../components/footer';

const Index = () => {
  return (
    <Layout pageTitle="Чистка ковров | kilem juu">
      <Header />
      <Welcome />
      <Problem />
      <CleaningProcess />
      <Example />
      <Price />
      <Review />
      <Order />
      <About />
      <Footer />
    </Layout>
  )
}

export default Index;
