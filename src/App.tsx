import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Navbar } from './components/navbar/Navbar';
import { Analytics } from "@vercel/analytics/next"

function App() {

  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Analytics/> 
    </BrowserRouter>
  );
}

export default App
