import React from 'react'
import "./Widgets.css"
import {
    TwitterTimelineEmbed,
    TwitterShareButton, TwitterTweetEmbed
} from "react-twitter-embed"
import SearchIcon from "@material-ui/icons/Search"

function Widgets() {
    return (
        <div className="widgets" >
            <div className="widgets__input">
                <SearchIcon className="widgets__searchIcon" />
                <input placeholder="Search Twitter" type="text" />
            </div>

            <div className="widgets__widgetContainer">
                <h2>What's happening</h2>

                <TwitterTweetEmbed tweetId={"1403014796153397251"} />

                <TwitterTimelineEmbed
                    sourceType="profile"
                    screenName="RihanBagwan4"
                    options={{ height: 400 }}
                />

                <TwitterShareButton
                    url={"https://twitter.com/RihanBagwan4"}
                    options={{ text: "#rihanBagwan", via: "Rihan Bagwan" }} />

            </div>

        </div>
    )
}

export default Widgets
