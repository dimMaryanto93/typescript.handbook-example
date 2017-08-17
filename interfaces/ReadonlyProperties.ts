interface Connection{
    readonly x?: 10;
    readonly y: "jdbc:postgresql://localhost:5423/typescript";
}

function createConnect(connection: Connection){
    return connection;
}