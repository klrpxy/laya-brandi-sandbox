import { container } from './di/container';
import { TOKENS } from './di/tokens';
import { PlayerService } from './services/PlayerService';

const { regClass } = Laya;

/**
 * 这个脚本挂在 Laya 的启动场景上。
 * 场景启动后，它会向 Brandi 容器获取 PlayerService 并使用它。
 * Laya 负责场景生命周期，Brandi 负责服务对象的创建。
 */
@regClass()
export class Main extends Laya.Script {
    onStart(): void {
        const playerService: PlayerService = container.get(TOKENS.playerService);

        console.log('Game start');
        console.log('Initial gold:', playerService.getGold());

        playerService.addGold(100);
        console.log('After addGold:', playerService.getGold());
    }
}
