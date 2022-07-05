import React from "react";

import Components from "../components";

function Home() {
    return(
        <div>
            <Components.General/>
            <Components.Information/>
            <Components.Catalog/>
        </div>
    )
}

export default Home;