interface DatabaseConfigs {
    url: string;
    port?: number;
    databaseName?: string;
    username: string;
    password: string;
}

function createConnection(config: DatabaseConfigs): { url: string, username: string, password: string } {
    let connection = {
        url: "jdbc:postgresql://localhost:5432/ts",
        username: "postgres",
        password: "admin",
        port: 2345,
        databaseName: "ts"
    };
    if (!config.port) connection.port = 5423;
    if (!config.databaseName) connection.databaseName = "typescript";
    return connection;
}

let myConnection = createConnection({url: "jdbc", username: "admin", password: "admin"});
console.info(myConnection);