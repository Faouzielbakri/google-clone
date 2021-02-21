import React from 'react';
import './SearchPage.css';
import { useStateValue } from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';
import logo from '../media/googlelogoFaouzi.png';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Helmet } from 'react-helmet';
import Response from '../response';
function SearchPage() {

    const [{ term },dispatch]= useStateValue();
    const {data}= useGoogleSearch(term); // LIVE CALL
    // const data = Response
    
    return (
        <div className="searchPage">
            <Helmet>
                <title>{`Results of : ${term}`}</title>
            </Helmet>
            <div className="searchPage__header">
            <Link to="/">
            <img className="searchPage__logo" alt="Google" 
            src={logo}/>
            </Link>
            <div className="searchPage__headerright">
            
            </div>
             <div className="searchPage__headerBody">
                <Search hidebuttons query={term}/>
                <div className="searchPage__options">
                    
                    <div className="searchPage__optionsleft">
                        
                        <div className="searchPage__option text-blue"><SearchRoundedIcon fontSize="small" />
                        <a href="/all" dis>All </a></div>
                        <div className="searchPage__option"><ImageOutlinedIcon fontSize="small"/>
                        <a href={`https://www.google.com/search?tbm=isch&q${term}`}>Images </a></div>
                        <div className="searchPage__option"><DescriptionOutlinedIcon fontSize="small"/>
                        <a href="https://news.google.com/">News </a></div>
                        <div className="searchPage__option"><PlayCircleOutlineRoundedIcon fontSize="small"/>
                        <a href={`https://www.google.com/search?q${term}&tbm=vid`}>Videos </a></div>
                        <div className="searchPage__option"><MoreVertIcon fontSize="small"/>
                        <a href="/about">More </a></div>

                    </div>
                    <div className="searchPage__optionsright">
                        <div className="searchPage__option">
                            <a href="https://myaccount.google.com/security" >Settings</a>
                        </div>
                        <div className="searchPage__option">
                        <a href="https://apps.google.com/" >Tools</a></div>
                    </div>
                </div>
            </div>
            {/* <div className="searchPage__Headerright">
            <a href='https://about.google/intl/en/products/' style={{color:'grey',marginRight:'20px'}}><AppsIcon /></a>
            <Avatar src={avatar} />
            </div> */}
            </div>
            
            {true && (
                <div className="searchPage__reasuls ">
                <p className="searchPage__resultCount" style={{fontSize:'14px'}}>
                    {`About ${data?.searchInformation.formattedTotalResults} 
                     results (${data?.searchInformation.searchTime.toFixed(2)} seconds)`}
                </p>
                {
                    data?.items.map(item => (
                        <div className="searchPage__result">
                            <a style={{color :"#202124",fontWeight:499}} href={item.link}>
                            {item.displayLink}
                            </a>
                            <a className="searchPage__resultTitle" href={item.link}>
                                <h2>{`${item.title.length > 60 ? (item.title.substring(0,55).concat('...')) : (item.title) }`}</h2>
                            </a>
                            <p className="searchPage__resultSnippet">
                                {item.snippet}
                            </p>
                        </div>
                    ))
                }
                </div>
            )}

        </div>
    )
}
