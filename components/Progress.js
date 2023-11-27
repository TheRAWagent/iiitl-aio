import React from 'react'
import "react-step-progress-bar/styles.css";
import { ProgressBar, Step } from "react-step-progress-bar";

const Progress = ({percent}) => {
    return (
        <div className='px-10 lg:px-0'>
            <ProgressBar
                percent={percent}
                filledBackground="linear-gradient(to right, #6598eb , #0E2954)"
            >
                <Step transition="scale">
                    {({ accomplished }) => (
                        <div>
                        <div 
                        className={ + accomplished?' bg-[#0E2954]  py-3 px-5 text-white text-xl font-semibold rounded-full text-center':' bg-[#6598eb]  py-3 px-5 text-white text-xl font-semibold rounded-full text-center'}>
                        1
                        </div>
                        </div>
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <div>
                        <div 
                        className={ + accomplished?' bg-[#0E2954]  py-3 px-5 text-white text-xl font-semibold rounded-full text-center':' bg-[#6598eb]  py-3 px-5 text-white text-xl font-semibold rounded-full text-center'}>
                        2
                        </div>
                        </div>
                    )}
                </Step>
                <Step transition="scale">
                    {({ accomplished }) => (
                        <div>
                        <div 
                        className={ + accomplished?' bg-[#0E2954]  py-3 px-5 text-white text-xl font-semibold rounded-full text-center':' bg-[#6598eb]  py-3 px-5 text-white text-xl font-semibold rounded-full text-center'}>
                        3
                        </div>
                        </div>
                    )}
                </Step>
            </ProgressBar>
        </div>
    )
}

export default Progress
