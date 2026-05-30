import { LoggerService } from "./LoggerService";

/**
 * 一个简单的业务服务，用来保存玩家金币。
 * 它依赖 LoggerService，因此由 Brandi 自动注入，
 * 而不是在类内部自己创建日志对象。
 */
export class PlayerService {
    private gold = 0;

    constructor(private readonly loggerService: LoggerService) {}

    public addGold(amount: number): void {
        this.gold += amount;
        this.loggerService.log(`Gold is now ${this.gold}`);
    }

    public getGold(): number {
        return this.gold;
    }
}
