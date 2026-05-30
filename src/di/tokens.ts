import { token } from "brandi";
import type { LoggerService } from "../services/LoggerService";
import type { PlayerService } from "../services/PlayerService";

/**
 * Token 是 Brandi 在容器中查找依赖时使用的唯一标识。
 * 每个 token 都绑定了一个 TypeScript 类型，
 * 这样 `container.get(...)` 取出的对象就有正确类型。
 */
export const TOKENS = {
    loggerService: token<LoggerService>("loggerService"),
    playerService: token<PlayerService>("playerService"),
};
