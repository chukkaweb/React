import React from 'react';
import './App.css';
import Top30 from './app/vibe/components/top30';
import VibeFeed from './app/vibe/components/vibefeed';
import VibeHeader from './app/vibe/components/vibeheader';

function App() {
  return (
   <React.Fragment>
     <div className="vibe_background">
        <VibeHeader />
        <Top30 />
        <VibeFeed />
     </div>
     
   </React.Fragment>
  );
}

export default App;
