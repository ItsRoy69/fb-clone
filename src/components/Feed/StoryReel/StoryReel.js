import React from 'react';
import Story from './Story/Story';
import './StoryReel.css';

const img =
  'https://bi.im-g.pl/im/0b/a2/18/z25829387V,las--zdjecie-ilustracyjne---Od-3-kwietnia-obowiazu.jpg';

  function StoryReel() {
    return (
      <div className="storyReel">
       <Story
          image="https://s.itl.cat/pngfile/s/9-95269_hd-portrait-wallpapers-1080p-hd-wallpapers-portrait-1080p.jpg"
          profileSrc="https://media-exp1.licdn.com/dms/image/C4E03AQFo7uJ5y5Sujw/profile-displayphoto-shrink_800_800/0/1630333610122?e=1637798400&v=beta&t=oR-iDDyMUNRyvPdEG8lhmAKyF9CjB6pDBcf194VnYrM"
          title="Tamal Das"
        />

        <Story
           image="https://i.pinimg.com/564x/b5/41/8d/b5418dcc2ab6efa7fe51d8bffd385343.jpg"
           profileSrc="https://avatars.githubusercontent.com/u/72944979?v=4"
           title="Debadyuti Paul"
         />

         <Story
            image="https://s.itl.cat/pngfile/s/9-95269_hd-portrait-wallpapers-1080p-hd-wallpapers-portrait-1080p.jpg"
            profileSrc="https://media-exp1.licdn.com/dms/image/C4E03AQFo7uJ5y5Sujw/profile-displayphoto-shrink_800_800/0/1630333610122?e=1637798400&v=beta&t=oR-iDDyMUNRyvPdEG8lhmAKyF9CjB6pDBcf194VnYrM"
            title="Tamal Chowdhury"
          />

          <Story
             image="https://i.pinimg.com/564x/b5/41/8d/b5418dcc2ab6efa7fe51d8bffd385343.jpg"
             profileSrc="https://avatars.githubusercontent.com/u/72944979?v=4"
             title="Debadyuti Lahiri"
           />

           <Story
              image="https://s.itl.cat/pngfile/s/9-95269_hd-portrait-wallpapers-1080p-hd-wallpapers-portrait-1080p.jpg"
              profileSrc="https://media-exp1.licdn.com/dms/image/C4D03AQErxVj2Axa0GA/profile-displayphoto-shrink_800_800/0/1602711361670?e=1637798400&v=beta&t=rmvY_40CabKC93Fam61PpLbSVkqGefG1e9ftRUFbOWI"
              title="Parna Sarkar"
            />





      </div>
    )
  }

  export default StoryReel;
