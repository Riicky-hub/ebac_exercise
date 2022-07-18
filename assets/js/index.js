//AOS 
AOS.init();
//Geolocaliton
if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showLocation);
}
function showLocation(position) {
    const long = position.coords.longitude;
    const lat = position.coords.latitude;
    const url = `https://maps.google.com/maps?q=${lat}, ${long}&t=&z=11&ie=UTF8&iwloc=&output=embed`;

    window.open(url, 'map');
}
//Notifications
function getNotifications() {
    if(!("Notification" in window)) {
        console.error('Navegador não suporta!');
    } else if (Notification.permission === "granted") {
        const notify = new Notification('Bem-vindo de volta ao site!');
    } else if (Notification.permission !== "denied") {
        Notification.requestPermission(function(allow) {
            if(allow === "granted") {
                const notify = new Notification('Bem-vindo ao meu site!');
            }
        });
    }
}