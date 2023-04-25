import React from 'react'

export default function About(props) {

   // const [myStyle, setMyStyle] = useState({
     //   color: 'white',
       // backgroundColor: 'black'
    //})
 
  let myStyle={
    color: props.mode==='dark'?'white':'#042743',
    backgroundColor: props.mode==='dark'?'rgb(36 74 104)':'white',

  }
    
    return (
        <>
            <div className="container" style={myStyle} >
                <h1 className='my-2'>About TextUtils </h1>
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingOne" >
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" style={myStyle} data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Article 1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>This is the first article about the text utlis.</strong> This text utils project will helps you to 
                                convert the text into uppercase as well as you can convert the text into the lower case. This website will 
                                also helps you to find thr number of words and characters in the text you have written. 
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item" >
                        <h2 className="accordion-header" id="headingTwo" >
                            <button className="accordion-button collapsed" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Article 2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" style={myStyle} aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                Article 3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body" style={myStyle}>
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
           
        </>
    )
}
