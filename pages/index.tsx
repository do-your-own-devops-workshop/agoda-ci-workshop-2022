import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import type { InferGetServerSidePropsType, GetServerSideProps } from 'next';

import { SearchApi } from './api/search';

import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import globalStyles from '@/pages/index.style';

import { useState } from 'react';

export const getServerSideProps: GetServerSideProps = async ({ res, query }) => {

  const data = await SearchApi(query['q']);

  return {
    props: {
      query: data.query,
      results: data.results,
    },
  }
}

export default function Home(props: InferGetServerSidePropsType<typeof getServerSideProps>) {

  const [query, setQuery] = useState(props.query ?? '');
  const [results, setResults] = useState<PropertySearchResult[]>(props.results ?? []);

  const doSearch = async function() {
    const res = await fetch(`/api/search?q=${query}`);
    setResults(await res.json());

    if (window.history.pushState) {
      var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + `?q=${query}`;
      window.history.pushState({ path: newurl }, '', newurl);
    }
  };

  return (
    <div className='container'>
      <Head>
        <title>{'Agoda | Hotels in The Office at Central World | Best Price Guarantee!'}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <header className='page-header'>
        <section className='page-header-section'>
          <div className='page-header-nav'>
            <Link href='/'>
              <div className='page-header-logo'>
                  <Image
                    src='/color-default.svg'
                    alt='Agoda'
                    width={89}
                    height={37}
                  />
              </div>
            </Link>
            <nav className='page-header-left-nav'>
              <Link href='/'>
                <div className='page-header-navbtn'>
                    <div className='page-header-navbtn-text'>Flight + Hotel</div>
                </div>
              </Link>
              <Link href='/'>
                <div className='page-header-navbtn'>
                    <div className='page-header-navbtn-text'>Hotels + Homes</div>
                </div>
              </Link>
              <Link href='/'>
                <div className='page-header-navbtn'>
                    <div className='page-header-navbtn-text'>Flights</div>
                </div>
              </Link>
              <Link href='/'>
                <div className='page-header-navbtn'>
                    <div className='page-header-navbtn-text'>Coupons & Deals</div>
                </div>
              </Link>
              <Link href='/'>
                <div className='page-header-navbtn'>
                    <div className='page-header-navbtn-text'>
                      <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fontSize: 20, verticalAlign: 'middle', marginRight: 4 }}>
                        <path fillRule="evenodd" d="M12 2c5.523 0 10 4.477 10 10 0 5.43-4.327 9.848-9.72 9.996L12 22a10 10 0 0 1-9-5.637l-.08-.169A9.963 9.963 0 0 1 2 12C2 6.477 6.477 2 12 2zm-.5 12h-3v4h3v-4zm4 0h-3v4h3v-4zm-4-5c-1.624.274-2.84 1.632-2.985 3.272l-.012.19L8.5 13h3V9zm1 0v4h3v-.508l-.01-.193c-.129-1.593-1.265-2.917-2.796-3.261L12.5 9zM12 3.5a8.5 8.5 0 0 0-8.485 9.014L12 4.5l8.485 8.013A8.5 8.5 0 0 0 12 3.5z"></path>
                      </svg>
                      <span>Apartments</span>
                    </div>
                </div>
              </Link>
              <Link href='/'>
                <div className='page-header-navbtn'>
                    <div className='page-header-navbtn-text'>Activities</div>
                </div>
              </Link>
              <Link href='/'>
                <div className='page-header-navbtn'>
                    <div className='page-header-navbtn-text'>
                      <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" style={{ fontSize: 20, verticalAlign: 'middle' }}>
                        <path fillRule="evenodd" style={{ fill: 'rgb(42, 42, 46)' }} d="M20 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zM4 10a2 2 0 1 1 0 4 2 2 0 0 1 0-4zm8 0a2 2 0 1 1 0 4 2 2 0 0 1 0-4z"></path>
                      </svg>
                    </div>
                </div>
              </Link>
            </nav>
          </div>
        </section>
      </header>

      <div className='topbar'>
        <div className='searchbox-container'>
          <div className='input-with-icon'>
            <div className='input-with-icon-inner'>
              <i className='input-with-icon-icon bi-search'></i>
              <div className='input-with-icon-textinput'>
                <input
                  type='text'
                  className=''
                  placeholder='Enter a destination or property'
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  onKeyUp={(event) => {
                    if (event.key !== 'Enter') return;
                    doSearch();
                  }}
                />
              </div>
            </div>
          </div>
          <button
            className='search-btn'
            onClick={() => doSearch()}
          >Search</button>
        </div>
      </div>

      <main>
        {results.map((property, idx) => 
          <div className='property-card' key={`property-card-${idx}`}>
            <div className='property-card-container'>
              <Link href='/'>
                <div className='property-card-body'>
                  <div className='property-card-image'>
                    <Image
                      src={property.image}
                      alt={property.name}
                      fill={true}
                      sizes='100vw'
                    />
                  </div>
                  <div className='property-card-info'>
                    <h3 className='property-card-info-name'>{property.name}</h3>
                    <div className='property-card-info-subtitle'>
                      {Array.from({ length: +(property.score / 2) }, _ => 0).map((_, idx2) =>
                        <div className='property-card-info-subtitle-stars' key={`property-card-${idx}-${idx2}`}>
                          <svg role='img'>
                            <use href='#StarSymbolFillIcon'>
                              <symbol id='StarSymbolFillIcon' viewBox='0 0 24 24'>
                                <path d='m8.582 8.295-6.64.966-.084.019a.5.5 0 0 0-.193.833l4.804 4.684-1.134 6.613-.007.08a.5.5 0 0 0 .733.447L12 18.814l5.94 3.123.073.032a.5.5 0 0 0 .652-.559l-1.135-6.613 4.805-4.684.057-.065a.5.5 0 0 0-.334-.787l-6.641-.966-2.969-6.016a.5.5 0 0 0-.896 0l-2.97 6.016Z'></path>
                              </symbol>
                            </use>
                          </svg>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className='property-card-pricing'>
                    <div className='property-card-pricing-rating'>
                      <div className='property-card-pricing-rating-left'>
                        <span style={{
                          fontSize: '14px',
                          lineHeight: '20px',
                          fontWeight: '500',
                          color: 'rgb(42, 42, 46)',
                        }}>
                          {property.score > 9
                          ? 'Exceptional'
                          : property.score > 8
                          ? 'Excellent'
                          : property.score > 6
                          ? 'Very Good'
                          : property.score > 4
                          ? 'Good'
                          : 'Nah'}
                        </span>
                        <span style={{
                          fontSize: '12px',
                          lineHeight: '16px',
                          fontWeight: '400',
                          color: 'rgb(112, 112, 112)',
                        }}>{property.nbr_of_reviews} reviews</span>
                      </div>
                      <div className='property-card-pricing-rating-right'>
                        <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 'transform': 'none' }}>
                          <path d="M23.25 12C23.25 5.787 18.213.75 12 .75S.75 5.787.75 12v11.25H12c6.213 0 11.25-5.037 11.25-11.25z" fill="rgb(62, 108, 234)"></path>
                        </svg>
                        <div className='property-card-pricing-rating-right-score'>{property.score}</div>
                      </div>
                    </div>
                    {property.additional_label && 
                    <div className='property-card-pricing-redbadge'>
                      <span>{property.additional_label}</span>
                    </div>
                    }
                    <div className='property-card-pricing-crossedoutprice'>{property.price.toLocaleString()}</div>
                    <div className='property-card-pricing-price'>
                      <span className='property-card-pricing-price-currency'>฿</span>
                      <span className='property-card-pricing-price-price'>{(property.price * property.discount / 100).toLocaleString()}</span>
                    </div>
                    {property.free_cancellation &&
                    <div className='property-card-pricing-freecancellation'>+ FREE CANCELLATION</div>
                    }
                    <button className='property-card-pricing-selectroom-btn'>
                      <span>Select room</span>
                      <svg width="1em" height="1em" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M15.485 12L6.293 2.808a1 1 0 0 1 1.414-1.415l9.9 9.9a1 1 0 0 1 0 1.414l-9.9 9.9a1 1 0 0 1-1.414-1.415L15.485 12z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        )}
      </main>

      {/* <footer className='footer'>
        <a
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <span className='logo'>
            <Image src='/vercel.svg' alt='Vercel Logo' width={72} height={16} />
          </span>
        </a>
      </footer> */}

      <style jsx global>
        {globalStyles}
      </style>
    </div>
  )
}
