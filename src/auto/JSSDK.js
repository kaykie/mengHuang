/**
 * Web 与 AJ 通讯
 * @example
 * let auto = new AutoX();
 */
export default class AutoX {
  constructor () {
    this._callbackStore_ = {}
    this._callbackCounter_ = 0
  }

  /**
   * 保存回调函数,等待调用
   * @template T
   * @param {(data:T)=>void} cb
   * @returns
   */
  _setCallback_ (cb) {
    this._callbackCounter_++
    this._callbackStore_[this._callbackCounter_] = cb
    return this._callbackCounter_
  }

  /**
   * 查找 回调函数
   * @template T
   * @param {number} callId
   * @returns {(data:T)=>void}
   */
  _getCallback_ (callId) {
    let cb = this._callbackStore_[callId]
    if (cb) {
      delete this._callbackStore_[callId]
    }
    return cb
  }

  /**
   * web 调用 AJ
   * @template T
   * @param {string} cmd
   * @param {*} args
   * @param {(data:T)=>void} cb
   */
  invoke (cmd, args, cb) {
    let callId = -1
    try {
      callId = this._setCallback_(cb)
      let data = JSON.stringify({
        cmd: cmd,
        args: args,
        callId: callId,
      })
      // 传给 aj
      console.log('jsbridge://' + encodeURIComponent(data))
    } catch (e) {
      console.trace(e)
    }
  }

  /**
   * AJ 回调入口
   * @template T
   * @param {{callId:number,args:T}} data
   */
  callback (data) {
    let callId = data.callId
    let args = data.args

    let callbackFun = this._getCallback_(callId)
    if (callbackFun) {
      // 调用
      callbackFun(args)
    }
  }

  /**
   * 执行 aj 代码
   * @template T
   * @param {string} code
   * @param {(res:T)=>void} cb
   */
  execAjCode (code, cb) {
    // 利用特殊标识, 让 aj 去判断, 执行特殊的逻辑
    this.invoke(code, '[code]', cb)
  }
}

// @ts-ignore
window.log = function log (...arg) {
  console.log(arg.join(' '))
}

window.auto = new AutoX()

