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
import StopWatch from './components/stopwatch/StopWatch';
import AutoSuggsetion from './components/autosuggestion/AutoSuggestion';
import ParentComponent from './components/usecontext/ParentComponent';
import TableFilter from './components/tablefilter/TableFilter';
import DragAndDrop from './components/draganddrop/DragAndDrop';
import EditableTable from './components/editable-table/EditableTable';
import NavBar from './components/navbar/NavBar';
import PromiseDemo from './components/promise-demo/PromiseDemo';
import DataComponentWithFetch from './components/higher-order-component/DataComponentWithFetch';
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
              <Link className="link-button" to="/tableoperations">TableSort</Link>
            </button>
            <button>
              <Link className="link-button" to="/tablefilter">TableFilter</Link>
            </button>
            <button>
              <Link className="link-button" to="/editabletable">EditableTable</Link>
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
              <Link className="link-button" to="/stopwatch">StopWatch</Link>
            </button>
            <button>
              <Link className="link-button" to="/autosuggestion">AutoSuggestion</Link>
            </button>
            <button>
              <Link className="link-button" to="/usecontext">UseContext</Link>
            </button>
            <button>
              <Link className="link-button" to="/draganddrop">DragAndDrop</Link>
            </button>
            <button>
              <Link className="link-button" to="/navbar">NavBar</Link>
            </button>
            <button>
              <Link className="link-button" to="/promisedemo">PromiseDemo</Link>
            </button>
            <button>
              <Link className="link-button" to="/hoc">HOC Demo</Link>
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
          <Route path="/stopwatch" element={<StopWatch />} />
          <Route path="/autosuggestion" element={<AutoSuggsetion />} />
          <Route path="/usecontext" element={<ParentComponent />} />
          <Route path="/tablefilter" element={<TableFilter />} />
          <Route path="/draganddrop" element={<DragAndDrop />} />
          <Route path="/editabletable" element={<EditableTable />} />
          <Route path="/navbar" element={<NavBar />} />
          <Route path="/promisedemo" element={<PromiseDemo />} />
          <Route path="/hoc" element={<DataComponentWithFetch />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
