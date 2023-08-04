import './paymentInfo.scss';
import {Input} from "../../Atoms/Input";
import {Button} from "../../Atoms/Button";
import {useState} from "react";

export const PaymentInfo = ({setSteps, handleState, state}) => {
    const [userCVCError, setUserCVCError] = useState(false);
    const [userCreditCardError, setUserCreditCardError] = useState(false);
    const [userExpirationError, setUserExpirationError] = useState(false);

    const validateAndGo = () => {
        if (state.creditCardNumber === "") {
            setUserCreditCardError(true)
        }
        if (state.expiration === "") {
            setUserExpirationError(true)
        }
        if (state.cvc === "") {
            setUserCVCError(true)
        }

        if (state.expiration !== '' && state.creditCardNumber !== '' && state.cvc !== '') {
            setUserCVCError(false);
            setUserCreditCardError(false);
            setUserExpirationError(false);
        }
    }

    return <>
        <div className={'lg:px-[50px] px-[20px] pt-[30px] lg:pt-0 flex flex-col justify-center'}>
            <h2 className={'text-[34px] mb-[26px]'}>Your payment info</h2>
            <div className={'text-[14px] font-ptSerif leading-6 mb-[33px]'}>A credit card is required to book your appointment. Cancellation is free up to 12 hours before your appointment. Cancellations within 12 hours incur a $25 fee.
            </div>
            <div className={'mb-[24px]'}>
                <small>credit card number</small>
                <Input
                    type={'text'}
                    onChange={handleState}
                    name={'creditCardNumber'}
                    value={state.creditCardNumber}
                    placeholder={'1234 1234 1234 1234'}
                />
                {userCreditCardError && <small className={'text-xs text-rose-600'}>Credit card number required</small>}
            </div>
            <div className={'lg:grid grid-cols-2 gap-4 mb-[24px]'}>
                <div>
                    <small>Expiration</small>
                    <Input
                        type={'text'}
                        name={'expiration'}
                        onChange={handleState}
                        value={state.expiration}
                        placeholder={'12/12/2024'}
                    />
                    {userExpirationError && <small className={'text-xs text-rose-600'}>Expiration date required</small>}
                </div>
                <div className={'mt-[24px] lg:mt-[0]'}>
                    <small>CVC</small>
                    <Input
                        type={'text'}
                        name={'cvc'}
                        value={state.cvc}
                        onChange={handleState}
                        placeholder={'CVC'}
                    />
                    {userCVCError && <small className={'text-xs text-rose-600'}>CVC required</small>}
                </div>
                <div className={'underline lg:text-[10px] text-[12px] font-ptSerif mt-[24px]'}>Have a promotion code?</div>
            </div>
            <div className={'mt-[24px] lg:mt-[mt-0]'}>
                <div className={'py-2 border-b w-full border-gray-900 mb-[16px]'}>
                    <div className={'text-[14px] font-bold'}>Appointment Details</div>
                </div>
                <div className={'flex justify-between border-b border-gray-900 pb-[14px] font-ptSerif text-[14px]'}>
                    <div>Wrinkle Consultation</div>
                    <div>$0</div>
                </div>
            </div>
            <Button handleClick={validateAndGo} className={'mt-[24px] text-[14px] font-tradeGothic py-[14px]'}>CONTINUE</Button>
        </div>
        <div className={'paymentBanner'} />
    </>
}