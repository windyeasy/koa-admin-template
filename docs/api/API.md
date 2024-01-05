---
title: cms-tem v1.0.0
language_tabs:
  - shell: Shell
  - http: HTTP
  - javascript: JavaScript
  - ruby: Ruby
  - python: Python
  - php: PHP
  - java: Java
  - go: Go
toc_footers: []
includes: []
search: true
code_clipboard: true
highlight_theme: darkula
headingLevel: 2
generator: "@tarslib/widdershins v4.0.15"

---

# cms-tem

> v1.0.0

# 系统管理/登录管理

## POST 用户登录

POST /login

> Body 请求参数

```json
{
  "username": "string",
  "password": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 | 用户登录|none|
|» username|body|string| 是 | 用户名|none|
|» password|body|string| 是 | 用户密码|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 系统管理/用户管理

## POST 添加用户

POST /user/

> Body 请求参数

```json
{
  "username": "string",
  "password": "string",
  "state": 1,
  "nickname": "string",
  "telephone": "string",
  "email": "string",
  "intro": "string",
  "roleId": 0,
  "departmentId": 0
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 | 添加用户|none|
|» username|body|string| 是 | 用户名|none|
|» password|body|string| 是 | 用户密码|none|
|» state|body|number| 是 | 用户状态|none|
|» nickname|body|string| 是 | 用户昵称|none|
|» telephone|body|string¦null| 是 | 用户号码|none|
|» email|body|string¦null| 是 | 用户邮箱|none|
|» intro|body|string¦null| 是 | 用户备注|none|
|» roleId|body|number¦null| 是 | 绑定角色id|none|
|» departmentId|body|number¦null| 是 | 部门id|none|

#### 枚举值

|属性|值|
|---|---|
|» state|1|
|» state|0|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查询用户列表

GET /user/

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|pageSize|query|string| 否 ||分页尺寸|
|page|query|string| 否 ||分页页码|
|username|query|string| 否 ||用户名|
|nickname|query|string| 否 ||用户昵称|
|telephone|query|string| 否 ||用户电话|
|state|query|number| 否 ||用户状态， 1：启用，0：禁用|
|startTime|query|string| 否 ||创建时间范围的开始时间|
|endTime|query|string| 否 ||创建时间范围的结束时间|
|body|body|object| 否 | 添加用户|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## DELETE 删除用户

DELETE /user/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查询用户详情

GET /user/{id}

通过用户id获取用户信息

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|body|body|object| 否 | 添加用户|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PATCH 编辑用户

PATCH /user/{id}

> Body 请求参数

```json
{
  "username": "string",
  "password": "string",
  "state": 1,
  "nickname": "string",
  "telephone": "string",
  "email": "string",
  "intro": "string",
  "roleId": 0,
  "departmentId": 0
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|body|body|object| 否 | 添加用户|none|
|» username|body|string| 是 | 用户名|none|
|» password|body|string| 是 | 用户密码|none|
|» state|body|number| 是 | 用户状态|none|
|» nickname|body|string| 是 | 用户昵称|none|
|» telephone|body|string¦null| 是 | 用户号码|none|
|» email|body|string¦null| 是 | 用户邮箱|none|
|» intro|body|string¦null| 是 | 用户备注|none|
|» roleId|body|number¦null| 是 | 绑定角色id|none|
|» departmentId|body|number¦null| 是 | 部门id|none|

#### 枚举值

|属性|值|
|---|---|
|» state|1|
|» state|0|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 获取用户信息

GET /user/info

通过token获取用户信息

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 | 添加用户|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 系统管理/角色管理

## POST 添加角色

POST /role/

> Body 请求参数

```json
{
  "roleName": "string",
  "roleIndex": "string",
  "sort": 0,
  "state": 1,
  "intro": "string",
  "menuList": [
    0
  ]
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 | 添加角色|none|
|» roleName|body|string| 是 | 角色名|none|
|» roleIndex|body|string| 是 | 角色索引|none|
|» sort|body|number| 是 | 角色排序|默认值0|
|» state|body|number| 是 | 角色状态|默认值启用(1)|
|» intro|body|string¦null| 是 | 角色备注|none|
|» menuList|body|[number]¦null| 是 | 菜单id列表|none|

#### 枚举值

|属性|值|
|---|---|
|» state|1|
|» state|0|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查询角色列表

GET /role/

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|pageSize|query|string| 否 ||分页尺寸|
|page|query|string| 否 ||分页页码|
|roleName|query|string| 否 ||角色名称|
|body|body|object| 否 | 添加用户|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查询角色详情

GET /role/{id}

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|body|body|object| 否 | 添加用户|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## DELETE 删除角色

DELETE /role/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PATCH 编辑角色

PATCH /role/{id}

> Body 请求参数

```json
{
  "roleName": "string",
  "roleIndex": "string",
  "sort": 0,
  "state": 1,
  "intro": "string",
  "menuList": [
    0
  ]
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|body|body|object| 否 | 添加角色|none|
|» roleName|body|string| 是 | 角色名|none|
|» roleIndex|body|string| 是 | 角色索引|none|
|» sort|body|number| 是 | 角色排序|默认值0|
|» state|body|number| 是 | 角色状态|默认值启用(1)|
|» intro|body|string¦null| 是 | 角色备注|none|
|» menuList|body|[number]¦null| 是 | 菜单id列表|none|

#### 枚举值

|属性|值|
|---|---|
|» state|1|
|» state|0|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 通过角色id查询菜单

GET /role/{id}/menu

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|body|body|object| 否 | 添加用户|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 通过角色id查询权限列表

GET /role/{id}/permission

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|body|body|object| 否 | 添加用户|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查询全部未禁用角色列表

GET /role/all

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 系统管理/部门管理

## POST 添加部门

POST /department/

> Body 请求参数

```json
{
  "depName": "string",
  "sort": 0,
  "state": 1,
  "intro": "string",
  "parentId": 0
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 | 添加角色|none|
|» depName|body|string| 是 | 角色名|none|
|» sort|body|number¦null| 是 | 角色排序|默认值0|
|» state|body|number¦null| 是 | 角色状态|默认值启用(1)|
|» intro|body|string¦null| 是 | 部门备注|none|
|» parentId|body|number¦null| 是 | 父级部门|none|

#### 枚举值

|属性|值|
|---|---|
|» state|1|
|» state|0|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查询部门列表

GET /department/

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|depName|query|string| 否 ||部门名称|
|body|body|object| 否 | 添加用户|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## PATCH 编辑部门

PATCH /department/{id}

> Body 请求参数

```json
{
  "depName": "string",
  "sort": 0,
  "state": 1,
  "intro": "string",
  "parentId": 0
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|body|body|object| 否 | 编辑部门|none|
|» depName|body|string| 是 | 部门|none|
|» sort|body|number¦null| 是 | 排序|默认值0|
|» state|body|number¦null| 是 | 状态|默认值启用(1)|
|» intro|body|string¦null| 是 | 部门备注|none|
|» parentId|body|number¦null| 是 | 父id|none|

#### 枚举值

|属性|值|
|---|---|
|» state|1|
|» state|0|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查询部门详情

GET /department/{id}

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|body|body|object| 否 | 添加用户|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## DELETE 删除部门

DELETE /department/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查询全部未禁用部门列表

GET /department/all

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 | 添加用户|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 系统管理/菜单管理

## POST 添加菜单

POST /menu/

> Body 请求参数

```json
{
  "menuName": "string",
  "url": "string",
  "parentId": 0,
  "icon": "string",
  "sort": 0,
  "menuType": 1,
  "isLink": 0,
  "link": "string",
  "isIframe": 0,
  "permission": "string",
  "redirectUrl": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 | 添加菜单|none|
|» menuName|body|string| 是 | 菜单名称|可以为空，不能重名|
|» url|body|string| 是 | 菜单地址|none|
|» parentId|body|number¦null| 是 | 上级菜单|上级菜单id|
|» icon|body|string¦null| 是 | 图标|菜单图标|
|» sort|body|number| 是 | 排序|通过数值由第到高排序|
|» menuType|body|number| 是 | 菜单类型|默认菜单类型|
|» isLink|body|number| 是 | 是否外链|默认不是外链|
|» link|body|string| 是 | 菜单地址|none|
|» isIframe|body|number| 是 | 是否内嵌|默认内嵌|
|» permission|body|string¦null| 是 | 权限标识|可以为空，不能重名|
|» redirectUrl|body|string¦null| 是 | 重定向地址|当是一级菜单时可以添加重定向地址|

#### 枚举值

|属性|值|
|---|---|
|» menuType|1|
|» menuType|2|
|» isLink|0|
|» isLink|1|
|» isIframe|0|
|» isIframe|1|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## GET 查询菜单列表

GET /menu/

> Body 请求参数

```json
{}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|body|body|object| 否 | 添加用户|none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## DELETE 删除菜单

DELETE /menu/{id}

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

## POST 编辑菜单

POST /menu/{id}

> Body 请求参数

```json
{
  "menuName": "string",
  "url": "string",
  "parentId": 0,
  "icon": "string",
  "sort": 0,
  "menuType": 1,
  "isLink": 0,
  "link": "string",
  "isIframe": 0,
  "permission": "string",
  "redirectUrl": "string"
}
```

### 请求参数

|名称|位置|类型|必选|中文名|说明|
|---|---|---|---|---|---|
|id|path|string| 是 ||none|
|body|body|object| 否 | 添加菜单|none|
|» menuName|body|string| 是 | 菜单名称|可以为空，不能重名|
|» url|body|string| 是 | 菜单地址|none|
|» parentId|body|number¦null| 是 | 上级菜单|上级菜单id|
|» icon|body|string¦null| 是 | 图标|菜单图标|
|» sort|body|number| 是 | 排序|通过数值由第到高排序|
|» menuType|body|number| 是 | 菜单类型|默认菜单类型|
|» isLink|body|number| 是 | 是否外链|默认不是外链|
|» link|body|string| 是 | 菜单地址|none|
|» isIframe|body|number| 是 | 是否内嵌|默认内嵌|
|» permission|body|string¦null| 是 | 权限标识|可以为空，不能重名|
|» redirectUrl|body|string¦null| 是 | 重定向地址|当是一级菜单时可以添加重定向地址|

#### 枚举值

|属性|值|
|---|---|
|» menuType|1|
|» menuType|2|
|» isLink|0|
|» isLink|1|
|» isIframe|0|
|» isIframe|1|

> 返回示例

> 200 Response

```json
{}
```

### 返回结果

|状态码|状态码含义|说明|数据模型|
|---|---|---|---|
|200|[OK](https://tools.ietf.org/html/rfc7231#section-6.3.1)|成功|Inline|

### 返回数据结构

# 数据模型

