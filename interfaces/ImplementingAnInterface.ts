interface ClockInterface {
    currentTime: Date;
}

class Clock implements ClockInterface {
    currentTime: Date;

    constructor(tanggal: Date) {
        this.currentTime = tanggal;
    }

}

