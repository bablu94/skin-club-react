
import './App.scss';
import {useState} from "react";
import Logo from './assets/icon/logo.svg';
import ArrowLeft from './assets/icon/big-arrow-left.svg';
import {PaymentInfo} from "./component/Pages/PaymentInfo";
import {EnterDetails} from "./component/Pages/EnterDetails";
import {HowCanWeHelp} from "./component/Pages/HowCanWeHelp";
import {ChooseStudio} from "./component/Pages/ChooseStudio";
import {Consultation} from "./component/Pages/Consultation";
import {EmailAndPhone} from "./component/Pages/EmailAndPhone";
import {VerificationCode} from "./component/Pages/VerificationCode";


const App = () => {

    const [steps, setSteps] = useState(0);
    const [state, setState] = useState({
        cvc: '',
        dateTime: '',
        userEmail: '',
        userPhone: '',
        expiration: '',
        originalTime: '',
        userLastName: '',
        userFirstName: '',
        typeOfService: '',
        selectedStudio: '',
        creditCardNumber: '',
        verificationCode: '',
    });

    const handleState = (name, value) => {
        setState((prevState) => ({
            ...prevState,
            [name]: value
        }))
    }

    console.log(state);

    const renderScreens = () => {
        switch (steps) {
            case 0:
                return <ChooseStudio state={state} setSteps={setSteps} handleState={handleState} />
            case 1:
                return <EmailAndPhone state={state} setSteps={setSteps} handleState={handleState} />
            case 2:
                return <VerificationCode state={state} setSteps={setSteps} handleState={handleState} />
            case 3:
                return <HowCanWeHelp state={state} setSteps={setSteps} handleState={handleState} />
            case 4:
                return <Consultation state={state} setSteps={setSteps} handleState={handleState} />
            case 5:
                return <EnterDetails state={state} setSteps={setSteps} handleState={handleState} />
            case 6:
                return <PaymentInfo state={state} setSteps={setSteps} handleState={handleState} />
            default:
                return <ChooseStudio state={state} setSteps={setSteps} handleState={handleState} />
        }
    }

    const goBack = () => {
        if (steps > 0) {
            setSteps(steps - 1);
        }
    }

  return (
      <div>
          <div className="w-full py-4 flex justify-center items-center border-b border-black relative">
            <div className="go-back absolute left-[17px] cursor-pointer" onClick={goBack}>
                <img src={ArrowLeft} alt="ArrowLeft"/>
            </div>
            <div className="logo">
                {steps === 4 && window.innerWidth < 500 ?
                    <div className={'text-[14px] uppercase text-black font-bold'}>30 inute Consultaion</div> :
                    <img className={'w-[130px] lg:w-auto'} src={Logo} alt="logo" />}
            </div>
          </div>
          <div className="lg:grid grid-cols-2 gap-2 body">
              {renderScreens()}
          </div>
      </div>
  );
}

export default App;
