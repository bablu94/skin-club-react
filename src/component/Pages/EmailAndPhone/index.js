import './emailAndPhone.scss';
import {Input} from "../../Atoms/Input";
import {Button} from "../../Atoms/Button";
import {useState} from "react";

export const EmailAndPhone = ({setSteps, handleState, state}) => {
    const [userEmailError, setUserEmailError] = useState(false);
    const [userPhoneError, setUserPhoneError] = useState(false);

    const validateAndGo = () => {
        if (state.userEmail === "") {
            setUserEmailError(true)
        }
        if (state.userPhone === "") {
            setUserPhoneError(true)
        }

        if (state.userPhone !== '' && state.userEmail !== '') {
            setUserEmailError(false);
            setUserPhoneError(false);
            setSteps(2);
        }
    }

    return <>
        <div className={'lg:px-[50px] px-[20px] pt-[30px] lg:pt-0 flex flex-col justify-center'}>
            <h2 className={'text-[34px] mb-[28px]'}>Enter you email and phone</h2>
            <div className={'lg:text-[14px] text-[16px] mb-[25px] font-ptSerif lg:text-black text-[#636466]'}>Help us find or set up your account by verifying your email and phone.
            Referral credit is only valid for verified new patients</div>
            <div>
                <small className={'text-[14px]'}>Email</small>
                <Input
                    type={'text'}
                    name={'userEmail'}
                    onChange={handleState}
                    value={state.userEmail}
                    placeholder={'jane@gmail.com'}
                />
                {userEmailError && <small className={'text-xs text-rose-600'}>User email required</small>}
            </div>
            <div className={'mt-[24px]'}>
                <small className={'text-[14px]'}>Phone</small>
                <Input
                    type={'text'}
                    name={'userPhone'}
                    onChange={handleState}
                    value={state.userPhone}
                    placeholder={'(447) 488-8549'}
                />
                {userPhoneError && <small className={'text-xs text-rose-600'}>User phone required</small>}
            </div>
            <Button handleClick={validateAndGo} className={'mt-[43px] font-tradeGothic text-[14px] py-[14px]'}>CONTINUE</Button>
        </div>
        <div className={'emailAndPhoneBanner'} />
    </>
}