import './verificationCode.scss';
import {Input} from "../../Atoms/Input";
import {Button} from "../../Atoms/Button";
import {useState} from "react";
export const VerificationCode = ({setSteps, handleState, state}) => {
    const [verificationCodeError, setVerificationCodeError] = useState(false);


    const validateAndGo = () => {
        if (state.verificationCode === "") {
            setVerificationCodeError(true)
        }

        if (state.verificationCode !== '') {
            setVerificationCodeError(false);
            setSteps(3);
        }
    }

    return <>
        <div className={'lg:px-[50px] px-[20px] pt-[30px] lg:pt-0 flex flex-col justify-center'}>
            <h2 className={'text-[34px] mb-[28px]'}>Enter verification code</h2>
            <div className={'text-[14px] mb-[25px] font-ptSerif'}>Enter the 6 digit code sent to xxx-xxx-xxxx. This may take a moment</div>
            <div>
                <small className={'text-[14px]'}>Verification Code</small>
                <Input
                    value={''}
                    type={'text'}
                    placeholder={'Enter verification code'}
                />
                {verificationCodeError && <small className={'text-xs text-rose-600'}>Verification code required</small>}
            </div>
            <div className="flex justify-center flex-col items-center">

                <Button handleClick={validateAndGo} className={'text-[14px] font-tradeGothic py-[14px] mt-[24px]'}>VERIFY</Button>
                <div className={'text-[12px] mt-[24px]'}>OR</div>
                <div onClick={() => {setSteps(3)}} className={'underline cursor-pointer text-[12px] mt-[24px] mb'}>Continue as a Guest</div>
            </div>
        </div>
        <div className={'verificationBanner'} />
    </>
}