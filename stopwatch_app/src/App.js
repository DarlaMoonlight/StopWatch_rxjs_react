import React, { useState , useEffect} from "react";
import {Subject, interval, takeUntil} from "rxjs";
import Button_StopWatch from "./Component/Button_StopWatch";
import View_StopWatch from "./Component/View_StopWatch";

function App() {
    const [sec, setSec] = useState(0);
    const [status, setStatus] = useState("");

    useEffect(() => {
        const unsubscribe$ = new Subject();
        interval(1000)
            .pipe(takeUntil(unsubscribe$))
            .subscribe(() => {
                if (status === "run") {
                    setSec(val => val + 1000);
                }
            });
        return () => {
            unsubscribe$.next();
            unsubscribe$.complete();
        };
    }, [status]);

    const start = React.useCallback(() => {
        setStatus("run");
    }, []);

    const stop = React.useCallback(() => {
        setStatus("stop");
        setSec(0);

    }, []);

    const reset = React.useCallback(() => {
        setSec(0);
    }, []);

    const wait = React.useCallback(() => {
        setStatus("wait");
    }, []);

  return (
      <div className='container'>
          <View_StopWatch second={sec}/>
          <Button_StopWatch start={start} stop={stop} wait={wait} reset={reset}/>
      </div>
  );
}

export default App;
