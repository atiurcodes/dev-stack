import { Suspense, useState } from 'react';
import './App.css'
import type { TechnologyType } from './TechnologiesType';
import Navbar from './Navbar';
import Banner from './Banner';
import Technologies from './components/Technologies';
import Footer from './Footer';

const promiseData = async (): Promise<TechnologyType[]> => {
  const res = await fetch('data.json');
  const data = await res.json();
  return data;
}

function App() {
  const [fetchTechnologies] = useState(() => promiseData());

  return (
    <div>
      <Navbar />
      <Banner />
      <Suspense fallback={<p className='container mx-auto text-center'>Data loading...</p>}>
        <Technologies fetchTechnologies={fetchTechnologies} />
      </Suspense>
      <Footer />
    </div>
  )
}

export default App
