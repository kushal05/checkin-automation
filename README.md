# checkin-automation

Create a folder named configs and a file (creds.js) inside configs folder and add the following:

```
const creds = {
    username: '-->EMAIL<---',
    password: '-->PASSWORD<--',
    razorpayUrl: '-->RAZORPAY URL<--',
    springboardUrl: '-->SPRINGBOARD URL<--',
    springUserName: '-->91S USERNAME<--',
    springPassword: '-->91S PASSWORD<--'
};

export default creds;
```

Install node modules:

```
npm install
```

Run the project:
```
npm run wdio
```