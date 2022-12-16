import React from 'react'
import ReactDOM from 'react-dom/client'
import Follows from './components/follows'
import Header from './components/Header'
import Footer from "./components/Footer"
import "./css/tailwind.css"
import "./css/attribution.css"

import { default as communities } from "./images/icon-communities.svg"
import { default as messages } from "./images/icon-messages.svg"
import Descriptions from './components/Descriptions'

import illustrationFlow from "./images/illustration-flowing-conversation.svg"
import illustrationGrow from "./images/illustration-grow-together.svg"
import illustrationYour from "./images/illustration-your-users.svg"

import { default as sectionTop } from "./images/bg-section-top-desktop-1.svg"
import { default as sectionBottom } from "./images/bg-section-bottom-desktop-1.svg"
import Button from './components/Button'
import Attribution from './components/attribution'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Header />
    <section className='sm:flex'>
      <Follows img={communities} follow="1.4k+" text="Communities Formed" />
      <Follows img={messages} follow="2.7m+" text="Messages Sent" />
    </section>

    <Descriptions sectionTop={sectionTop} sectionBottom={sectionBottom} hidden="" textOrder={2} img={illustrationFlow} title="Grow Together" paragraph="Generate meaningful discussions with your audience and build a strong, loyal community. 
  Think of the insightful conversations you miss out on with a feedback form. 
" />
    <Descriptions hidden="hidden" textOrder={1} img={illustrationGrow} title="Flowing Conversations" paragraph="You wouldn't paginate a conversation in real life, so why do it online? Our threads have 
  just-in-time loading for a more natural flow.
" />
    <Descriptions sectionTop={sectionTop} sectionBottom={sectionBottom} hidden="" textOrder={2} img={illustrationYour} title="Your Users" paragraph="It takes no time at all to integrate Huddle with your app's authentication solution. This means, 
  once signed in to your app, your users can start chatting immediately.
" />
    <article className='flex flex-col items-center mt-32'>
      <h2>Ready to Build Your Community</h2>
      <Button />
    </article>

  <Footer />
  <Attribution />

  </React.StrictMode>
)
