import { LoggerService } from './LoggerService';

/**
 * 涓€涓畝鍗曠殑涓氬姟鏈嶅姟锛岀敤鏉ヤ繚瀛樼帺瀹堕噾甯併€?
 * 瀹冧緷璧?LoggerService锛屽洜姝ょ敱 Brandi 鑷姩娉ㄥ叆锛?
 * 鑰屼笉鏄湪绫诲唴閮ㄨ嚜宸卞垱寤烘棩蹇楀璞°€?
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
