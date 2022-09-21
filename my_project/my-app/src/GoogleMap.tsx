import React from "react";
import GoogleMapReact from 'google-map-react';
import googleMarker from './googlemarker.png';

const AnyReactComponent = ({ text }: { lat: number, lng: number, text: string }) => <div>{text}</div>;

// const googleApiKey = process.env.REACT_APP_GOOGLE_MAP_API_KEY

export default function SimpleMap() {
    const defaultProps = {
        center: {
            lat: 22.3233575,
            lng: 114.2114598
        },
        zoom: 16
    };

    return (
        // Important! Always set the container height explicitly
        <div style={{ height: '300px', width: '300px' }}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: "AIzaSyABi7Z9U8FptDD1c15MKOidfu1e52rPPVs" }}
                defaultCenter={defaultProps.center}
                defaultZoom={defaultProps.zoom}
            >
                <AnyReactComponent

                    lat={22.3233575}
                    lng={114.2114598}
                    text=""
                />
            </GoogleMapReact>
        </div>
    );
}