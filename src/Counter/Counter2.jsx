import { useEffect, useState } from "react";

export const Counter2 = ({name}) => {
    const [count, setCount] = useState(0);
    const [loading, setLoading] = useState("abc");
    useEffect(()=>{ 
        console.log('useEffect');
        setTimeout(()=>{setLoading("xyz")}, 4000  )
    }, []);

    const onDecrease = () => {
        setCount(count-1);
    }
    const onIncrease = () => {
        setCount(count+1);
    }
    console.log('re-render');
    return (
        <div>
            {
                loading === "abc" ?
                    <div>Loadingg</div>
                :
                <>
                    <h1>{name}</h1>
                    <button onClick={()=> onDecrease()}>-</button>
                    <span>{count}</span>
                    <button onClick={()=> onIncrease()}>+</button>
                </>
            }
            </div>
    )
}