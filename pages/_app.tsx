import Layout from '../components/Layout/Layout';
import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import { useEffect, useState } from 'react';
import axios from 'axios';
import { IPost } from '../models/IPost';

function MyApp({ Component, pageProps }: AppProps) {

    const [posts, setPosts] = useState<IPost>();

    useEffect(() => {

        axios.get('https://jsonplaceholder.typicode.com/posts/1')
            .then(res => {
                console.log(res.data);
                setPosts(res.data);
            });
    }, []);

    return(
      <>
          <Layout>
              <Component {...pageProps} />
          </Layout>
      </>
    );
}

export default MyApp
