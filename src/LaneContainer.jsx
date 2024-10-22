
import React, { useState } from 'react';
import './App.css'; // Import the CSS file
import SubredditLane from './SubredditLane';
import { useDispatch, useSelector } from 'react-redux';
import { addLane, removeLane } from './slices/laneSlice';

function LaneContainer() {
  const [subreddit, setSubreddit] = useState('');
  const dispatch = useDispatch();
  
  // Ensure lanes is always an array
  const lanes = Object.values(useSelector((state) => state.lanes))
    .filter((lane) => typeof lane === 'string');

  const handleAddLane = () => {
    if (subreddit && !lanes.includes(subreddit)) {
      dispatch(addLane(subreddit));
      setSubreddit('');
    }
  };

  const handleRemoveLane = (lane) => {
    dispatch(removeLane(lane));
  };

  return (
    <div className="lane-container-wrapper">
      <input
        type="text"
        value={subreddit}
        onChange={(e) => setSubreddit(e.target.value)}
        placeholder="Enter subreddit"
      />
      <button onClick={handleAddLane} disabled={!subreddit}>Add Lane</button>

      <div className="lane-container">
        {lanes.map((lane) => (
          <SubredditLane key={lane} subreddit={lane} onRemove={() => handleRemoveLane(lane)} />
        ))}
      </div>
    </div>
  );
}

export default LaneContainer;
