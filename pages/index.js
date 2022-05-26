import Head from "next/head"
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { getProductsInCollection } from "../lib/shopify"
import ProductList from "../components/ProductList"
import Hero from '../components/Hero'


export default function Home({ products }) {

  return (
    <div className=''>
      <Head>
        <title>Bell Bearings Shop</title>
        <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
        <meta httpEquiv="Content-Type" content="text/html; charset=ISO-8859-1" />
        <meta name="description" content="Modern eCommerce Development Course focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more." />
        <meta property="og:title" content="Bell Bearings Shop" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://bell-bearings-shop.vercel.app/" />
        <meta property="og:image" content="https://bell-bearings-shop.vercel.app/images/share.png" />
        <meta property="og:description" content="Modern eCommerce Development Course focusing on Shopify, Next.js, TailwindCSS, GraphQL. Additional topics include Storefront API, Static Site Generation, getStaticPaths, getStaticProps and more." />
        <meta property="og:locale" content="en_US" />
        <meta property="og:site_name" content="Bell Bearings Shop" />
      </Head>
      <Hero />
      <ProductList products={products}></ProductList>
    </div>
  );
}
export async function getStaticProps() {
  const products = await getProductsInCollection();
  return {
    props: { products }, // will be passed to the page component as props
  };
}