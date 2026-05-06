import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes';
import { Navbar } from './components/navbar/Navbar';
import { Analytics } from "@vercel/analytics/next"

function App() {

  return (
    <BrowserRouter>
      <Analytics/>
      <Navbar />
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App
