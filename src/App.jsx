import {
  Hero, PopularProducts, Footer, Services, SuperQuality, SpecialOffer,
  Subscribe, CustomerReviews

} from './Sections/index'
import { Nav } from './Components/Nav';

const App = () => (
  <main className="relative">
    <Nav></Nav>
    <section className="xl:padding-1 wide:padding-r padding-b">
      <Hero />
    </section>
    <section className="padding">
      <PopularProducts />
    </section>
    <section className="padding">
      <SuperQuality />
    </section>
    <section className="padding-x py-10">
      <Services></Services>
    </section>
    <section className="padding">
      <SpecialOffer></SpecialOffer>
    </section>
    <section className="bg-pale-blue padding">
      <CustomerReviews />
    </section>

    <section className="padding-x sm:py-32 py-16 w-full">
      <Subscribe></Subscribe>
    </section>

    <section className="bg-black padding-x padding-t pb-8">
      <Footer></Footer>
    </section>

  </main>
)

export default App;