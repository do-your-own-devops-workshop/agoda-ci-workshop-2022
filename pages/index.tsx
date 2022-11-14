import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import globalStyles from '@/pages/index.style';

import { useState } from 'react';

export default function Home() {

  const [location, setLocation] = useState('The Office at Central World');

  return (
    <div className='container'>
      <Head>
        <title>{`Agoda | Hotels in ${location} | Best Price Guarantee!`}</title>
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
                  value={location}
                  onChange={(event) => {
                    setLocation(event.target.value);
                  }}
                />
              </div>
            </div>
          </div>
          <button className='search-btn'>Search</button>
        </div>
      </div>

      <main>
        <div className='property-card'>
          <div className='property-card-container'>
            <Link href='/'>
              <div className='property-card-body'>
                <div className='property-card-image'>
                  <Image
                    src='/trump.jpg'
                    alt='Test Apartment'
                    fill={true}
                  />
                </div>
                <div className='property-card-info'>
                  <h3 className='property-card-info-name'>Test Apartment</h3>
                  <div className='property-card-info-subtitle'>
                    <div className='property-card-info-subtitle-stars'>
                      <svg role='img'>
                        <use href='#StarSymbolFillIcon'>
                          <symbol id='StarSymbolFillIcon' viewBox='0 0 24 24'>
                            <path d='m8.582 8.295-6.64.966-.084.019a.5.5 0 0 0-.193.833l4.804 4.684-1.134 6.613-.007.08a.5.5 0 0 0 .733.447L12 18.814l5.94 3.123.073.032a.5.5 0 0 0 .652-.559l-1.135-6.613 4.805-4.684.057-.065a.5.5 0 0 0-.334-.787l-6.641-.966-2.969-6.016a.5.5 0 0 0-.896 0l-2.97 6.016Z'></path>
                          </symbol>
                        </use>
                      </svg>
                    </div>
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
                      }}>Excellent</span>
                      <span style={{
                        fontSize: '12px',
                        lineHeight: '16px',
                        fontWeight: '400',
                        color: 'rgb(112, 112, 112)',
                      }}>20 reviews</span>
                    </div>
                    <div className='property-card-pricing-rating-right'>
                      <svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ 'transform': 'none' }}>
                        <path d="M23.25 12C23.25 5.787 18.213.75 12 .75S.75 5.787.75 12v11.25H12c6.213 0 11.25-5.037 11.25-11.25z" fill="rgb(62, 108, 234)"></path>
                      </svg>
                      <div className='property-card-pricing-rating-right-score'>8.4</div>
                    </div>
                  </div>
                  <div className='property-card-pricing-redbadge'>
                    <span>ONLY 2 LEFT</span>
                  </div>
                  <div className='property-card-pricing-crossedoutprice'>20</div>
                  <div className='property-card-pricing-price'>
                    <span className='property-card-pricing-price-currency'>฿</span>
                    <span className='property-card-pricing-price-price'>10</span>
                  </div>
                  <div className='property-card-pricing-freecancellation'>+ FREE CANCELLATION</div>
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
