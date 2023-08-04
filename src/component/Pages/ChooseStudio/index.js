import './chooseStudio.scss';
import GoogleMapReact from "google-map-react";
import ArrowRight from "../../../assets/icon/arrow-right.svg";
import {grayMap} from "./googleMapCustomStyle";
import {GOOGLE_MAP_API_KEY} from "../../../env";

const AnyReactComponent = ({ text }) => <div>{text}</div>;
export const ChooseStudio = ({setSteps, handleState, state}) => {
    const defaultProps = {
        center: {
            lat: 10.99835602,
            lng: 77.01502627
        },
        zoom: 11
    };

    const handleStoreClick = (name, value) => {
        handleState(name, value)
        setSteps(1);
    }

    return (
        <>
            <div className={'lg:px-[50px] px-[20px] pt-[30px] lg:pt-0 flex flex-col justify-center'}>
                <div className={'text-[35px] mb-[18px]'}>Choose a studio</div>
                <div onClick={() => {handleStoreClick('selectedStudio', 'Brooklyn Heights')}} className={'bg-[#F2EFE8] flex justify-between items-center px-[14px] pt-[15px] pb-[14px] mb-[12px] cursor-pointer'}>
                    <div>
                        <div className={'text-[20px] lg:text-[20px]'}>Brooklyn Heights</div>
                        <div className={'text-[14px]  font-ptSerif font-ptSerif'}>70 Schermerhorn Street Brooklyn, NY 11201</div>
                    </div>
                    <img src={ArrowRight} alt={'ArrowRight'} />
                </div>
                <div onClick={() => {handleStoreClick('selectedStudio', 'Brooklyn Heights')}} className={'bg-[#F2EFE8] flex justify-between items-center px-[14px] pt-[15px] pb-[14px] mb-[12px] cursor-pointer'}>
                    <div>
                        <div className={'text-[20px] lg:text-[24px]'}>Brooklyn Heights</div>
                        <div className={'text-[14px]  font-ptSerif'}>70 Schermerhorn Street Brooklyn, NY 11201</div>
                    </div>
                    <img src={ArrowRight} alt={'ArrowRight'} />
                </div>
                <div onClick={() => {handleStoreClick('selectedStudio', 'Brooklyn Heights')}} className={'bg-[#F2EFE8] flex justify-between items-center px-[14px] pt-[15px] pb-[14px] mb-[12px] cursor-pointer'}>
                    <div>
                        <div className={'text-[20px] lg:text-[24px]'}>Brooklyn Heights</div>
                        <div className={'text-[14px]  font-ptSerif'}>70 Schermerhorn Street Brooklyn, NY 11201</div>
                    </div>
                    <img src={ArrowRight} alt={'ArrowRight'} />
                </div>
                <div onClick={() => {handleStoreClick('selectedStudio', 'NoHo')}} className={'bg-[#F2EFE8] flex justify-between items-center px-[14px] pt-[15px] pb-[14px] mb-[12px] cursor-pointer'}>
                    <div>
                        <div className={'text-[20px] lg:text-[24px] flex items-center'}>
                            NoHo
                            <div className={'px-[16px] py-[7px] bg-[#FBD898] rounded-full text-black text-[12px] ml-[9px]'}>New Location</div>
                        </div>
                        <div className={'text-[14px]  font-ptSerif'}>40 Bleecker Street New York, NY 11201</div>
                    </div>
                    <img src={ArrowRight} alt={'ArrowRight'} />
                </div>
                <div onClick={() => {handleStoreClick('selectedStudio', 'Brooklyn Heights')}} className={'bg-[#F2EFE8] flex justify-between items-center px-[14px] pt-[15px] pb-[14px] mb-[12px] cursor-pointer'}>
                    <div>
                        <div className={'text-[20px] lg:text-[24px]'}>Brooklyn Heights</div>
                        <div className={'text-[14px]  font-ptSerif'}>70 Schermerhorn Street Brooklyn, NY 11201</div>
                    </div>
                    <img src={ArrowRight} alt={'ArrowRight'} />
                </div>
                <div onClick={() => {handleStoreClick('selectedStudio', 'Brooklyn Heights')}} className={'bg-[#F2EFE8] flex justify-between items-center px-[14px] pt-[15px] pb-[14px] mb-[12px] cursor-pointer'}>
                    <div>
                        <div className={'text-[20px] lg:text-[24px]'}>Brooklyn Heights</div>
                        <div className={'text-[14px]  font-ptSerif'}>70 Schermerhorn Street Brooklyn, NY 11201</div>
                    </div>
                    <img src={ArrowRight} alt={'ArrowRight'} />
                </div>
                <div onClick={() => {handleStoreClick('selectedStudio', 'Brooklyn Heights')}} className={'bg-[#F2EFE8] flex justify-between items-center px-[14px] pt-[15px] pb-[14px] mb-[12px] cursor-pointer'}>
                    <div>
                        <div className={'text-[20px] lg:text-[24px]'}>Brooklyn Heights</div>
                        <div className={'text-[14px]  font-ptSerif'}>70 Schermerhorn Street Brooklyn, NY 11201</div>
                    </div>
                    <img src={ArrowRight} alt={'ArrowRight'} />
                </div>
            </div>
            <div>
                <GoogleMapReact
                    options={{
                        styles: grayMap,
                    }}
                    bootstrapURLKeys={{ key: "" }}
                    defaultCenter={defaultProps.center}
                    defaultZoom={defaultProps.zoom}
                >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                </GoogleMapReact>
            </div>
        </>
    )
}