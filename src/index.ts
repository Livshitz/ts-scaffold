export default class App {
    constructor() { }

    public run() {
        console.log('Hello World!');
    }
}

class Program {
    public static async main() {
        let error: Error = null;

        try {
            console.log('----------------');
            let app = new App();
            app.run();
            console.log('DONE');
        } catch (err) {
            error = err;
        } finally {
            let errorCode = 0;
            if (error) {
                console.error('----- \n [!] Failed: ', error);
                errorCode = 1;
            }

            if (require.main === module) process.kill(process.pid, 'SIGINT') // clean exit;
        }
    }
}

// Program.main(); // Comment if you don't want to use this file as node script and self execute
