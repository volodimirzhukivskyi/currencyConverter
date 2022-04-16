import  React,{useEffect, useState} from "react";
import Forms from "./modules/Forms/Forms";

const App = () => {
    const [uahCourse, setUahCourse] = useState(null)
    const [error, setError] = useState(null);
    const INITIAL_DATA = {
        exchangeVal: uahCourse,
        changing: 1,
        payment: 1,
        interchangeable: 1,
        receivable: 1
    }

    useEffect(() => {
        fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                throw new Error("Failed to load");
            })
            .then((uahCourse) => {
                setUahCourse([...uahCourse.filter((currentVal) => {
                    return currentVal.cc.toUpperCase() === 'USD'
                        || currentVal.cc.toUpperCase() === 'EUR'

                }),{cc:"UAH", rate:1}]);
            })
            .catch((e) => {
                setError(e.message);
            });
    }, []);
    return <React.Fragment>
        {error && <div>{error}</div>}

         <header className={'header'}>
          <div className={'header-wrapper container'}><div>{uahCourse &&uahCourse.map((currentVal) =>
              <div className={currentVal.cc!=='UAH'?'price-el':'hide'}
                   key={currentVal.cc}><span className={'acronym'}>{currentVal.cc}</span>{ ' - ' + currentVal.rate.toFixed(2)}</div>)}</div>
          <h1 className={'hero-title'}>currency converter</h1></div>
        </header>
        {!uahCourse && (
            <div className={'loading'}
            >
                Loading...
            </div>
        )}
        {uahCourse &&
        <main style={{backgroundImage:'url(./img/background.png)',backgroundSize:'cover'}} className={'main'}>

            <Forms initialData={INITIAL_DATA}/>
        </main>}
<footer className={'footer'}><p> happy to help you</p></footer>
    </React.Fragment>
}
export default App