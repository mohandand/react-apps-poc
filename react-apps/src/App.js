import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import TableOperations from './components/table/TableOperation';
import ToDo from './components/todo/ToDo'
import Calculator from './components/calculator/Calculator'
import TrafficLights from './components/trafficlights/TrafficLights';
import FormValidation from './components/formvalidation/FormValidation';
import Rating from './components/rating/Rating';
import InfiniteScroll from './components/infinitescroll/InfiniteScroll';
import Pagination from './components/pagination/Pagination';
import Accordion from './components/accordion/Accordion';
import Modal from './components/modal/Modal'
import CountDownTimer from './components/countdown/CountDownTimer';
import FormC from './components/form/FormC';

const App = () => {
  return (
    <Router>
      <div className= "app-list">
          <button>
              <Link className="link-button" to="/formvalidation">FormValidation</Link>
            </button>
            <button>
              <Link className="link-button" to="/calculator">Calculator</Link>
            </button>
            <button>
              <Link className="link-button" to="/todo">ToDo</Link>
            </button>
            <button>
              <Link className="link-button" to="/trafficlights">TrafficLights</Link>
            </button>
            <button>
              <Link className="link-button" to="/rating">Rating</Link>
            </button>
            <button>
              <Link className="link-button" to="/tableoperations">TableOperations</Link>
            </button>
            <button>
              <Link className="link-button" to="/infinitescroll">InfiniteScroll</Link>
            </button>
            <button>
              <Link className="link-button" to="/pagination">Pagination</Link>
            </button>
            <button>
              <Link className="link-button" to="/accordion">Accordion</Link>
            </button>
            <button>
              <Link className="link-button" to="/modal">Modal</Link>
            </button>
            <button>
              <Link className="link-button" to="/countdowntimer">CountDownTimer</Link>
            </button>
            <button>
              <Link className="link-button" to="/formc">FORM</Link>
            </button>
        <hr />  
        <Routes>
        <Route path="/formvalidation" element={<FormValidation />} />
           <Route path="/calculator" element={<Calculator />} />
           <Route path="/todo" element={<ToDo />} />
          <Route path="/tableoperations" element={<TableOperations />} />
          <Route path="/trafficlights" element={<TrafficLights />} />
          <Route path="/rating" element={<Rating />} />
          <Route path="/infinitescroll" element={<InfiniteScroll />} />
          <Route path="/pagination" element={<Pagination />} />
          <Route path="/accordion" element={<Accordion />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/countdowntimer" element={<CountDownTimer />} />
          <Route path="/formc" element={<FormC />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
