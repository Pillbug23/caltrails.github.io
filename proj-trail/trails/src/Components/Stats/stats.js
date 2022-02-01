import React from 'react';
import './stats.css';

class Stats extends React.Component {
    render() {
        return (
            <div className='container'>
                <div className="container-first">
                    <div className='stat'>
                        900k+
                    </div>
                    <div className="stat-submodule">
                        Bay Area Trails
                    </div>
                    <div className="stat-description">
                        Discover new trails, the Bay Area has much to do!
                    </div>
                </div>
                <div className="container-second">
                    <div className='stat'>
                        25 mil
                    </div>
                    <div className="stat-submodule">
                        Bay Area Users
                    </div>
                    <div className="stat-description">
                        Share your adventures around the bay!
                    </div>
                </div>
                <div className="container-third">
                    <div className='stat'>
                        800 mil
                    </div>
                    <div className="stat-submodule">
                        Logged Miles
                    </div>
                    <div className="stat-description">
                        Stay fit and get lit!
                    </div>
                </div>
            </div>
            );
    }
}

export default Stats
