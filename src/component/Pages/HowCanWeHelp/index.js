import './howCanWeHelp.scss';
import ArrowRight from '../../../assets/icon/arrow-right.svg';

export const HowCanWeHelp  = ({setSteps, handleState, state}) => {
    return <>
        <div className={'lg:px-[50px] px-[20px] pt-[30px] lg:pt-0 flex flex-col justify-center'}>
            <div className={'text-[35px] mb-[46px] lg:mb-[24px]'}>How can we help?</div>
            <div onClick={() => {handleState('typeOfService', 'wrinkle consultation'); setSteps(4)}}
                className={'bg-[#FCF7F1] cursor-pointer flex justify-between items-center px-[14px] pt-[16px] pb-[14px] mb-[19px]'}>
                <div>
                    <div className={'text-[20px] lg:text-[24px]'}>I’m new to Skinclub</div>
                    <div className={'text-[14px] font-ptSerif'}>Schedule a complimentary Wrinkle Consultation</div>
                    <div className={'text-[#AAAAAA] text-[14px] font-ptSerif'}>(With option to receive same-day Wrinkle Treatment)</div>
                </div>
                <img src={ArrowRight} alt={'ArrowRight'} />
            </div>
            <div onClick={() => {handleState('typeOfService', 'wrinkle relaxer'); setSteps(4)}}
                className={'bg-[#FCF7F1] cursor-pointer flex justify-between items-center px-[14px] pt-[16px] pb-[14px]'}>
                <div>
                    <div className={'text-[20px] lg:text-[24px]'}>I’m returning to Skinclub</div>
                    <div className={'text-[14px] font-ptSerif'}>Schedule a Wrinkle Relaxer treatment</div>
                </div>
                <img src={ArrowRight} alt={'ArrowRight'} />
            </div>
        </div>
        <div className={'howCanWeHelpBanner'} />
    </>
}