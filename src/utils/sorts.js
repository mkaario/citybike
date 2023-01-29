export const sortById = (data, sorted) => {
    const dataCopy = [...data];
    dataCopy.sort((attrA, attrB) => {
        if (sorted.reversed) {
            return attrA.id - attrB.id;
        }
        return attrB.id - attrA.id;
    });
    return dataCopy;
}
export const sortByDistance = (data, sorted) => {
    const dataCopy = [...data];
    dataCopy.sort((attrA, attrB) => {
        if (sorted.reversed) {
            return attrA.distance - attrB.distance;
        }
        return attrB.distance - attrA.distance;
    });
    return dataCopy;
}
export const sortByDuration = (data, sorted) => {
    const dataCopy = [...data];
    dataCopy.sort((attrA, attrB) => {
        if (sorted.reversed) {
            return attrA.duration - attrB.duration;
        }
        return attrB.duration - attrA.duration;
    });
    return dataCopy;
}
export const sortByFrom = (data, sorted) => {
    const dataCopy = [...data];
    dataCopy.sort((attrA, attrB) => {
        if (sorted.reversed) {
            return attrA.departureStationNumber - attrB.departureStationNumber;
        }
        return attrB.departureStationNumber - attrA.departureStationNumber;
    });
    return dataCopy;
}
export const sortByTo = (data, sorted) => {
    const dataCopy = [...data];
    dataCopy.sort((attrA, attrB) => {
        if (sorted.reversed) {
            return attrA.returnStationNumber - attrB.returnStationNumber;
        }
        return attrB.returnStationNumber - attrA.returnStationNumber;
    });
    return dataCopy;
}