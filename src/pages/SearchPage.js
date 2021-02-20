import React from 'react';
import './SearchPage.css';
import { useStateValue } from "../StateProvider";
import useGoogleSearch from '../useGoogleSearch';
import logo from '../media/googlelogo.png';
import { Link } from 'react-router-dom';
import Search from '../components/Search';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import DescriptionOutlinedIcon from '@material-ui/icons/DescriptionOutlined';
import ImageOutlinedIcon from '@material-ui/icons/ImageOutlined';
import PlayCircleOutlineRoundedIcon from '@material-ui/icons/PlayCircleOutlineRounded';
import MoreVertIcon from "@material-ui/icons/MoreVert";
import { Helmet } from 'react-helmet';

function SearchPage() {

    const [{ term },dispatch]=useStateValue();
    const {data}= useGoogleSearch(term); // LIVE CALL
    // const data = Response
    
    return (
        <div className="searchPage">
            <Helmet>
                <title>Faouzi's Google</title>
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
                        
                        <div className="searchPage__option"><SearchRoundedIcon fontSize="small" />
                        <Link to="/all">All </Link></div>
                        <div className="searchPage__option"><ImageOutlinedIcon fontSize="small"/>
                        <Link to="/images">Images </Link></div>
                        <div className="searchPage__option"><DescriptionOutlinedIcon fontSize="small"/>
                        <Link to="/news">News </Link></div>
                        <div className="searchPage__option"><PlayCircleOutlineRoundedIcon fontSize="small"/>
                        <Link to="/videos">Videos </Link></div>
                        <div className="searchPage__option"><MoreVertIcon fontSize="small"/>
                        <Link to="/more">More </Link></div>

                    </div>
                    <div className="searchPage__optionsright">
                        <div className="searchPage__option">
                            <Link to="/settings" >Settings</Link>
                        </div>
                        <div className="searchPage__option">
                        <Link to="/tools" >Tools</Link></div>
                    </div>
                </div>
            </div>
            {/* <div className="searchPage__Headerright">
            <a href='https://about.google/intl/en/products/' style={{color:'grey',marginRight:'20px'}}><AppsIcon /></a>
            <Avatar src={avatar} />
            </div> */}
            </div>
            
            {true && (
                <div className="searchPage__reasuls">
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
                                <h2>{`${item.title.length>60 ? (item.title.substring(0,55).concat('...')) : (item.title) }`}</h2>
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

export default SearchPage
// AIzaSyC2jyRqiA-M2Loqe744BGJybHkc6w0XCNk