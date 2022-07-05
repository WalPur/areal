import React from "react";

import Components from "../components";

function Home() {
    return(
        <div>
            <Components.General/>
            <Components.Information/>
            <Components.Services/>
            <Components.Catalog/>
            <Components.News/>
            <Components.Showboat/>
            <Components.Footer/>
        </div>
    )
}

export default Home;