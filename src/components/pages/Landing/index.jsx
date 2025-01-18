import pieChart from '../../../assets/pie-chart.png';
import lineGraph from '../../../assets/line-graph.png';
import barGraph from '../../../assets/bar-graph.png';
import paperStack from '../../../assets/paper-stack.jpg';
import { useNavigate } from 'react-router-dom';
import { useDownloadData } from '../../../hooks/useDownloadData.js';
import {decodeBase64} from '../../../utils/decodeBase64.js';

import { NavLink } from 'react-router-dom'; // Navlink for quick access to the graphs page

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
      <div id="paper-container">
        <img className="paper-image" src={paperStack}/>
        <p className="paper-text">Human Rights First has created a search tool to give you a user-friendly way to explore a data set of asylum decisions between FY 2016 and May 2021 by the USCIS Asylum Office, which we received through a Freedom of Information Act request. You can search for information on asylum grant rates by year, nationality, and asylum office, visualize the data with charts and heat maps, and download the data set.</p>
      </div>
      <h1 id="sdi-big-text">Systemic Disparity Insights</h1>
      <div id="insights-container">
        <div>
          <h2 className="percentage">36%</h2>
          <h3 className="insight-text">By the end of the Trump administration, the average asylum office grant rate had fallen 36% from an average of 44 percent in fiscal year 2016 to 28 percent in fiscal year 20202.</h3>
        </div>
        <div>
          <h2 className="percentage">5%</h2>
          <h3 className="insight-text">The New York asylum office grant rate dropped to 5 percent in fiscal year 2020.</h3>
        </div>
        <div>
          <h2 className="percentage">6x Lower</h2>
          <h3 className="insight-text">Between fiscal year 2017 and 2020, the New York asylum office's average grant rate was 6 times lower than the San Francisco asylum office.</h3>
        </div>
      </div>
      <div id="read-more-butt-container">
        <NavLink className="read-more-butt" to="https://humanrightsfirst.org/">Read More</NavLink>
      </div>
      <button className="back-to-top-butt" onClick={scrollToTop}>Back To Top ^</button>
    </div>
  );
};
