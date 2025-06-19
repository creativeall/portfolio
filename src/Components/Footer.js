import React from 'react';
import {FaGithub, FaLinkedin} from "react-icons/fa";
import {GrMail} from "react-icons/gr";
import {SiLeetcode} from "react-icons/si"

const Footer = () => {
  return (
    <footer>
      <h4>Developed by Supriya Bhandari</h4>
      <h4>Copyright &copy; 2025 SB</h4>
      <div className='footerLinks'>
        <a href="https://github.com/creativeall" target='_blank' rel="noopener noreferrer"><FaGithub/></a>
        <a href="https://www.linkedin.com/in/supriya-bhandari-028917235/" target='_blank' rel="noopener noreferrer"><FaLinkedin/></a>
        <a href='mailTo:supriyabhandari1721@gmail.com' target='_blank' rel="noopener noreferrer"><GrMail/></a>
        <a href="https://leetcode.com/u/supriya99_/" target="_blank" rel="noopener noreferrer"><SiLeetcode/></a>
      </div>
    </footer>
  )
}

export default Footer