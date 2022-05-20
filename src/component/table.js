import React from "react";

export default function Table({data, handelShow, handleChange}) {
    var index = 0;
    const handelSelect = (item) => {
        handleChange(item);
    }
    return (
        <div className="content">
            <table className="table table-bordered">
                <thead>
                    <tr>
                        <th scope="col">Type #</th>
                        <th scope="col">Summary</th>
                        <th scope="col">Private</th>
                        <th scope="col">Status</th>
                        <th scope="col">Service</th>
                        <th scope="col">Autor</th>
                        <th scope="col">Created</th>
                        <th scope="col">Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map(item =>
                        <tr key={item.entity.data.id} onClick={() => handelSelect(item.entity.data)}>
                            <td>{item.entity.data.number}</td>
                            <td>{item.entity.data.summary}</td>
                            <td>{item.entity.data.isPrivate ? 
                                <img src="success.png" className="mx-2" width={'18px'}/>
                            : <img src="failed.png" className="mx-2" width={'18px'}/>}</td>
                            <td>{item.entity.data.status.name}</td>
                            <td>{item.entity.data.service ? item.entity.data.service.name: ''}</td>
                            <td>{item.entity.data.author.name}</td>
                            <td>{item.entity.data.createdOn}</td>
                            <td>{item.entity.data.updatedOn}</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}