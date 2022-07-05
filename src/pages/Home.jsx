import React from "react";

import Components from "../components";

function Home() {
    return(
        <div>
            <Components.General/>
            <Components.Information/>
            <Components.Catalog/>
            <Components.News/>
            <Components.Showboat/>
        </div>
    )
}

export default Home;