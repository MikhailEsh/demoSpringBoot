export const GET_ALGORITHMS = 'GET_ALGORITHMS';

export function getAlgorithms() {
    const bodyAlgo = {
        method: 'GET',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        credentials: 'include'
    };

    return fetch('/algorithms', bodyAlgo)
        .then(response => {
            console.log(response)
            const jsonResp = response.json()
            return Promise.resolve(jsonResp);
        })
        .catch(err => console.error('Error: ', err));
}
