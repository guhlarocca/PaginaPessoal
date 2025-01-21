import React from 'react';

const FooterEffect = () => {
  return (
    <div className="w-full h-[100px] relative overflow-hidden">
      <div className="absolute bottom-[-60px] w-full">
        <div className="relative w-full h-[20px] rounded-full animate-effect-one">
          <div className="relative w-[90%] h-[20px] mx-auto rounded-full animate-effect-two">
            <div className="relative w-[80%] h-[20px] mx-auto rounded-full animate-effect-three">
              <div className="relative w-[70%] h-[20px] mx-auto rounded-full animate-effect-four">
                <div className="relative w-[60%] h-[20px] mx-auto rounded-full animate-effect-five">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterEffect;
