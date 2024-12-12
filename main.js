import { v4 as genUuid } from 'uuid';
import crypt from 'crypto';
import filesys from 'fs';
import pth from 'path';
import system from 'os';

function genRandomId() {
    const randData = crypt.randomBytes(32);
    return crypt.createHash('sha256').update(randData).digest('hex');
}

function genMacId() {
    return genRandomId();
}

function genDevId() {
    return genUuid();
}

function setPerms(fPath) {
    return filesys.promises.chmod(fPath, 0o444);
}

function getStoragePath() {
    let cfgDir;
    switch (process.platform) {
        case 'darwin':
            cfgDir = pth.join(system.homedir(), 'Library', 'Application Support', 'Cursor', 'User', 'globalStorage');
            break;
        case 'win32':
            cfgDir = pth.join(process.env.APPDATA, 'Cursor', 'User', 'globalStorage');
            break;
        case 'linux':
            cfgDir = pth.join(system.homedir(), '.config', 'Cursor', 'User', 'globalStorage');
            break;
        default:
            throw new Error(`不支持的操作系统: ${process.platform}`);
    }
    return pth.join(cfgDir, 'storage.json');
}

async function init() {
    try {

        const cfgPath = getStoragePath();
        const rawData = await filesys.promises.readFile(cfgPath, 'utf8');
        const cfg = JSON.parse(rawData);

        cfg['telemetry.macMachineId'] = genMacId();
        cfg['telemetry.machineId'] = genRandomId();
        cfg['telemetry.devDeviceId'] = genDevId();

        const newData = JSON.stringify(cfg, null, 4);

        await filesys.promises.chmod(cfgPath, 0o666);
        await filesys.promises.writeFile(cfgPath, newData, 'utf8');
        await setPerms(cfgPath);

        console.log('已更新，重启Cursor');
    } catch (err) {
        console.error('error:', err.message);
    }
}

init(); 