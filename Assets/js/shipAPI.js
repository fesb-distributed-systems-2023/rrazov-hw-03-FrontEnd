const Base_URL = 'http://localhost:5195'

class _ShipAPI { 

    async GetAllShips() {
        const URL = `${Base_URL}/api/ship`;
        const response = await fetch(URL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!response.ok) {
            console.error('Could not get ships from the API!')
            return null;
        }

        return response.json();
    }

    // Returns true if successful and false if failed
    async CreateNewShip(ship) {
        const URL = `${Base_URL}/api/ship`;
        const response = await fetch(URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(ship)
        });

        if(!response.ok) {
            console.error('Could not create new ship.')
            if(response.status === 400) { /* Bad Request */
                alert(await response.text())
            }
            return false;
        }

        return true;
    }

    async DeleteShip(shipId) {
        const URL = `${Base_URL}/api/ship/${emailId}`;
        const response = await fetch(URL, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            }
        });

        if(!response.ok) {
            console.error(`Could not delete ship with id = ${emailId}.`)
            if(response.status === 400) { /* Bad Request */
                alert(await response.text())
            }
        }
    }

}

export const ShipAPI = new _ShipAPI();