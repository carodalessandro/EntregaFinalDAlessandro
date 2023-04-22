import { useState } from "react"


export function ItemCount() {
    
    const [counter,setCounter] = useState(1)

    let handleCount
    let restCount

    if (counter<5) {
        handleCount = () => {
            setCounter(counter + 1)
        }
    }
    if (counter > 1) {
        restCount = () => {
            setCounter(counter - 1)
        }
    }
    
    return(
        <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button onClick={handleCount} className="btn btn-dark"> +1 </button>
            <p className="fontCounter">{counter}</p>
            <button onClick={restCount} className="btn btn-dark"> -1 </button>
        </div>
    )
}

