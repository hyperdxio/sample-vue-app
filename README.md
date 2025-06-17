# HyperDX Vue Browser Integration Demo

This is a minimal Vue 3 application that demonstrates how to integrate [HyperDX](https://www.hyperdx.io) browser SDK for frontend observability including console logs, network requests, RUM, and error tracking.

The app showcases:
- Simple Vue 3 setup with TypeScript and Vite
- HyperDX browser SDK integration with automatic instrumentation
- Console log capture and network request monitoring
- Zero-config observability for frontend applications

---

## ✨ Features

- ✅ Auto-instrumented console logs
- ✅ Advanced network capture with full request/response headers and bodies
- ✅ Automatic error tracking and reporting
- ✅ Session replay capabilities
- ✅ One-command setup with environment variable configuration

---

## 🛠 Requirements

- Node.js 18+
- Yarn 1.22+
- [HyperDX account](https://www.hyperdx.io) and API key
- Modern web browser

---

## 🚀 Quick Start

### 1. Clone the Repository

```bash
git clone <repository-url>
cd vue-example-app
```

### 2. Install Dependencies

```bash
yarn install
```

### 3. Set Your API Key

Create a `.env` file in the root directory:

```bash
VITE_HYPERDX_API_KEY="your-hyperdx-api-key"
```

### 4. Run the Development Server

```bash
yarn dev
```

The app will be available at `http://localhost:5173`

---

## 🔍 What's Captured

HyperDX automatically captures:

| Feature | Description |
|---------|-------------|
| **Console Logs** | All `console.*` calls |
| **Network Requests** | HTTP requests with headers, bodies, and timing |
| **JavaScript Errors** | Uncaught exceptions and promise rejections |
| **User Sessions** | Session tracking with anonymous user IDs |
| **Performance Metrics** | Page load times and resource timings |

---

## 📈 What You'll See in HyperDX

- Real-time console logs from your Vue application
- Network waterfall view showing all API calls
- Error tracking with stack traces
- Session timeline showing user interactions
- Performance metrics for page loads

Example captured data:
- Component lifecycle logs
- API requests to external services
- User interaction events
- Runtime errors with source maps

---

## 🎯 Usage Examples

### Logging Custom Events

```typescript
// In any Vue component
console.log('User clicked button', { buttonId: 'submit' })
console.error('Form validation failed', { errors: validationErrors })
```

### Tracking API Calls

```typescript
// Network requests are automatically captured
fetch('https://api.example.com/data')
  .then(response => response.json())
  .then(data => console.log('API response', data))
```

### Error Handling

```typescript
// Errors are automatically reported
try {
  riskyOperation()
} catch (error) {
  console.error('Operation failed', error)
}
```

---

## 🚀 Next Steps

- Add custom attributes to logs using structured logging
- Implement user identification for better session tracking
- Add performance marks for specific user flows
- Set up alerts in HyperDX for error rates and performance issues

---

## 📄 License

MIT – feel free to use, fork, modify, and contribute.
