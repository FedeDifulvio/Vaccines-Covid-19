
interface stateProcessing {
    state: boolean
}

export const Processing = ({state}:stateProcessing) => {
    return (
        <>
         <div className="row">
        <div className="col-md-4"></div>
        <div className="col-md-4">
          {
            state?(
               <div className="alert alert-info mt-5">
                   <div><strong>Processing...</strong></div>
                   <div className="spinner"></div>
               </div>
            )  
            :
            (
              <div> </div>
            )
          }
        </div>
        <div className="col-md-4"></div>
        </div>
            
        </>
    )
}
