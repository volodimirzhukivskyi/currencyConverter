import React,{useState} from "react";
import SelectOption from "../SelctOption/SelectOption";


const Forms = ({initialData}) => {
    const [interchangeable, setInterchangeable] = useState(initialData.interchangeable || "");
    const [receivable, setReceivable] = useState(initialData.receivable || "");

    const [changing, setChanging] = useState(initialData.changing || "");
    const [getting, setGetting] = useState(initialData.payment || "");

const changePhoto=(currencyVal)=>{
   return <img className={'img'}
         src={`./img/${initialData.exchangeVal && initialData.exchangeVal.find(item => {
             return item.rate == currencyVal
         }).cc}.png`} alt="flag"/>
}
    return (

            <form className={'form'}
                  onSubmit={(e) => {
                      e.preventDefault();

                  }}
            ><legend className={'form-title'}>change here
               <span className={'animate-el'}>&#8681;</span> </legend>
                <label className={'input-wrapper'}>

                    <input className={'form-input'}
                           type={"text"}
                           name={"interchangeable"}
                           placeholder={"Interchangeable currency"}
                           onChange={(e) => {
                               getting === changing
                                   ? setReceivable(e.target.value)
                                   : setReceivable((e.target.value * (changing / getting)).toFixed(2))
                               setInterchangeable(e.target.value);
                           }}
                           value={interchangeable}
                    />
                    <div className={'input-content'}>
                        {changePhoto(changing)}
                        <select className={'form-select'}
                                value={changing}
                                name={"changing"}
                                onChange={(e) => {
                                    setChanging(e.target.value)
                                    setReceivable((interchangeable * (e.target.value / getting)).toFixed(2))
                                }}
                        >
                            {initialData.exchangeVal && initialData.exchangeVal.map((val) => <SelectOption key={val.cc}
                                                                                                           acronym={val.cc}
                                                                                                           rate={val.rate}/>)}
                        </select></div>
                </label>

                <label className={'input-wrapper'}>
                    <input className={'form-input'}
                           type={"text"}
                           name={"receivableCurrency"}
                           placeholder={"receivable currency"}
                           onChange={(e) => {
                               getting === changing
                                   ? setInterchangeable(e.target.value)
                                   : setInterchangeable((e.target.value * (getting / changing)).toFixed(2))

                               setReceivable(e.target.value);

                           }

                           }
                           value={receivable}
                    /><div className={'input-content'}>
                    {changePhoto(getting)}
                    <select className={'form-select'}
                            name={"getting"}
                            value={getting}
                            onChange={(e) => {
                                setGetting(e.target.value)
                                setInterchangeable((receivable * (e.target.value / changing)).toFixed(2))
                            }}
                    >
                        {initialData.exchangeVal && initialData.exchangeVal.map((val) => <SelectOption key={val.cc}
                                                                                                       acronym={val.cc}
                                                                                                       rate={val.rate}/>)}
                        })}
                    </select>
                </div>

                </label>

            </form>


    );
};

export default Forms;
