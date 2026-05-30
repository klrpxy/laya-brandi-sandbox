import { Container } from 'brandi';
import { appModule } from './modules';

/**
 * Container 是运行时真正使用的容器。
 * 它保存所有注册信息，并在需要时创建依赖对象。
 */
export const container = new Container();

/**
 * 把 appModule 中需要的绑定注册到运行时容器里。
 */
container.use(...appModule.allTokens).from(appModule);
