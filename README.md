# How to use Sinatra AngularJS Base

This repo is a simple start bootstrap for a project with an API and a AngularJS client. This use Sinatra with mongoid to build the API and AngularJS (yo gulp generator).

For use on development you have to startup the sinatra server and the gulp server separatily. But for production you build your client with gulp and later deploy the sinatra app.

** Start sinatra server **

```bash
shotgun
```

** Start gulp server **

```bash
gulp serve
```

## Dependencies

### Ruby dependencies

- Sinatra
- mongoid
- bson_ext
- json
- rspec
- nyan-cat-formatter
- shotgun

### JS dependencies

- yo
- bower
- gulp
- npm
