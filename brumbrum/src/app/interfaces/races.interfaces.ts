export interface Race {
    id: 0,
        name: string,
        date: string,
        hour: string,
        location: string,
        circuit: string,
        times: Time[]
}

export interface Time {
  driverId: number;
  laptimes: string[];
}