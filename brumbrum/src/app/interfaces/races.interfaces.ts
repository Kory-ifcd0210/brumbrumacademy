export interface Race {
  id: number,
  name: string,
  date: string,
  hour: string,
  circuit: number,
  times: Time[]
}

export interface Time {
  driverId: number;
  laptimes: string[];
}