import React, { useState } from 'react';
import Customer1 from '../assets/Customer1.png';
import Customer2 from '../assets/Customer2.png';
import Customer3 from '../assets/Customer3.png';
import Icon1 from '../assets/icon1.png';
import Icon2 from '../assets/Icon2.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons'; 

const feedback = [ // Sample feedback data
  [
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, iste officia doloremque,debitis illo suscipit consequatur sunt blanditiis totam voluptatibus consequuntur beatae provident perferendis assumenda laboriosam exercitationem! Aspernatur, quo magni!",
      customerName: "Floyd Miles",
      customerImage: Customer1,
      rating: 4,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora odit sint magnam ratione qui illo aperiam omnis eum,magni provident saepe sit dolor! Eos ullam fuga, cupiditate necessitatibus nobis id ea dolor vero molestias perspiciatis?",
      customerName: "Ronald Richards",
      customerImage: Customer2,
      rating: 5,
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, iste officia doloremque, debitis illo suscipit consequatur sunt blanditiis totam voluptatibus consequuntur beatae provident perferendis assumenda laboriosam exercitationem! Aspernatur, quo magni!",
      customerName: "Savannah Nguyen",
      customerImage: Customer3,
      rating: 3,
    }
  ],
  [
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, iste officia doloremque,debitis illo suscipit consequatur sunt blanditiis totam voluptatibus consequuntur beatae provident perferendis assumenda laboriosam exercitationem! Aspernatur, quo magni!",
      customerName: "Floyd Miles",
      customerImage: Customer1,
      rating: 4,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora odit sint magnam ratione qui illo aperiam omnis eum,magni provident saepe sit dolor! Eos ullam fuga, cupiditate necessitatibus nobis id ea dolor vero molestias perspiciatis?",
      customerName: "Ronald Richards",
      customerImage: Customer2,
      rating: 5,
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, iste officia doloremque, debitis illo suscipit consequatur sunt blanditiis totam voluptatibus consequuntur beatae provident perferendis assumenda laboriosam exercitationem! Aspernatur, quo magni!",
      customerName: "Savannah Nguyen",
      customerImage: Customer3,
      rating: 3,
    }
  ],
  [
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, iste officia doloremque,debitis illo suscipit consequatur sunt blanditiis totam voluptatibus consequuntur beatae provident perferendis assumenda laboriosam exercitationem! Aspernatur, quo magni!",
      customerName: "Floyd Miles",
      customerImage: Customer1,
      rating: 4,
    },
    {
      text: "Lorem ipsum dolor sit amet consectetur adipisicing elit.Tempora odit sint magnam ratione qui illo aperiam omnis eum,magni provident saepe sit dolor! Eos ullam fuga, cupiditate necessitatibus nobis id ea dolor vero molestias perspiciatis?",
      customerName: "Ronald Richards",
      customerImage: Customer2,
      rating: 5,
    },
    {
      text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Neque, iste officia doloremque, debitis illo suscipit consequatur sunt blanditiis totam voluptatibus consequuntur beatae provident perferendis assumenda laboriosam exercitationem! Aspernatur, quo magni!",
      customerName: "Savannah Nguyen",
      customerImage: Customer3,
      rating: 3,
    }
  ],
 
];

function App() {
  return (
    <div>
      <Feedback feedbackData={feedback} />
    </div>
  );
}

const Feedback = ({ feedbackData }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleIndicatorClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div>
      <section className='text-gray-700 bg-gray-200'>
        <div className="container px-8 py-12 mx-auto ">
        <div className='flex items-center space-x-2'> 
      <img src={Icon2} alt=""/> 
      <h1 className="text-3xl font-bold">Feedback</h1> 
    </div>
        
          <div className="flex flex-wrap -m-4 px-16">
            {feedbackData[activeIndex].map((feedback, index) => (
              <div key={index} className="p-4 md:w-1/3 w-full pt-12">
                <div className="h-full bg-white p-8 rounded">
                  <img src={Icon1} alt="" />
                  <p className="font-semibold mb-6">{feedback.text}</p>
                  <div className='inline-flex items-center'>
                    <img src={feedback.customerImage} alt="" className='w-12 h-12 rounded-full object-cover object-center' />
                    <span className='flex flex-col pl-4'>
                      <span className='font-bold text-gray-600'>{feedback.customerName}</span>
                      <div className="flex items-center mb-4">
                        {Array(5).fill(null).map((_, i) => (
                          <FontAwesomeIcon
                            key={i}
                            icon={faStar}
                            className={`mr-1 ${i < feedback.rating ? 'text-yellow-500' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center items-center space-x-2 mt-2 mb-2">
        {feedbackData.map((_, index) => (
          <div
            key={index}
            className={`w-4 h-4 rounded-full cursor-pointer ${
              index === activeIndex ? 'bg-black' : 'bg-gray-500'
            }`}
            onClick={() => handleIndicatorClick(index)}
          ></div>
        ))}
      </div>
      </section>
      
    </div>
  );
};

export default App;


