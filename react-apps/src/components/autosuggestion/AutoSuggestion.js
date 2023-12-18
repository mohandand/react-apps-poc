import React, { useState, useEffect } from 'react';
import './autosuggestion.css';

export default function AutoSuggestion() {
  const [suggestionList, setSuggestionList] = useState([]);
  const [showList, setShowList] = useState(true);
  const [inputVal, setInputVal] = useState('');
  const [activeSuggestion, setActiveSuggestion] = useState(0);

  const src = ["Apple", "Batsmen", "Football", "Cricket", "Diamond"];

  function handleSelectItem(item) {
    setShowList(false);
    setInputVal(item);
  }

  function handleKeyDown(e) {
    if (e.key === 'Enter' && suggestionList.length > 0) {
      setInputVal(suggestionList[activeSuggestion]);
      setShowList(false);
    } else if (e.key === 'ArrowUp') {
      setActiveSuggestion((prev) => (prev > 0 ? prev - 1 : suggestionList.length - 1));
    } else if (e.key === 'ArrowDown') {
      setActiveSuggestion((prev) => (prev < suggestionList.length - 1 ? prev + 1 : 0));
    }
  }

  function handleChange(e) {
    let searchVal = e.target.value;
    setInputVal(searchVal);

    let filteredRes = src.filter((item) => {
      return item.toLowerCase().indexOf(searchVal.toLowerCase()) > -1;
    });

    setSuggestionList(filteredRes);
    setShowList(true);
    setActiveSuggestion(0);
  }

  const filterListComponent = () => {
    if (suggestionList.length === 0 || !showList || inputVal === '') {
      return null;
    }
    return (
      <div className='display-list'>
        {suggestionList.map((item, index) => (
          <div
            className={`li-item ${index === activeSuggestion ? 'activee' : ''}`}
            key={index}
            onClick={() => handleSelectItem(item)}
          >
            {item}
          </div>
        ))}
      </div>
    );
  };

  // Close the suggestion list when clicking outside the component
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest('.container')) {
        setShowList(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <div className='container'>
      <h2>AutoSuggestion</h2>
      <input
        type="text"
        placeholder="Enter value"
        className="auto-input"
        value={inputVal}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
      {filterListComponent()}
    </div>
  );
}
