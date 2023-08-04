import './consultation.scss';
import { format } from 'date-fns';
import { DayPicker } from 'react-day-picker';
import EveningIcon from '../../../assets/icon/evening.svg';
import MorningIcon from '../../../assets/icon/morning.svg';
import AfterNoonIcon from '../../../assets/icon/afternoon.svg';
import {Button} from "../../Atoms/Button";
import 'react-day-picker/dist/style.css';
import {useState} from "react";

export const Consultation = ({setSteps, handleState, state}) => {
    const [selected, setSelected] = useState(state.originalTime);
    let selectedDate = '';
    if (selected) {
        selectedDate = format(selected, "iiii, LLL. d");
    }
    const formatWeekdayName = (date, options) => (
        <>
            {format(new Date(date), 'EEE', { locale: options?.locale })}
        </>
    );
    const formatCaption = (date, options) => (
        <>
            {format(new Date(date), 'LLL y', { locale: options?.locale })}
        </>
    );

    console.log(selected);
    return <>
        <div className={'lg:px-[50px] px-[0px] pt-[30px] lg:pt-0'}>
            <div className={'lg:px-[0] px-[20px] text-[34px] mb-[17px] mt-[46px] lg:block hidden'}>30 inute Consultaion</div>
            <div className={'lg:px-[0] px-[20px] text-[14px] mb-[17px] font-ptSerif'}>Schedule a complimentary Wrinkle Consultation (with option to receive same-day Wrinkle Treatment)</div>
            <div className={'lg:px-[0] px-[20px] text-[12px] mb-[27px] font-tradeGothic font-light lg:block hidden'}>SET FILTERS</div>
            <div className="gap-4 lg:flex hidden" >
                <button className={'bg-[#FFF1DA] px-[11px] py-[12px] rounded-[4px] text-[12px]'}>Any Time</button>
                <button className={'bg-[#FFF1DA] px-[11px] py-[12px] rounded-[4px] text-[12px]'}>Any Provider</button>
                <button className={'bg-[#FFA500] px-[11px] py-[12px] rounded-[4px] text-[12px] text-white'}>Brooklyn Heights</button>
            </div>
            <div className={'custom-calender bg-[#FCFBF7] w-full lg:px-[39px] px-[31px] lg:py-[46px] py-[31px]'}>
                <div className={'text-[24px] mb-[34px] lg:block hidden'}>Select a date</div>
                <DayPicker
                    mode="single"
                    disabled={{before: new Date()}}
                    formatters={{formatWeekdayName, formatCaption}}
                    defaultMonth={new Date(new Date().getFullYear(), new Date().getMonth())}
                    fromYear={new Date().getFullYear()}
                    toYear={2040}
                    selected={selected}
                    onSelect={(e) => {
                        setSelected(e);
                        handleState('originalTime', e)
                    }}
                />
            </div>
            <div className="gap-4 lg:hidden flex mt-[12px] lg:px-[0] px-[20px]" >
                <button className={'bg-[#FFF1DA] px-[11px] font-[600] py-[12px] rounded-[4px] text-[12px]'}>Any Time</button>
                <button className={'bg-[#FFF1DA] px-[11px] font-[600] py-[12px] rounded-[4px] text-[12px]'}>Any Provider</button>
                <button className={'bg-[#FFA500] px-[11px] font-[600] py-[12px] rounded-[4px] text-[12px] text-white'}>Brooklyn Heights</button>
            </div>
        </div>
        <div className={'px-[20px] flex flex-col justify-center'}>
            <div className={'lg:text-[24px] text-[16px] mt-[24px] lg:mt-[0] mb-[32px]'}>Select a time for <span className={'font-bold'}>{state.dateTime !== '' ? state.dateTime.split('at')[0] : selectedDate}</span></div>
            <div>
                <div className={'lg:mb-[51px] mb-[43px]'}>
                    <div className={'flex gap-2 items-center mb-[14px] font-[600] text-[12px]'}>
                        <img src={MorningIcon} alt="morning" className={'w-[24px]'}/>
                        MORNING
                    </div>
                    <div className="grid lg:grid-cols-5 grid-cols-3 gap-3">
                        <Button className={'py-[14px]'}
                                handleClick={() => {setSteps(5); handleState('dateTime', selectedDate + ' at 9:00 AM')}}>9:00 AM</Button>
                        <Button className={'py-[14px]'}
                                handleClick={() => {setSteps(5); handleState('dateTime', selectedDate + ' at 9:30 AM')}}>9:30 AM</Button>
                        <Button className={'py-[14px]'}
                                handleClick={() => {setSteps(5); handleState('dateTime', selectedDate + ' at 10:00 AM')}}>10:00 AM</Button>
                        <Button className={'py-[14px]'}
                                handleClick={() => {setSteps(5); handleState('dateTime', selectedDate + ' at 11:00 AM')}}>11:00 AM</Button>
                    </div>
                </div>
                <div className={'lg:mb-[51px] mb-[43px]'}>
                    <div className={'flex gap-2 items-center mb-[14px] text-[12px] font-[600]'}>
                        <img src={AfterNoonIcon} alt="morning" className={'w-[24px]'}/>
                        AFTERNOON
                    </div>
                    <div className="grid lg:grid-cols-5 grid-cols-3 gap-3">
                        <Button className={'py-[14px]'} handleClick={() => {setSteps(5); handleState('dateTime', selectedDate + ' at 12:30 PM')}}>12:30 PM</Button>
                        <Button className={'py-[14px]'} handleClick={() => {setSteps(5); handleState('dateTime', selectedDate + ' at 1:00 PM')}}>1:00 PM</Button>
                        <Button className={'py-[14px]'} handleClick={() => {setSteps(5); handleState('dateTime', selectedDate + ' at 1:30 PM')}}>1:30 PM</Button>
                        <Button className={'py-[14px]'} handleClick={() => {setSteps(5); handleState('dateTime', selectedDate + ' at 2:30 PM')}}>2:30 PM</Button>
                        <Button className={'py-[14px]'} handleClick={() => {setSteps(5); handleState('dateTime', selectedDate + ' at 3:30 PM')}}>3:30 PM</Button>
                        <Button className={'py-[14px]'} handleClick={() => {setSteps(5); handleState('dateTime', selectedDate + ' at 4:30 PM')}}>4:30 PM</Button>
                    </div>
                </div>
                <div className={'lg:mb-[51px] mb-[43px]'}>
                    <div className={'flex gap-2 items-center mb-[14px] text-[12px] font-[600]'}>
                        <img src={EveningIcon} alt="morning" className={'w-[24px]'}/>
                        EVENING
                    </div>
                    <div className={'text-[#989191] text-[14px] font-ptSerif'}>
                        No evening appointments are available on this date.
                    </div>
                </div>
                <div className={'mt-[79px text-[14px] font-ptSerif mb-4'}>
                    Not seeing the time you want? Call us at 212-884-9663 to schedule.
                </div>
            </div>
        </div>
    </>
}