import React ,{useState,useEffect,useCallback} from 'react';
import './progres-bar.css';



const ProgressBar =()=>{
    const [progress,setProgress] = useState(0);

    const grow=useCallback(()=>{
        if(progress>=100){
            return
        }
        setProgress((progress)=>progress+5);
    },[progress])

    useEffect(()=>{
        let timer = setInterval(grow,0)
        return ()=>{
             clearInterval(timer)
            }
        },[grow]);

    return (
    <div>
        <div className="progress  " style={{height: "40px"}}>
        <div className="progress-bar color progress-bar-striped progress-bar-animated " role="progressbar" style={{width: `${progress}%`}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div></div>
    </div>
        )
}
export default ProgressBar;