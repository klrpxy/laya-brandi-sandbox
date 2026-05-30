/**
 * 一个很简单的日志服务。
 * 单独拆出来后，其他类可以依赖它，
 * 而不是自己直接调用 console.log。
 */
export interface LoggerService {
    log(msg: string): void;
}

export class ConsoleLogger implements LoggerService {
    public log(msg: string) {
        console.log(`[LoggerService] ${msg}`);
    }
}
