import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class AuthenticationController {
  public async index(ctx: HttpContextContract) {
    return  ctx.view.render('admin/home') 
  }

  public async ForgotPassword(ctx: HttpContextContract) {
    return  ctx.view.render('storefront/authentication/forgot-password') 
  }

  public async SignUp(ctx: HttpContextContract) {
    return  ctx.view.render('storefront/authentication/sign-up') 
  }

  public async SignIn(ctx: HttpContextContract) {
    return  ctx.view.render('storefront/authentication/sign-in') 
  }



}

