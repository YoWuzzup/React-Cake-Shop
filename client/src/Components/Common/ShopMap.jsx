import React from 'react'
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api'

const mapContainerStyle = {
    width: '100%',
    height: '550px',
}

const center = {
    lat: 53.428543,
    lng: 14.552812,
}

const options = {
    
}

const libraries = ['places']

export default function ShopMap() {

    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
        libraries, 
    });

    if(loadError) return 'Error loading map'
    if(!isLoaded) return 'Loading maps'

    return (
    <div>
        <GoogleMap 
            mapContainerStyle={mapContainerStyle}
            zoom={15}
            center={center}
            options={options}
            >
                <Marker 
                    position={center} 
                />
        </GoogleMap>
    </div>
    )
}
