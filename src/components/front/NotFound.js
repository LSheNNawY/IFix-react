import React from "react";
import { Link } from "react-router-dom";
import '../../assets/front/css/notFound.css'

const NotFound = () => {
    return (
        <div id="notfound">
		<div class="notfound">
			<div class="notfound-404">
				<h1>4<span>0</span>4</h1>
			</div>
			<p>The page you are looking for might have been removed or its name changed or it is unavailable.</p>
            <Link to="/">Home page</Link>
		</div>
	</div>
    );
};

export default NotFound;