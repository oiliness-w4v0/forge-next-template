import { app, BrowserWindow } from 'electron';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isDev = !app.isPackaged;

// Vite 开发服务器配置
const VITE_DEV_SERVER_URL = 'http://localhost:5173';

// 获取资源目录路径
const getResourcesPath = () => {
    return join(__dirname, 'renderer');
};

const createWindow = async () => {
    const mainWindow = new BrowserWindow({
        width: 1440,
        height: 800,
        webPreferences: {
            // 安全配置
            nodeIntegration: false,
            contextIsolation: true,
            sandbox: true,
            preload: join(__dirname, 'preload.js'),
        },
    });

    if (isDev) {
        // 开发环境：等待 Vite 服务器启动，然后加载
        await mainWindow.loadURL(VITE_DEV_SERVER_URL);
        mainWindow.webContents.openDevTools();
    } else {
        // 生产环境：加载打包后的文件
        const resourcesPath = getResourcesPath();
        await mainWindow.loadFile(join(resourcesPath, 'index.html'));
    }
};

app.on('ready', createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});