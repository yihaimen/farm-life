# farm-life
Help farm to collect information about life.

* handlers 目录：存放路由处理器；
* middlewares 目录：存放中间件，用于处理每个请求；
* models 目录：存放模型定义，在我们的示例中只包含 Todo 接口；
* services 目录：存放服务层程序；
* repositories 目录：作为ORM层，处理数据；
* utils 目录：存放通用工具；
* config.ts：包含应用的全局配置信息；
* index.ts： 应用的入口文件；
* routing.ts：包含 API 路由信息；
* deps.ts：统一处理依赖。