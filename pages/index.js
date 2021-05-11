import React, {useState} from 'react';
import Head from 'next/head';
import styles from '../styles/Home.module.css';
import { ProductBanner } from '../components/product-banner';
import { Layout } from '../components/layout';
import { Nav } from '../components/nav';
import { ProductListingLayout } from '../components/product-listing-layout';
import { ProductListingInnerLayout } from '../components/productListing/product-listing-inner-layout';
import { getProducts } from '../lib/get-products';
import { CartContext } from '../util/CartContext'

export async function getStaticProps() {
    // console.log(await getProducts());
    const data = await getProducts();


    return{
        props: {
            data
        },
        revalidate: 300
    }

}

export default function Home({data}) {

  const [cartArr, setCartArr] = useState([]);

  return (
    <div className={styles.container}>
      <Head>
        <title>E-Commerce Solution</title>
        <link rel="icon" href="/favicon.ico" />
        <link href='https://fonts.googleapis.com/css?family=Archivo' rel='stylesheet' />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <CartContext.Provider value={{cartArr, setCartArr}}>
        <Nav />
        <Layout>
            <ProductBanner products={data} />

            <ProductListingLayout>
                <ProductListingInnerLayout products={data} />
            </ProductListingLayout>

        </Layout>
      </CartContext.Provider>


    </div>
  )
}
