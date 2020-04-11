const {Router} = require('express')
const Cart = require('../models/cart')
const Course = require('../models/course')
const router = Router()

router.post('/add', async () => {
  const course = await Course.geyById(req.body.id)
  await Cart.add(course)
  res.redirect('/cart')
})

router.get('/', async (req, res) => {
  const cart = await Cart.fetch()
  res.render('cart', {
    title: 'Корзина',
    cart
  })
})

module.exports = router