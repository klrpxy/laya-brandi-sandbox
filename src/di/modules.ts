import { DependencyModule, injected } from "brandi";
import { TOKENS } from "./tokens";
import { LoggerService } from "../services/LoggerService";
import { PlayerService } from "../services/PlayerService";

/**
 * 依赖模块用于集中描述：
 * 1. 每个 token 应该创建哪个类
 * 2. Brandi 应该向构造函数注入哪些依赖
 */
export const appModule = new DependencyModule();

/**
 * PlayerService 的构造函数需要一个 LoggerService。
 * 这行代码告诉 Brandi：创建 PlayerService 时，
 * 要把 loggerService 对应的对象传进去。
 */
injected(PlayerService, TOKENS.loggerService);

appModule.bind(TOKENS.loggerService).toInstance(LoggerService).inSingletonScope();
appModule.bind(TOKENS.playerService).toInstance(PlayerService).inSingletonScope();
