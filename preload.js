const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('electron', {
  saveReport: (report) => ipcRenderer.invoke('save-report', report),
  getReports: () => ipcRenderer.invoke('get-reports'),
  platform: process.platform
});