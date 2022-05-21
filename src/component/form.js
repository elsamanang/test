import React, {useState} from "react";

export default function From({handelUnShow, formulaire, selected}) {
    const [form, setForm] = useState(selected);

    const handleChange = (e) => {
        const {elm} = form;
        elm[e.target.name] = e.target.value
        setForm(elm);
    }
    return (
        <div className="content">
            <div className="card">
                <div className="card-body">
                    <button className='btn btn-light' onClick={handelUnShow} title="close">
                        <img src="failed.png" className="mx-2" width={'18px'}/>
                    </button>
                    {selected == null? <p>Nothing selected</p>: 
                        <form>
                            {formulaire.map(item => 
                                item.type == 'select' ?
                                <div className="form-group" key={item.name}>
                                    <label>{item.displayName}</label>
                                    <select className="form-control m-1" id="exampleFormControlSelect1" 
                                        value={selected[item.name]} onChange={handleChange}>
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
                                        value={selected[item.name]}
                                        onChange={handleChange}
                                        className={item.type=="checkbox"? "form-check-input m-1": "form-control m-1"} id="exampleInputEmail1" name="name" 
                                        checked={selected.IsPrivate}
                                        />
                                </div>
                                
                            )}
                        </form>
                    }
                </div>
            </div>
        </div>
    )
}