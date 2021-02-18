import React from 'react';
import './StoryReel.css'

// component
import Story from './Story/Story';

// images (profile)
import oj from '../../../img/story/oj.jpeg';
import claudinelonget from '../../../img/story/claudinelonget.jpg';
import raecarruth from '../../../img/story/raecarruth.jpg';
import sid from '../../../img/story/sid.jpg';
import snoop from '../../../img/story/snoop.jpg';

// images (story)
import frontEnd from '../../../img/story/storyImage/front-end.jpg'
import html from '../../../img/story/storyImage/html.jpg'
import js from '../../../img/story/storyImage/js.jpg'
import css from '../../../img/story/storyImage/css.jpg'
import frontEndSteps from '../../../img/story/storyImage/front-end-steps.jpg'

const StoryReel = () => {
    return (
        <div className="storyReel">
            <Story 
                image={frontEnd}
                profileSrc={oj}
                title="oj simpson"
            />
            <Story 
                image={html}
                profileSrc={claudinelonget}
                title="claudinlonget"
            />
            <Story 
                image={js}
                profileSrc={raecarruth}
                title="raecarruth"
            />
            <Story 
                image={css}
                profileSrc={sid}
                title="sid"
            />
            <Story 
                image={frontEndSteps}
                profileSrc={snoop}
                title="snoop"
            />
        </div>
    )
}

export default StoryReel;
