import React, { Component } from "react";
import { render } from "react-dom";

import { useEffect, useState } from "react";
import { interval, Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

function App() {
  // const [sec, setSec] = useState(0);
  // const [status, setStatus] = useState<Status>("stop");
  //
  // useEffect(() => {
  //   const unsubscribe$ = new Subject();
  //   interval(1000)
  //       .pipe(takeUntil(unsubscribe$))
  //       .subscribe(() => {
  //         if (status === "run") {
  //           setSec(val => val + 1000);
  //         }
  //       });
  //   return () => {
  //     unsubscribe$.next();
  //     unsubscribe$.complete();
  //   };
  // }, [status]);
  //
  // const start = React.useCallback(() => {
  //   setStatus("run");
  // }, []);
  //
  // const stop = React.useCallback(() => {
  //   setStatus("stop");
  //   setSec(0);
  // }, []);
  //
  // const reset = React.useCallback(() => {
  //   setSec(0);
  // }, []);
  //
  // const wait = React.useCallback(() => {
  //   setStatus("wait");
  // }, []);

  return (
      <div className='container'>


      </div>
  );
}

export default App;
