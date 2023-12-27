import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {

    const myAsyncFunction = () => {
        return new Promise((resolve,reject) => {
            resolve("HTTP Verisi");

        });
    };
    useEffect(() => {
        myAsyncFunction()
        .then(response => {
            console.log("İşlem başarılı cevap : " ,response);
        })
        .catch(error => {
            console.log("İşlem başarısız cevap : ",error);
        })
        .finally(()=> {
            console.log("İşlem bitti.")
        });
    },[]);

  return (
    <div>
      <button className="btn btn-primary">Homepage</button>
      <br />
      <Link to={"/about"}>About</Link>
    </div>
  );
}
