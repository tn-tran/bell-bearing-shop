import "../styles/globals.css";
import Layout from "../components/Layout";
import ShopProvider from "../context/shopContext";
import { useRouter } from 'next/router'
import 'swiper/scss'
import 'swiper/scss/navigation'
import 'swiper/scss/pagination'

function MyApp({ Component, pageProps }) {
  const router = useRouter()

  return (
    <ShopProvider>
      <Layout>
        <Component {...pageProps} key={router.asPath} />
      </Layout>
    </ShopProvider>
  );
}

export default MyApp;
