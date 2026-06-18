import { useState, useEffect } from 'react';
import Home from './pages/Home';
import { MockPayment } from './sections/MockPayment';

function App() {
  const [isMockPayment, setIsMockPayment] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    if (params.get('mock_payment') === 'true') {
      setIsMockPayment(true);
    }
  }, []);

  const handleSimulatePayment = (success: boolean) => {
    const randomBillCode = 'TP-' + Math.floor(100000 + Math.random() * 900000);
    const statusId = success ? '1' : '3';
    window.location.href = window.location.origin + window.location.pathname + `?status_id=${statusId}&billcode=${randomBillCode}`;
  };

  if (isMockPayment) {
    return <MockPayment onSimulatePayment={handleSimulatePayment} />;
  }

  return <Home />;
}

export default App;
