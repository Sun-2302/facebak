
import React from 'react';

function Banner({profilImg}) {
  return (
    <div className="relative">
      <img
        src="banner.png"
        alt="Bannière de profil"
        className="w-full h-55 object-cover"
      />
      <div className="absolute bottom-0 left-0 p-4">
        <div className="relative -bottom-[80px] ">
          <div className="w-36 h-36 rounded-full overflow-hidden transition-transform  bg-white">
            <img
              src={profilImg}
              alt="Photo de profil"
              className="w-full h-full object-cover  rounded-full border-4 border-white "
            />
            <div className=" w-36 h-36 absolute inset-0 bg-black opacity-0 hover:opacity-5  transition-opacity rounded-full border-4"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;



