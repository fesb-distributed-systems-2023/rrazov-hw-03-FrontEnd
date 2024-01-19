import { ShipAPI } from "/Assets/js/shipAPI.js"

window.onload = (e) => {
    document.getElementById('home-button')?.addEventListener('click', () => { window.location.href = '../../index.html' });
    document.getElementById('clear-all-fields-button')?.addEventListener('click', OnClearButtonClick);
    document.getElementById('create-ship-button')?.addEventListener('click', OnCreateShipButtonClick);
}

function OnClearButtonClick() {
    document.getElementById('portName').value = '';
    document.getElementById('shipName').value = '';
    document.getElementById('destinationName').value = '';
    document.getElementById('ticketPrice').value = '';
    document.getElementById('departureTime').value = '';
    document.getElementById('arrivalTime').value = '';
    document.getElementById('departureStatus').value = '';
    
}

async function OnCreateShipButtonClick() {
    let ship = {};

    const portName = document.getElementById('portName');
    if(!portName) {
        alert('Port name field is empty!')
        return;
    }
    ship.portName = portName.value;

    const shipName = document.getElementById('shipName');
    if(!shipName) {
        alert('Ship name field is empty!')
        return;
    }

    ship.shipName = shipName.value;

    const destinationName = document.getElementById('destinationName');
    if(!destinationName) {
        alert('Destination name field is empty!')
        return;
    }
    ship.destinationName = destinationName.value;

    const ticketPrice = document.getElementById('ticketPrice');
    if(!ticketPrice) {
        alert('Ticket price field is empty!')
        return;
    }
    ship.ticketPrice = ticketPrice.value;

    const departureTime = document.getElementById('departureTime');
    if(!departureTime) {
        alert('Departure time field is empty!')
        return;
    }
    ship.departureTime = departureTime.value;

    const arrivalTime = document.getElementById('arrivalTime');
    if(!arrivalTime) {
        alert('Arrivale time field is empty!')
        return;
    }
    ship.arrivalTime = arrivalTime.value;

    const departureStatus = document.getElementById('departureStatus');
    if(!departureStatus) {
        alert('Departure status field is empty!')
        return;
    }
    ship.departureStatus = departureStatus.value;


    const success = await ShipAPI.CreateNewShip(ship);
    if(success) {
        alert('Ship is succesfully created')
        OnClearButtonClick();
    }
    
}