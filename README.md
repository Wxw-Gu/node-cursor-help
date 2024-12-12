# Cursor Free Trial Reset Tool

[English](#english) | [中文](#chinese)

### Credits | 致谢
This project is a Node.js implementation based on the original Go version by [@yuaotian](https://github.com/yuaotian/go-cursor-help).

本项目是基于 [@yuaotian](https://github.com/yuaotian/go-cursor-help) 的 Go 语言版本改写的 Node.js 实现。

### Important Notice | 重要声明
This tool is only intended for the following specific scenarios:
1. During Cursor's official free trial period
2. When system mistakenly flags as duplicate trial due to technical issues
3. As a temporary solution when official support is not readily available

Please note:
- This tool is not meant for bypassing paid features or cracking software
- If your trial period has expired, please purchase a license or seek alternatives
- It's recommended to contact official support first
- Please ensure you are within valid trial period before using this tool

本工具仅用于解决以下特定场景:
1. 在Cursor官方承诺的免费试用期内
2. 由于技术原因导致系统误判为重复试用
3. 无法通过正常渠道及时获得官方支持时的临时解决方案

请注意:
- 本工具不是用于规避付费或破解软件
- 如果您已超出试用期,请购买正版授权或寻找其他替代方案
- 建议优先通过官方支持渠道解决问题
- 使用本工具前请确认您处于有效的试用期内

<a name="english"></a>
## English

### Description
A tool to resolve the following prompt issue during Cursor's free trial period:
```
Too many free trial accounts used on this machine. Please upgrade to pro. We have this limit in place to prevent abuse. Please let us know if you believe this is a mistake.
```

### Features
- Reset Cursor free trial limitations
- Provides both automatic and manual reset methods
- Support multiple platforms
- Node.js implementation for personal use

### System Support
- ✅ Windows (Tested)
- ✅ MacOS (Tested)
- ✅ Linux (Tested)

### Automatic Reset (Node.js Version)
#### Prerequisites
- Node.js installed on your system
- npm package manager
- Administrator/root privileges
- Ensure Cursor is completely closed before use

#### Installation & Usage

1. Clone this repository
2. Install dependencies:
   ```bash
   npm/pnpm/yarn install
   ```
3. Run the script with administrator privileges:
   ```bash
   node main.js
   ```
4. Follow the prompts
5. Restart Cursor to apply changes

### Manual Reset
1. Close Cursor completely
2. Locate the storage.json file:
   - Windows: `%APPDATA%\Roaming\Cursor\User\globalStorage\storage.json`
   - MacOS: `~/Library/Application Support/Cursor/User/globalStorage/storage.json`
   - Linux: `~/.config/Cursor/User/globalStorage/storage.json`
3. Make the file writable (if needed):
   - Windows: Right click -> Properties -> Uncheck "Read-only"
   - MacOS/Linux: `chmod 666 storage.json`
4. Edit the file and replace these fields with new random values:
   ```json
   {
     "telemetry.macMachineId": "generate-64-char-hex",
     "telemetry.machineId": "generate-64-char-hex",
     "telemetry.devDeviceId": "generate-uuid-format"
   }
   ```
   - For hex values: Use 64 characters (0-9, a-f)
   - For UUID: Use format like "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
5. Make the file read-only:
   - Windows: Right click -> Properties -> Check "Read-only"
   - MacOS/Linux: `chmod 444 storage.json`
6. Restart Cursor

### ⚠️ Cautions
1. Use this tool at your own risk
2. Backup important data before use
3. For educational and research purposes only

### Disclaimer
This tool is for educational purposes only. Users bear all risks and responsibilities associated with its use.

### Contributing
Issues and Pull Requests are welcome to help improve this project.
### 特别说明
此 Node.js 版本是个人使用的版本，相比[原版的 Go 实现](https://github.com/yuaotian/go-cursor-help)，这个版本更适合前端开发人员使用。

---

<a name="chinese"></a>
## 中文

### 问题描述
解决Cursor在免费订阅期间出现以下提示的问题:
```
Too many free trial accounts used on this machine. Please upgrade to pro. We have this limit in place to prevent abuse. Please let us know if you believe this is a mistake.
```

### 功能特性
- 重置Cursor免费试用限制
- 提供自动和手动重置方法
- 支持多个操作系统平台

### 系统支持
- ✅ Windows (已测试)
- ✅ MacOS (已测试)
- ✅ Linux (已测试)

### 自动重置 (Node.js 版本)
#### 使用前提
- 系统已安装 Node.js
- 已安装 npm/pnpm/yarn 包管理器
- 需要管理员/root权限执行
- 请确保已完全退出Cursor程序

#### 安装和使用方法

1. 克隆此仓库
2. 安装依赖：
   ```bash
   npm/pnpm/yarn install
   ```
3. 以管理员身份运行脚本：
   ```bash
   node main.js
   ```
4. 按照提示进行操作
5. 重启 Cursor 即可

### 手动重置
1. 完全关闭Cursor
2. 找到storage.json文件：
   - Windows: `%APPDATA%\Roaming\Cursor\User\globalStorage\storage.json`
   - MacOS: `~/Library/Application Support/Cursor/User/globalStorage/storage.json`
   - Linux: `~/.config/Cursor/User/globalStorage/storage.json`
3. 修改文件为可写（如果需要）：
   - Windows: 右键 -> 属性 -> 取消勾选"只读"
   - MacOS/Linux: `chmod 666 storage.json`
4. 编辑文件，替换以下字段为新的随机值：
   ```json
   {
     "telemetry.macMachineId": "生成64位十六进制",
     "telemetry.machineId": "生成64位十六进制",
     "telemetry.devDeviceId": "生成UUID格式"
   }
   ```
   - 十六进制值：使用64个字符(0-9, a-f)
   - UUID格式：类似 "xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
5. 将文件设为只读：
   - Windows: 右键 -> 属性 -> 勾选"只读"
   - MacOS/Linux: `chmod 444 storage.json`
6. 重启Cursor

### ⚠️ 注意事项
1. 使用本工具需要您自行承担风险
2. 建议在重要数据做好备份后使用
3. 本工具仅用于学习研究,请勿用于商业用途

### 免责声明
本工具仅供学习交流使用,使用本工具所造成的任何问题由使用者自行承担。

### 贡献
欢迎提交Issue和Pull Request来帮助改进这个项目。

## License
MIT License

Copyright (c) 2024

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.






