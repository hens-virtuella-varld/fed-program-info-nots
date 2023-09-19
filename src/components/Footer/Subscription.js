import React from 'react';
import residenceOptions from '../../data/footerResidenceOptions.js';

const Subscription = () => {
  return (
    <div>
      <div>
        <div>
          <a href='https://www.hyperisland.com/' title='Hyper Island'>
            <svg
              width='161'
              height='20'
              viewBox='0 0 286 36'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                fill='#fff'
                fill-rule='nonzero'
                d='M86.12 20.34h10.53V15.2H86.12V6.85h11.34v-5.4H78.83v34.02h18.9v-5.13h-11.6v-10m-21.88-3.78h-3.78V6.84h3.5c2.53 0 3.8 1.72 3.8 5.13 0 3.06-1.18 4.6-3.52 4.6zm1.9-15.12H53.17v34.02h7.3V21.7h5.12c6.3 0 9.4-3.34 9.4-10 0-6.84-3-10.26-8.9-10.26zM112.3 16.3h-3.23V6.83h3.24c2.4 0 3.6 1.45 3.6 4.32 0 3.42-1.2 5.13-3.5 5.13zm4.33 2.42c4.3-.7 6.47-3.5 6.47-8.37 0-5.94-2.7-8.9-8.1-8.9h-12.95v34h7.02V21.43h1.9c3.22 0 4.94 1.7 5.1 5.13.2 5.4.37 8.37.56 8.9h7.02c-.55-1.07-.82-4.4-.82-9.98 0-3.96-2.07-6.2-6.2-6.75zM37.8 15.75l-5.13-14.3H25.1l8.92 22.13v11.88h7V23.58L50.5 1.44h-7.3l-5.38 14.3m171.4 7.03l3.24-14.58 3.5 14.5h-6.74zm-1.07-21.33l-9.46 34.02h7l1.9-7.56h9.7l1.9 7.56h7.5l-9.1-34.02h-9.48zm40.5 23.5l-8.9-23.5H230v34.02h6.76V10.62l9.18 24.84h9.45V1.44h-6.8v23.5m22.73 5.39h-3.5V6.83h3.77c3.2 0 4.8 3.9 4.8 11.62 0 7.92-1.7 11.88-5.17 11.88zm1.35-28.9H260.8v34.03h11.6c7.37 0 11.06-5.76 11.06-17.28 0-11.16-3.6-16.74-10.8-16.74zM167.5 16.3c-4.76-2.7-7.14-4.96-7.14-6.76 0-2.33 1.26-3.5 3.78-3.5 2.16 0 3.24 1.7 3.24 5.12h6.75C174.67 4.33 171.43.9 164.4.9c-7.36 0-11.05 3.24-11.05 9.72 0 3.6 2.34 6.85 7.02 9.72 4.68 2.88 7.02 5.13 7.02 6.75 0 2.5-1.2 3.7-3.5 3.7-2.7 0-4.1-2-4.1-5.96h-7C152.2 32.3 155.6 36 162.8 36c7.9 0 11.87-3.24 11.87-9.72 0-3.96-2.4-7.3-7.16-10M186 1.44h-7v34.02h17.8V29.8H186V1.43m-44.54 34.03h7.02V1.44h-7.02M15.12 15.2h-8.1V1.45H0v34.02h7.02V20.34h8.1v15.12h7.02V1.44h-7.02V15.2'
              ></path>
            </svg>
          </a>
        </div>
        <div>
          <span>
            <p>
              Hyper Island designs learning experiences that challenge companies
              and individuals to grow and stay competitive in an increasingly
              digitized world.
            </p>
          </span>
        </div>
      </div>
      <div>
        <div>
          <form
            action='https://forms.hsforms.com/submissions/v3/public/submit/formsnext/multipart/1588780/937f316e-f218-4311-a58f-9abf942e3e9a'
            method='post'
          >
            <div>
              <div>
                <input
                  type='email'
                  data-error='no-error'
                  data-prefix='no-prefix'
                  name='email'
                  placeholder='Your email*'
                  required=''
                  value=''
                />
              </div>
            </div>
            <div>
              <div>
                <div>
                  <label for='country_of_residence'>
                    <span>Country of residence</span>
                  </label>
                  <div>
                    <select
                      id='country_of_residence'
                      name='country_of_residence'
                      required=''
                    >
                      <option selected='' disabled='' value=''>
                        ---
                      </option>
                      {residenceOptions.map((residenceOption, index) => (
                        <option
                          key={`residenceOption-${index}`}
                          value={residenceOption.code}
                        >
                          {residenceOption.residence}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div>
                <span>
                  Our monthly issue that covers a specific topic and gives you
                  the latest from Hyper Island
                </span>
              </div>
              <div>
                <label for='newsletter'>
                  <div>
                    <input
                      type='checkbox'
                      id='newsletter'
                      name='newsletter'
                      value='true'
                    />
                    <div>For individuals - Lifelong Learning newsletter</div>
                  </div>
                </label>
              </div>
            </div>
            <div>
              <div>
                <div>
                  <div>
                    <span>Our monthly guide to leadership and change</span>
                  </div>
                  <label for='newsletter___empowered'>
                    <div>
                      <input
                        type='checkbox'
                        id='newsletter___empowered'
                        name='newsletter___empowered'
                        value='true'
                      />
                      <div>For companies - Empowered newsletter</div>
                    </div>
                  </label>
                </div>
              </div>
            </div>
            <div>
              <button type='submit'>
                <span>
                  <span>Subscribe</span>
                </span>
                <span></span>
              </button>
            </div>
            <div>
              <div>
                <span>
                  <span>
                    Hyper Island needs the contact information you provide to us
                    to contact you about our products and services. You may
                    unsubscribe from these communications at any time. See our{' '}
                    <a href='https://www.hyperisland.com/privacy-policy'>
                      privacy policy
                    </a>{' '}
                    for additional info. Email{' '}
                    <a href='mailto:privacyofficer@hyperisland.com'>
                      privacyofficer@hyperisland.com
                    </a>{' '}
                    to revoke any consent.
                  </span>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Subscription;
