import React from 'react';
import img from '../../assets/images/page not found.png'
import { Link } from 'react-router-dom';

const Error = () => {
      return (
            <div>
                  <img src={img} alt="404 image" />
                  <div className="flex justify-center items-center ">
                        <button><Link className="text-white btn btn-primary mt-8" to="/">Back to Home</Link> </button>
                  </div>
            </div>
      );
};

export default Error;