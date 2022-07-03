export type TWeatherDataParams = {
    lat: number;
    lng: number;
    key: string;
}

export type TPositionProps = {
    coords: {
        latitude: number;
        longitude: number;
    }
}

export type TWeatherData = {
    country: string;
    city: string;
    temp: number;
    temp_max: number;
    temp_min: number;
    description: string;
    icon: string;
}