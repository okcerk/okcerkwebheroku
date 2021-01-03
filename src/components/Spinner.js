import React from "react";
import { SpinnerCircularFixed } from 'spinners-react';

const style = {
    spinner: {
      padding: "20%",
    }
};

const Spinner = (props) => 
    (<SpinnerCircularFixed style={style.spinner} size={50} thickness={150} color={'white'} speed={200} />);

export default Spinner;