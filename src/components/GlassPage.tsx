import React from "react";
import './GlassPageStyle.css';
import { BsFillPeopleFill } from "react-icons/bs";

const GlassPage = () => {
  return (
    <main>
      <section className='glass'>
        <div className='dashboard'>
          <div className='user'>
            <BsFillPeopleFill />
            <h3>Seiya</h3>
            <p>Pro Member</p>
          </div>
          <div className='links'>
            <div className='link'>
              <BsFillPeopleFill />
              <h2>Streams</h2>
            </div>
            <div className='link'>
              <BsFillPeopleFill />
              <h2>Games</h2>
            </div>
            <div className='link'>
              <BsFillPeopleFill />
              <h2>News</h2>
            </div>
            <div className='link'>
              <BsFillPeopleFill />
              <h2>Libraries</h2>
            </div>
          </div>
        </div>
      </section>
      <div className="circle1"></div>
      <div className="circle2"></div>
    </main>
  );
};

export default GlassPage;
