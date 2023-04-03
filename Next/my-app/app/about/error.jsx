
"use client"
export default function Error({ error, reset}){
    return(
        <div>
            This ain;t loaded { error.message}
            <button onClick ={()=> reset()}>
                reload
            </button>
        </div>
    )
}