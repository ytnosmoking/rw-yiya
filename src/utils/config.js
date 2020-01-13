let devBaseUrl = 'http://erp.yiya.art';
let prodBaseUrl = 'http://erp.yiya.art';

export const isDev = process.env.NODE_ENV === 'development'
export const baseUrl = isDev ? devBaseUrl : prodBaseUrl;

const devNet = 'http://yiya-web.yiya.art/'
const proNet = 'http://m.yiya.art/'
export const outNet = isDev ? devNet : proNet