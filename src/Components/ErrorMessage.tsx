
interface dataError{ 

    result: boolean 
    processing: boolean
}

export const ErrorMessage = ({result, processing}: dataError) => {
    return (
      <>
        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-4">
            {
                result && !processing ? 
                (
                 <div className="alert alert-danger"> Not found. </div>
                ) 
                : 
                (
                <div></div>
                )
            }
          </div>
          <div className="col-md-4"></div>
        </div>
      </>
    );
}
