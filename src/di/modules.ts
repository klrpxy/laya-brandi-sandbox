import { DependencyModule } from 'brandi';
import { TOKENS } from './tokens';
import { ConsoleLogger } from '../services/LoggerService';
import { PlayerService } from '../services/PlayerService';

/**
 * 依赖模块用于集中描述：
 * 1. 每个 token 应该创建哪个类
 * 2. Brandi 应该向构造函数注入哪些依赖
 */
export const appModule = new DependencyModule();

appModule.bind(TOKENS.loggerService).toInstance(ConsoleLogger).inSingletonScope();
appModule.bind(TOKENS.playerService).toInstance(PlayerService).inSingletonScope();
