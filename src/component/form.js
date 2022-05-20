import React from "react";

export default function From({handelUnShow, formulaire, selected}) {
    //console.log(selected)
    return (
        <div className="content">
            <button className='btn btn-light' onClick={handelUnShow} title="close">
                <img src="failed.png" className="mx-2" width={'18px'}/>
            </button>
            {/*<form>
                {formulaire.map(item => 
                    item.type == 'select' ?
                    <div className="form-group" key={item.name}>
                        <label>{item.displayName}</label>
                        <select className="form-control m-1" id="exampleFormControlSelect1" defaultValue={item.name == "KnownErrorTypeId"? selected.type.id: selected.status.id}>
                        {item["x-options"].map(elm =>
                            <option value={elm.value} key={elm.text+elm.value}>
                                {elm.text}
                            </option>
                        )}
                        </select>
                    </div>
                    :
                    <div className="form-group" key={item.name}>
                        <label>{item.displayName}</label>
                        <input type={item.type}
                            defaultValue={item.name == "IsPrivate"? selected.isPrivate: selected.summary}
                            className={item.type=="checkbox"? "form-check-input m-1": "form-control m-1"} id="exampleInputEmail1" name="name" />
                    </div>
                    
                )}
                        </form>*/}
        </div>
    )
}