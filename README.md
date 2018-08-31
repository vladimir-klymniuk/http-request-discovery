# http-request-discovery
Nodejs backend or aws serverless application discovers details about http request.


# Run aws lambda as serverless application.

```bash
cd aws
sls deploy
```


# Run as backend application.
```bash
cd project
npm start
```


# Supports:
```text
- Country code discovery by ip;
- Exploring payment price tier for user by country code;
- Device detection by user-agent using "Wurfl" library.
```
