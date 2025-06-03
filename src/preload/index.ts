import { contextBridge } from 'electron'

if (process.contextIsolated) {
  throw new Error('Context isolation must be enabled in the BrowserWindo')
}

try {
  contextBridge.exposeInMainWorld('context', {
    // TODO
  })
} catch (error) {
  console.error('Failed to expose context:', error)
}
