import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

import { NavLink } from 'react-router-dom';

import './styles.css'

/**
 * TODO: Ticket 1:
 * Implement structure and styles of the Landing page using Tailwind
 * Implement any button functionality implied by the landing page screenshot example (tickets/examples)
 */
export const LandingPage = () => {
  const navigate = useNavigate();
  const { downloadCSV } = useDownloadData();

  const scrollToTop = () => {
    let scrollStep = -window.scrollY / 20; // Adjust the divisor for speed
    let scrollInterval = setInterval(() => {
      if (window.scrollY === 0) {
        clearInterval(scrollInterval);
      } else {
        window.scrollBy(0, scrollStep);
      }
    }, 10); // Adjust the interval time for smoothness
  };

  const handleReadMore = () => {
    // TODO: navigate to the humanrightsfirst.org homepage
  };

  return (
    <div className='flex-c w-[100vw] secondary-c'>
      {/* Landing Page
      <div>{'Type this into Canvas: ' + decodeBase64('VGltZTJDb2RlIQ==')}</div> */}
      <div id="title">
        <h1 id="big-text">Asylum Office Grant Rate Tracker</h1>
        <h3 id="small-text">The Asylum Office Grant Rate Tracker provides asylum seekers, researchers, policymakers, and the public an interactive tool to explore USCIS data on Asylum Office decisions</h3>
      </div>
      <div id="pictures-container">
        <div>
          <img className="images" src={barGraph} alt="barGraph image"/>
          <h3 className="pictures-text">Search Grant Rates By Office</h3>
        </div>
       <div>
        <img className="images" src={pieChart} alt="pieChart image"/>
        <h3 className="pictures-text">Search Grant Rates By Nationality</h3>
       </div>
       <div>
        <img className="images" src={lineGraph} alt="lineGraph image"/> 
        <h3 className="pictures-text">Search Grant Rates Over Time</h3>
       </div>
      </div>
      <div id="buttons">
        <NavLink className="butt" to="/graphs">View the Data</NavLink>
        <button onClick={downloadCSV} className="butt">Download the Data</button>
      </div>
    </div>
  );
};
