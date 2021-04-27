const authController = require('../../controllers/auth.controller')
const expect = require('chai').expect
const sinon = require('sinon')

describe('AuthController', function () {
  describe('isAuthorized', function () {
    let user = {}

    beforeEach('setup fake user object', () => {
      user = {
        roles: ['user'],
        isAuthorized: function(neededRole) {
          return this.roles.indexOf(neededRole) >= 0
        }
      }

      sinon.spy(user, 'isAuthorized')
      authController.setUser(user)
    })

    it('Should return false if not authorized', function () {
      expect(authController.isAuthorized('admin')).to.be.false
      expect(user.isAuthorized.calledOnce).to.be.true
      expect(user.isAuthorized.firstCall.args[0]).to.equal('admin')
    })

    it('Should return true if authorized', function() {
      authController.setRoles([ 'user', 'admin' ])
    })
  })

  describe('getIndex', function () {
    let user = {}

    beforeEach('setup fake user object', () => {
      user = {
        roles: ['user'],
        isAuthorized: function(neededRole) {
          return this.roles.indexOf(neededRole) >= 0
        }
      }
    })

    it('should render index if authorized', function () {
      const req = { user }

      sinon.stub(user, 'isAuthorized').returns(true)

      const res = {
        render: sinon.spy()
      }

      authController.getIndex(req, res)

      expect(req.user.isAuthorized.calledOnce).to.be.true
      expect(res.render.calledOnce).to.be.true
      expect(res.render.firstCall.args[0]).to.equal('index')
    })

    it('should render notAuthorized if not authorized', function () {
      const req = { user }

      sinon.stub(user, 'isAuthorized').returns(false)

      const res = {
        render: sinon.spy()
      }

      authController.getIndex(req, res)

      expect(req.user.isAuthorized.calledOnce).to.be.true
      expect(res.render.calledOnce).to.be.true
      expect(res.render.firstCall.args[0]).to.equal('notAuthorized')
    })

    it('should render error if error is thrown', function () {
      const req = { user }

      sinon.stub(user, 'isAuthorized').throws('something terrible happened')

      const res = {
        render: sinon.spy()
      }

      authController.getIndex(req, res)

      expect(req.user.isAuthorized.calledOnce).to.be.true
      expect(res.render.calledOnce).to.be.true
      expect(res.render.firstCall.args[0]).to.equal('error')
    })

    it('should render index if authorized (using sinon mock)', function () {
      const req = { user }

      sinon.stub(user, 'isAuthorized').returns(true)

      const res = {
        render: function () {}
      }

      const mock = sinon.mock(res)
      mock.expects('render').once().withExactArgs('index')

      authController.getIndex(req, res)

      expect(req.user.isAuthorized.calledOnce).to.be.true
      
      mock.verify()
    })
  })
})
