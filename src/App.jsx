import Router from './router'; 
import { ProductsProvider } from './context/ProductsProvider '; 

function App() {
  return (
    <ProductsProvider>
      <Router />
    </ProductsProvider>
  );
}

export default App;

