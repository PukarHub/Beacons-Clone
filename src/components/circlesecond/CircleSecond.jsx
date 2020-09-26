import React from 'react'
import sukiluser from '../../img/sukiuser-img.jpeg'
import influencer2 from '../../img/influencer-2.png'
import influencer3 from '../../img/influencer-3.png'
const circlesecond = () => {
    return (
        <div>
         <React.Fragment>
            <div className="circle-4"></div>
            <div className="circle-5"></div>
            <div className="circle-6"></div>    

            <div className="user-profile-circle">
            <div className="index-user-1">
                <h6 className="index-user-1-name"><span>beacons.ai/</span>@sukiluser</h6>
                <img src = {sukiluser} alt="" onclick="hide()" id="img1"/>
            </div>
            <div className="index-user-2">
                <h6 className="index-user-2-name"><span>beacons.ai/</span>@annaemcnulty
                </h6>
                <img src= {influencer2} alt="" onclick="hide()" id="img2"/>
            </div>
            <div className="index-user-3">
                <h6 className="index-user-3-name"><span>beacons.ai/</span>@remytalyor</h6>
                <img src={influencer3} alt="" onclick="hide()" id="img3"/>
                </div>
        </div>   
            

         </React.Fragment>
        </div>
    )
}

export default circlesecond
