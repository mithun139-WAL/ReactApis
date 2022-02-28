import axios from "axios";
import { useEffect, useState } from "react";

const BoredApi = () => {
    let [data, setData] = useState({});
    let [Keys, setKeys] = useState([]);
    useEffect(() => {
        axios.get("https://www.boredapi.com/api/activity").then((res) => {
            setData(res.data);
            setKeys(Object.keys(res.data));
        });
    }, [])
    return (
        <div className="card col-9 mx-auto my-2" >
            <h2 className="text-muted">Bored Api</h2>
            <table className="mx-auto my-5">
                <thead>
                    <tr className="bg-info">
                        <th>Category</th>
                        <th>Details</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Keys.map((val) => {
                            return (
                                <tr>
                                    <td><u>{val}</u></td>
                                    <td>{data[val]}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}
export default BoredApi;