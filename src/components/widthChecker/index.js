import {useEffect, useState} from 'react';

export default function WidthChecker() {
  const popUpTriggerWidth = 600;
  const [windowSize, setWindowSize] = useState(getWindowSize());
  const [isActive, setActive] = useState(false);
  
  useEffect(() => {
    function handleWindowResize() {
      setWindowSize(getWindowSize());
      const screenWidth = windowSize.innerWidth;
    }
    showMessage();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  function showMessage() {
    const screenWidth = windowSize.innerWidth;
    if(screenWidth > popUpTriggerWidth){
      setActive(true);
    } else {
      setActive(false);
    }
  }

  function getWindowSize() {
    const {innerWidth} = window;
    return {innerWidth};
  }

  return (
    <div role="alert" className={!isActive ? "hidden" : "p-4 bg-slate-100 fixed inset-0 z-50 flex items-center"}>
      <div className="w-full">
        <div className="bg-red text-white font-bold text-xl rounded-t px-4 py-2">
          Screen width is too big!
        </div>
        <div className="border border-t-0 border-red rounded-b bg-white px-4 py-3 text-red-700">
          <p>This app is designed using a mobile first approach. For the time being, please re-size the window size to blow 600px.</p>
        </div>
      </div>
    </div>
  );
}
