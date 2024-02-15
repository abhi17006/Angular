export class LoggingService{
    logStatushange(status: string){
        console.log('A server status changed, new status: ' + status);
    }
}