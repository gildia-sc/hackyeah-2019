var options = {
    enableHighAccuracy: false,
    timeout: 30000,
    maximumAge: 0
};

const gps = () => new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(
        (location) => resolve(location.coords),
        (error) => reject(error),
        options)
})

export default gps;
