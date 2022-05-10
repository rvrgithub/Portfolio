import React from 'react'
import styles from "./Styles/Project.module.css"
import Aos from 'aos'
import 'aos/dist/aos.css'

const Project=()=>{
    React.useEffect(()=>{
        Aos.init({});
    },[])
    return(
        <>

        <div className={styles.projectBanner} data-aos = 'zoom-in' data-aos-duration="1000" id="projects">

        <p data-aos = 'flip-up' data-aos-duration="1500">Projects</p>
        </div>

{/* ssense Project */}
        <div className={styles.toi}
          data-aos="fade-up" 
          data-aos-offset="120"
            // data-aos-delay="800"
            data-aos-duration="800"
            data-aos-easing="ease-in-out">
              <div>
<h3>ssense.com clone</h3>
                  <h5>SSENSE is a multi-brand retailer based in Montreal, Canada specialising in the sale of designer fashion and high end streetwear.</h5>
                  <p>
                      <div>Tools : React| Redux | HTML5 | CSS3 | ES6 JavaScript | NodeJs | MongoDB | npm packages | Herocku | Chakra UI

                      </div>
                      <div>Features :</div>
                      <div>
                          <ul>
                              <li>A collaborative project built by a team of 6,executed in a week.
                              <li>Worked on the frontend and backend Part</li>  
                              <li>Built authentication and integrated it with the frontend.</li>
                              <li>Users can register and login to the website, go to product Page and Apply some Filter And sorting Functionality</li>
                              <li>Users can add the product to cart/Wishlist and Checkout to Payment</li>
                              </li>
                          </ul>
                      </div>
                  </p>
                  
                  <div>
                        <button>
                        <a href='https://ssenseprojectclone.vercel.app/' target="_blank" rel="noreferrer">
                                DEMO
                        </a>
                     </button>
                      <button>
                         <a href='https://github.com/Rash6/ssense.com' target="_blank" rel="noreferrer">
                             VIEW CODE
                          </a>
                      </button>
                  </div>
              </div>
              
              <div>
                <img src='/ssense.jpg' alt='ssense.com'/>
              </div>

          </div>



        {/* Cb2 CLONE */}
          <div className={styles.toi} 
          data-aos="fade-up" 
          data-aos-offset="120"
            data-aos-delay="800"
            data-aos-duration="800"
            data-aos-easing="ease-in-out">
              <div>
                  <h3>Cb2 - Full stack online Ecommerce for Home decor and furniture</h3>
                  <p>
                      <div>Tools : HTML | CSS | Javascript | MongoDB | NodeJS | ExpressJS.</div>
                      <div>Features :</div>
                      <div>
                          <ul>
                              <li>A collaborative project built by a team of 3 members executed in 5 days.</li> 
                               <li>Built authentication and integrated it with the frontend.</li>
                                <li>Worked on the frontend and backend</li>  
                                <li>Implemented ‘sort by price’ and. Designed the'Checkout'page</li>                 
                          </ul>
                      </div>
                  </p>
                  
                  <div>
                      <button>
                        <a href='https://cb2clone.netlify.app/' target="_blank" rel="noreferrer">
                                DEMO
                        </a>
                     </button>
                     
                      <button>
                      <a href='https://github.com/somi-kumari/cb2.com-clone_U4' target="_blank" rel="noreferrer">
                      VIEW CODE
                        </a>
                    </button>
                  </div>
              </div>
              
              <div>
                <img src='/cb2.jpg' alt='cb2.com'/>
              </div>

          </div>

          

          {/* Tic-Tac-Toe */}

          <div className={styles.toi}
          data-aos="fade-up" 
          data-aos-offset="120"
            // data-aos-delay="800"
            data-aos-duration="800"
            data-aos-easing="ease-in-out">
              <div>
                  <h3>CB2 frontend- online Ecommerce for Home decor and furniture</h3>
                  <p>
                      <div>Tools : HTML | CSS | JavaScript | MongoDB</div>
                      <div>Features :</div>
                      <div>
                          <ul>
                              <li>A collaborative project built by a team of 5,executed in a week.
                              <li>Users can register and login to the website, go to product Page and Apply some Filter And sorting Functionality</li>
                              <li>Users can add the product to cart/Wishlist and Checkout to Payment</li>
                              </li>
                          </ul>
                      </div>
                  </p>
                  
                  <div>
                        <button>
                        <a href='https://cb2clone.netlify.app/' target="_blank" rel="noreferrer">
                                DEMO
                        </a>
                     </button>
                      <button>
                         <a href='https://github.com/Santhosh-1997/CB2.com-clone' target="_blank" rel="noreferrer">
                             VIEW CODE
                          </a>
                      </button>
                  </div>
              </div>
              
              <div>
                <img src='/cb1.jpg' alt='cb2.com'/>
              </div>

          </div>



          {/* Toggl Track CLONE */}
          <div className={styles.toi}
          data-aos="fade-up" 
          data-aos-offset="120"
            // data-aos-delay="800"
            data-aos-duration="800"
            data-aos-easing="ease-in-out">
              <div>
                  <h3>Youtube.com - Clone Project</h3>
                  <p>
                      <div>Tools : HTML | CSS | Javascript | youtube API | Git .</div>
                      <div>Features :</div>
                      <div>
                          <ul>
                              <li>this is my individual project was built by me and it was executed in 5 days.</li>
                              <li>using youtube API to fetch data for youtube clone</li>
                               <li>Search functionality,video zoom functionality.</li>
                          </ul>
                      </div>
                  </p>
                  
                  <div>
                        <button>
                        <a href='https://youtube-clone-indol.vercel.app/' target="_blank" rel="noreferrer">
                                DEMO
                        </a>
                     </button>
                      <button>
                         <a href='https://github.com/rvrgithub/youtube-clone' target="_blank" rel="noreferrer">
                             VIEW CODE
                          </a>
                      </button>
                  </div>
              </div>
              
              <div>
                <img src='/youtube.jpg' alt='youtube.com '/>
              </div>

          </div>

             {/* COUCHSURFING CLONE */}
             <div className={styles.toi}
             data-aos="fade-up" 
             data-aos-offset="120"
            //    data-aos-delay="800"
               data-aos-duration="800"
               data-aos-easing="ease-in-out">
              <div>
                  <h3>Mednear.com clone</h3>
                  <p>
                      <div>Tools : HTML | CSS | JavaScript</div>
                      <div>Features :</div>
                      <div>
                          <ul>
                            <li>Mednear is the Primary Online Pharmacy in India that provides prescription, Over-the-counter medicines, and generic medicines all over India.</li>
                            {/* <li>User can search any recipe in need in search input tag.</li> */}
                            {/* <li>User can interact with other users on the discussion board.</li> */}
                          </ul>
                      </div>
                     
                  </p>
                  
                  <div>
                  <button>
                        <a href='https://mednear.netlify.app/' target="_blank" rel="noreferrer">
                                DEMO
                        </a>
                     </button>
                      <button>
                          <a href='https://github.com/HrgChampion/Mednear-clone' target="_blank" rel="noreferrer">
                          VIEW CODE
                          </a>
                        </button>
                  </div>
              </div>
              
              <div>
                <img src='/mednear.jpg' alt='mednear_clone'/>
              </div>

          </div>



        </>
    )
}

export {Project}