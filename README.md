# bootstrap-vue-3-wrappers
Vue 3 Plugin for bringing Bootstrap 5 into your Vue Project!


## Aim of the Project
Vue 3 is out and there is no Bootstrap for it! This Vue 3 Plugin wraps Bootstrap 5 and serves them as a Plugin (like BootstrapVue)!

## Using the Plugin
```
yarn add bootstrap-vue-3-wrappers
```
once you have installed the package, in the entry file of your Vue 3 Project (main.js / main.ts) import it like so:

```javascript
import BootstrapVue3Wrappers from 'bootstrap-vue-3-wrappers'
```

and then import it globally like this:

```javascript
createApp(App).use(BootstrapVue3Wrappers).mount('#app')
```

You can also import it locally like so in any component:


```javascript
import BButton from 'bootstrap-vue-3-wrappers'
```


Dont forget to add Bootstrap 5 to your Vu3 3 Project


```
yarn add bootstrap

```

and then in your main.js / main.ts

```javascript
import 'bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css'
```

If you use typescript add a vendor.d.ts file for the package:

```javascript
declare module 'bootstrap-vue-3-wrappers'
```


## List of Components (work in progress):
```html
<b-alert></b-alert>
<b-button></b-button>
<b-button-group></b-button-group>
<b-card></b-card>
<b-col></b-col>
<b-collapse></b-collapse>
<b-container></b-container>
<b-dropdown></b-dropdown>
<b-form></b-form>
<b-form-checkbox></b-form-checkbox>
<b-form-file></b-form-file>
<b-form-group></b-form-group>
<b-form-input></b-form-input>
<b-form-radio></b-form-radio>
<b-icon></b-icon>
<b-modal></b-modal>
<b-navbar></b-navbar>
<b-navbar-brand></b-navbar-brand>
<b-navbar-nav></b-navbar-nav>
<b-navbar-toggle></b-navbar-toggle>
<b-overlay></b-overlay>
<b-row></b-row>
```


