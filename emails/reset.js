module.exports = function (email, token) {
  return {
    to: email,
    from: process.env.EMAIL,
    subject: 'Восстановление пароля',
    html: `
      <h1>Вы забыли пароль?</h1>
      <p>Если нет, то проигнорируйте данное письмо</p>
      <p>Если забыли, нажмите на ссылку:</p>
      <p><a href="${process.env.BASE_URL}/auth/password/${token}">Восстановить пароль</a></p>
      <hr />
      <a href="${process.env.BASE_URL}">Магазин курсов</a>
    `
  }
}