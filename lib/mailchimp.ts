import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'us16', // 从 API Key 的末尾提取 (e.g., xxx-us16)
});

export default mailchimp;
