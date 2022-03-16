let baseURL = ''
const timeout = 10000

if (process.env.NODE_ENV === 'development') { baseURL = '/api' } else if (process.env.NODE_ENV === 'production') {
  baseURL = '/'
}

export { baseURL, timeout }
