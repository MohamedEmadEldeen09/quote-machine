import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { fetcData } from './redux/actAndRed';

function App() {

  return (
    <QuoteBox />
  );
}

let QuoteBox = ()=>{

  class QuoteBox extends React.Component {
    
  }
 let [rColor , setrColor]  = useState("gray")
 let [green , setG] = useState(0)
 let [red , setR] = useState(0)
 let [blue , setB] = useState(0)

 const dis = useDispatch()
 let nameAuthor = useSelector(state=>state.quote.author)
 let quoteText = useSelector(state=>state.quote.Quote)

useEffect(()=>{ 
  dis(fetcData())
},[dis])

  

function changeColor(){
   let randomNumber =Math.floor( Math.random()*255)
    return  randomNumber
}


function bringQuote(){
  dis(fetcData())
  setB(changeColor())
  setR(changeColor())
  setG(changeColor())
  setrColor(()=>{
    return `rgb(${red},${green},${blue})`
  }) 
}
  return (
  <div style={{backgroundColor : rColor , width:'100vw' , height:'100vh'}}>
    <div className='container p' id="quote-box">
      <div className='row'>
         <div className='col-lg-4'></div>
         <div className='col-lg-4'></div>        
         <div className='col-lg-4'></div>
        </div>     
        <div className='row mt-5'>
         <div className='col-lg-3 col-md-2  col-sm-0'></div>
         <div className='col-lg-6 col-md-8  col-sm-12 bg-white p-3 rounded'>
            <div id='text' className='text-center'>
             <p className='display-6 fw-bold' style={{color:rColor}}><span className='mx-1'><i className="bi bi-chat-square-quote-fill"></i></span>
             {quoteText}
             </p>
            </div>
            <div id='author' className='text-end'>
                <p><span  style={{color:rColor}}>-{nameAuthor}</span></p>
            </div>
            <div  className='container'>
              <div className='row'>
                <div className='col-lg-1 col-md-1 col-sm-1'>
                  <a href='twitter.com/intent/tweet' target='_blank' style={{backgroundColor:rColor}} className='btn' id="tweet-quote"><i className="bi bi-twitter"></i></a>
                </div>
                <div className='col-lg-1 col-md-1 col-sm-1'>
                  <a href='#' style={{backgroundColor:rColor}} className='btn'><i className="bi bi-facebook"></i></a>
                </div>
                <div className='col-lg-5 col-md-6 col-sm-5'></div>
                <div className='col-lg-5 col-md-4 col-sm-5 text-end'>
                   <button id="new-quote" className='btn' style={{backgroundColor:rColor}} onClick={bringQuote}>New Quote</button>
                </div>
              </div>
            </div>
         </div>
         <div className='col-lg-3 col-md-2  col-sm-0'></div>
        </div>
        <div className='row'>
          <div className='col-lg-4 col-md-3  col-sm-2'></div>
          <div className='col-lg-4 col-md-6  col-sm-8'>
            <p className='text-white'>By Mohamed Emad</p>
          </div>
          <div className='col-lg-4 col-md-3  col-sm-2'></div>
        </div>
    </div>
    </div>
  )
}
export default App;
