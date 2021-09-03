import React, { useState } from "react";
import Button_StopWatch from "./Component/Button_StopWatch";
import View_StopWatch from "./Component/View_StopWatch";

function App() {

  return (
      <div className='container'>
          <View_StopWatch/>
          <Button_StopWatch/>
      </div>
  );
}

export default App;
