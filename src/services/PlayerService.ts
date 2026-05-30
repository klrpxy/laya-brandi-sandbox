import { injected } from 'brandi';
import { LoggerService } from './LoggerService';
import { TOKENS } from '../di/tokens';

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

/**
 * PlayerService 的构造函数需要一个 LoggerService。
 * 这行代码告诉 Brandi：创建 PlayerService 时，
 * 要把 loggerService 对应的对象传进去。
 */
injected(PlayerService, TOKENS.loggerService);
