import React, { useEffect } from "react";
import { Link } from "react-router-dom";

export default function Homepage() {

    const myAsyncFunction = () => {
        return new Promise((resolve,reject) => {
            resolve("HTTP Verisi");

        });
    };
    useEffect(() => {
       makeAsyncCall();
       makeHttpCall();
       makeHttpCall2();
    },[]);

    const makeHttpCall = () => {
        fetch("https://dummyjson.com/products")
        .then(response => response.json())
        .then(json => console.log(json))
        .catch(err => console.log(err));

    };


    const makeHttpCall2 = async () => {
        let response = await fetch ("https://dummyjson.com/products");
        let json = await response.json();
        console.log(json);
    }

    const makeAsyncCall = async () => {
        //myAsyncFunction()
        //.then(response => {
        //    console.log("İşlem başarılı cevap : " ,response);
        //})
        //.catch(error => {
        //    console.log("İşlem başarısız cevap : ",error);
        //})
        //.finally(()=> {
        //    console.log("İşlem bitti.")
        //});
        try{
            let response = await myAsyncFunction();
            console.log(response);

        }catch(e){
            console.log(e);
        }
        
    }

  return (
    <div>
      <button className="btn btn-primary">Homepage</button>
      <br />
      <Link to={"/about"}>About</Link>
    </div>
  );
}
