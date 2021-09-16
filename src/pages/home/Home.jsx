import React, {useState, useEffect, useContext} from 'react';
import "./home.css"


export default function Home() {

    return (
        <>
        <div className="header">
        
        </div>
        <div className="home">
          <div className="jamieImg">
            <img className="jamiePP" src="https://i.ibb.co/gFwhrDM/2021-05-01.png"></img>
            
            <div className="nameBox">
            <h1 className="nameTitle">JAMIE GRAHAM</h1>
            </div>
            <div className="jobBox">
            <h3 className="jobTitle">Full-stack Web Development</h3>
            </div>
          </div>

        </div>
        <div className="web1">
            <div className="showcaseBox">
                <img className="showcaseImg" src="https://i.ibb.co/cxSxvC9/Screen-Shot-2021-09-15-at-1-03-05-PM.png"></img>
                <img className="showcaseImg" src="https://i.ibb.co/9sJW68Q/Screen-Shot-2021-09-15-at-7-37-58-PM.png"></img>
            </div>
            <div className="showcase">
                <h2 className="showcaseTitle">Euler Waves</h2>
                <p className="showcaseText">Euler Waves is a MERN-stack research blog intended to chronicle the theoretical fluid dynamics research I conducted at Western University in the summer of 2021. This blog uses React to handle the front end, and it uses MongoDB, Node.js, and Express.js for the backend. <br/> <br/>
                Posts and users are saved in the backend using the multi-cloud database platform MongoDB atlas, and user's posts are displayed on the site using the React map function. There is also user-login authentication functionality with bcrypt encryption. Users can also dynamically add content to the site using the write page when logged in. </p>

                <p className="showcaseText"> <a className="link" href="https://eulerwaves.herokuapp.com/"> Visit Euler Waves</a> </p>
            </div>
        </div>
        <div className="web2">
            
            <div className="showcase">
                <h2 className="showcaseTitle">Scrumptious</h2>
                <p className="showcaseText">Scrumptious is a restaurant menu page built for the titular diner located in Richmond Hill, Toronto, ON. This site uses React and Bootstrap to handle the front end solution. <br/> <br/>
                This site is deployed via Github Pages and has an extensive commit history on the master branch, demonstrating knowledge of the Github CLI. It uses media queries for various screen sizes and is fully responsive, with strong UI/UX design. </p>

                <p className="showcaseText"> <a className="link" href="https://jamiewcgraham.github.io/scrumptious/#/"> Visit Scrumptious</a> </p>
            </div>

            <div className="showcaseBox">
                <img className="showcaseImg" src="https://i.ibb.co/PMKPv67/Screen-Shot-2021-09-15-at-9-13-49-PM.png"></img>
                <img className="showcaseImg" src="https://i.ibb.co/tpmRgSz/Screen-Shot-2021-09-15-at-9-13-08-PM.png"></img>
            </div>


        </div>
        <div className="web3">

            <div className="showcaseBox">
                <img className="showcaseImg" src="https://i.ibb.co/PMKPv67/Screen-Shot-2021-09-15-at-9-13-49-PM.png"></img>
                <img className="showcaseImg" src="https://i.ibb.co/tpmRgSz/Screen-Shot-2021-09-15-at-9-13-08-PM.png"></img>
            </div>

            <div className="showcase">
                <h2 className="showcaseTitle">WebJournal</h2>
                <p className="showcaseText">WebJournal is a dynamic, MERN full-stack online journal loaded with user authentication, encryption, and Context API state management. Users can register, login, and create and upload private journal entries which are stored in the MongoDB atlas database, and can be viewed later. <br/> <br/> 
                This code features strong UI/UX design, clean front and back-end coding, and thus serves as a strong full-stack solution for this site.</p>

                <p className="showcaseText"> <a className="link" href="https://jamiewcgraham.github.io/scrumptious/#/"> Visit WebJournal</a> </p>
            </div>

            
            
        </div>
        </>

    )
}
