import { useEffect, useState } from 'react';


function Accessibility() {

    const [currentZoom, setCurrentZoom] = useState(1); // default zoom value
    const [flag, setFlag] = useState(false); //flag for zoom in zoom out


    // button flag if add zoom option or not
    const handleZoomButtons = () => {

        if (flag == true) {

            setFlag(false);
        } else {
            setFlag(true);
        }
    }
    //change the zoom to zoom in
    const handlePageZoomIn = () => {
        if (currentZoom < 3) {
            setCurrentZoom(currentZoom + 0.1);
            document.getElementById("my-App").style.transform = `scale(${currentZoom})`;
        }
    }

    //change the zoom to zoom out
    const handlePageZoomOut = () => {
        if (currentZoom > 1) {
            setCurrentZoom(currentZoom - 0.1);
            document.getElementById("my-App").style.transform = `scale(${currentZoom})`;
        }
    }

    useEffect(() => {

        //init default zoom - my-App the content div
        document.getElementById("my-App").style.transform = `scale(${currentZoom})`;

    }, [])

    return (
            <div className="container">
                {/* drowpdown (option list) */}
                <div className="dropdown">
                    <button className="btn btn-dark dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        נגישות
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button className="dropdown-item" onClick={handleZoomButtons}>הגדל את המסך</button>
                    </div>
                </div>
                {/* content div , it include all website content */}
                <div id="my-App" className="my-text w-40 h-40" >
                    <p>Hi , My Name is Raz.....</p>
                </div>
                {/* this is a ZOOM IN ZOOM OUT  buttons with flag... */}
                {flag && <div className="zoom-buttons">
                    <button className="btn btn-dark button-padding" onClick={handlePageZoomIn}>+</button>
                    <button className="btn btn-dark button-padding" onClick={handlePageZoomOut}>-</button>
                </div>}
            </div>
        
    );
}

export default Accessibility;