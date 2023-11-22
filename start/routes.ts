/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer''
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async ({ view }) => {
  return view.render('storefront/home')
})

Route.get('/home-admin', 'AuthenticationController.index').as('admin-home')
Route.get('/forgot-password', 'AuthenticationController.ForgotPassword').as('authentication.forgot-password')
Route.get('/sign-up', 'AuthenticationController.SignUp').as('authentication.sign-up')
Route.get('/sign-in', 'AuthenticationController.SignIn').as('authentication.sign-in')

