import Cart from '@/Components/Cart/Cart';
import Products from '@/Components/Products/Products';
import '@/Stylesheets/Home.css'

export default function Home() {
  return (
    <>
    <div className='Home-Page'>
    <Cart/>
    <Products/>
    </div>
    </>
  );
}
