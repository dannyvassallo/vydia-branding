#Vydia Brand Guidelines Page

Clone the repo using the GUI or terminal. To do so in terminal, use the following:
```shell
git clone https://github.com/dannyvassallo/vydia-branding.git
cd vydia-branding
```

From the "vydia-branding" directory, install the gems by running the following:
```shell
bundle install
```

To fire up the server while in the "vydia-branding" directory use this command:
```shell
middleman s
```

If you are having issues with livereload not working fire up the server using:
```shell
middleman s --force-polling --verbose
```

To kill the server use "ctrl+c"

If you find yourself curious as to what directory you are in use the following in terminal:
```shell
pwd
```
It should turn up "vydia-branding"

### Deploying

Add the heroku remote
```shell
heroku git:remote -a vydia-branding
```

To deploy, commit all changes and pass in:
```shell
git push heroku master
```

To deploy a non-master branch use:
```shell
git push heroku MY-NEW-BRANCH:master
```
