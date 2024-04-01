import React, { useContext } from 'react';

import {
  ImFacebook,
  ImTwitter,
  ImPinterest,
  ImInstagram,
  ImYoutube
} from 'react-icons/im'

import { CursorContext } from '../context/CursorContext';

const Socials = () => {

  const { mouseEnterHandler, mouseLeaveHandler } = useContext(CursorContext);

  return  <div className='hidden xl:flex ml-24'     
          onMouseEnter={mouseEnterHandler}
          onMouseLeave={mouseLeaveHandler}>
    <ul className='flex gap-x-4'>
      <li>
        <a href='https://www.facebook.com' target='__blank'> 
          <ImFacebook />
        </a>
      </li>
      <li>
        <a href='https://www.twitter.com' target='__blank'> 
          <ImTwitter />
        </a>
      </li>
      <li>
        <a href='https://www.pinterest.com' target='__blank'> 
          <ImPinterest />
        </a>
      </li>
      <li>
        <a href='https://www.instagram.com' target='__blank'> 
          <ImInstagram />
        </a>
      </li>
      <li>
        <a href='https://www.youtube.com' target='__blank'> 
          <ImYoutube />
        </a>
      </li>
    </ul>
  </div>;
};

export default Socials;
