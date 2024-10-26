import HomeHero from '../Components/Home/HomeHero';
import Header from './Header';

export default function Home() {
  return (
    <div className="max-w-screen-xl mx-auto">
      <Header />
      <HomeHero />
    </div>
  );
}
