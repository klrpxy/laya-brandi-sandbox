import { makeInjectedModule } from 'brandi-typed';
import { TOKENS } from './tokens';
import { ConsoleLogger } from '../services/LoggerService';
import { PlayerService } from '../services/PlayerService';

/**
 * 依赖模块用于集中描述：
 * 1. 每个 token 应该创建哪个类
 * 2. Brandi 应该向构造函数注入哪些依赖
 */
const appDefinition = makeInjectedModule(TOKENS);

appDefinition.injector(PlayerService, 'loggerService');

export const appModule = appDefinition
    .bind('loggerService', (binding) => binding.toInstance(ConsoleLogger).inSingletonScope())
    .bind('playerService', (binding) => binding.toInstance(PlayerService).inSingletonScope())
    .make({});
