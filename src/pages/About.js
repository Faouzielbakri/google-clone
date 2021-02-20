import React from 'react'
import me from '../media/meinthecard.jpg';
import { Helmet } from 'react-helmet';


function About() {
    return (
        
        <div className="container-fluid  ">
            <Helmet>
                <title>Faouzi's Google</title>
            </Helmet>
            <div className="bg-light  py-3 ">
                <center>
                    <h1 className="mb-0">This is a custom/clone Google search engine by me</h1>
                    
                </center>
            </div>
            <hr className="p-0 m-0"/>
            <center>
                <div className="container">
                    <h3>Who am i ?</h3>
                    <div class="card " style={{width:"20rem"}}>
                        <img src={me} class="card-img-top" alt="Faouzi" />
                        <div class="card-body  border-2">
                            <h5 class="card-title">Faouzi ELBAKRI</h5>
                            <p class="card-text">Student in <strong>ESEFA</strong> (computer science) i love everything related to programing and problem solving</p>
                            <div class="list-group " >
                                <button type="button" class="list-group-item list-group-item-action"><a style={{textDecoration:'none'}} href="https://facebook.com/Faouzi.bakri" class="card-link">Facebook</a></button>
                                <button type="button" class="list-group-item list-group-item-action"><a style={{textDecoration:'none'}} href="https://github.com/Faouzielbakri" class="card-link">Github</a></button>
                                <button type="button" class="list-group-item list-group-item-action"><a style={{textDecoration:'none'}} href="https://www.fiverr.com/users/faouzivfx" class="card-link">Fiverr</a></button>
                            </div>
                        </div>    
                        
                        <div class="card-body">
                            work for it and you'll get it !
                            
                        </div>
                    </div>
                </div>
            </center>
            

        </div>
    )
}

export default About
